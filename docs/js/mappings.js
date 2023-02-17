const HTTP = axios.create({
  baseURL: "https://linkieapi.shedaniel.me",
});

let namespaces = {
  mojang_srg: "Mojang (SRG)",
  mcp: "MCP",
};

window.addEventListener("load", (e) => {
  let searches = document.getElementsByClassName("mappingDiv");
  for (let i = 0; i < searches.length; i++) {
    let search = searches[i].querySelector(".mappingSearchInput");
    search.addEventListener(
      "keyup",
      delay(function (e) {
        update(e.target);
      }, 500)
    );
    for (const tab of searches[i].querySelectorAll(".tabbed-set > input")) {
      tab.addEventListener("click", () => update(search));
    }
  }
});

const reqMappings = async (data, ns, version, allow) => {
  return HTTP.get(`/api/search`, {
    params: {
      namespace: ns,
      query: data,
      version: version,
      limit: 5,
      allowFields: allow[0],
      allowMethods: allow[1],
      allowClasses: allow[2],
    },
  });
};

function delay(callback, ms) {
  var timer = 0;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}

function processEntry(entry) {
  let type;
  if (entry.t === "c") type = "class";
  else if (entry.t === "f") type = "field";
  else if (entry.t === "m") type = "method";
  else type = entry.t;
  let translatedTo;
  if (entry.l) translatedTo = toBlock(entry.l);
  else translatedTo = undefined;
  return {
    obf: entry.o,
    intermediary: entry.i,
    named: entry.n,
    descObf: entry.d,
    descIntermediary: entry.e,
    descNamed: entry.f,
    ownerObf: entry.a,
    ownerIntermediary: entry.b,
    ownerNamed: entry.c,
    ownerObfClient: entry.g,
    obfClient: entry.h,
    descObfClient: entry.j,
    ownerObfServer: entry.k,
    obfServer: entry.l,
    descObfServer: entry.m,
    type,
    translatedTo,
  };
}

function getName(entry) {
  return entry.named || entry.intermediary || "";
}
function getOwnerName(entry) {
  return entry.ownerNamed || entry.ownerIntermediary || "";
}

function getDesc(entry) {
  return entry.descNamed || entry.descIntermediary || "";
}

function getDisplayName(entry) {
  return entry.type === "class"
    ? onlyClass(getName(entry))
    : `${onlyClass(getOwnerName(entry))}.${onlyClass(getName(entry))}`;
}

function onlyClass(str) {
  if (str) {
    let indexOf = str.lastIndexOf("/");
    str = indexOf === -1 ? str : str.substring(indexOf + 1);
    return format(str);
  } else {
    return str;
  }
}

function format(str) {
  return str ? str.replaceAll("$", ".").replaceAll("/", ".") : str;
}

function mixinTarget(entry) {
  return `L${getOwnerName(entry)};${getName(entry)}${
    entry.type === "field" ? ":" : ""
  }${getDesc(entry)}`;
}

function accessTransformer(entry) {
  if (entry.type === "class") {
    return `public ${getName(entry).replaceAll("/", ".")}`;
  } else if (entry.type === "method") {
    return `public ${getOwnerName(entry).replaceAll("/", ".")} ${
      entry.intermediary
    }${getDesc(entry)} # ${getName(entry)}`;
  } else {
    return `public ${getOwnerName(entry).replaceAll("/", ".")} ${
      entry.intermediary
    } # ${getName(entry)}`;
  }
}

function getPath(entry) {
  return entry.type === "class"
    ? entry.intermediary
    : `${entry.ownerIntermediary}#${entry.intermediary}`;
}

const mixin = (entry, i) => {
  if (entry.type === "class") return "";
  return `<pre id="__code_${
    69420 + i
  }"><code><span class="l l-Scalar l-Scalar-Plain">Mixin:</span> <span id="copy">${mixinTarget(
    entry
  )}</span></code><button class="md-clipboard md-icon" data-clipboard-target="#__code_${
    69420 + i
  } > code > #copy" title="Copy to clipboard"></button></pre><hr style="margin: 0"/>`;
};

const at = (entry, i) => {
  return `<pre id="__code_${
    42069 + i
  }"><code><span class="k">AT:</span> <span id="copy">${accessTransformer(
    entry
  )}</code></span><button class="md-clipboard md-icon" data-clipboard-target="#__code_${
    42069 + i
  } > code > #copy" title="Copy to clipboard" onClick="navigator.clipboard.writeText(${accessTransformer(
    entry
  )})"></button></pre>`;
};

function update(e) {
  NProgress.start();
  let ns = Object.keys(namespaces).find(
    (key) =>
      namespaces[key] ===
      document.querySelector(
        `.tabbed-labels > label[for=${
          e.parentElement.parentElement.querySelector(
            ".tabbed-set > input:checked"
          ).id
        }] > a`
      ).innerHTML
  );
  let version = e.getAttribute("version");
  let allow = e.getAttribute("allow").split(",").map((x) => x === "true");
  let results = e.parentElement.querySelector(".mappingSearchList");
  if (e.value.length < 3) {
    results.innerHTML = "";
    NProgress.done();
    return;
  }

  reqMappings(e.value, ns, version, allow).then((res) => {
    let entries = res.data.entries;
    if (entries) {
      let html = "";
      for (let i = 0; i < entries.length; i++) {
        let entry = processEntry(entries[i]);
        html += `<div class="mappingSearchItem"><strong style="padding-right: .5rem">${getDisplayName(
          entry
        )}</strong><span class="mappingTag type-${entry.type}">${
          entry.type
        }</span><p style="margin: 0; font-size: 15px"><code class="highlight"><span class="nc">${getPath(
          entry
        )}</span></code></p><div class="highlight hlmapping">${mixin(
          entry,
          i
        )}${at(entry, i)}</div></div>`;
      }
      html += `<div class="mappingSearchExtra">Powered by <a href="https://github.com/linkie" target="_blank">Linkie<a/>.</div>`;
      results.innerHTML = html;
    } else {
      results.innerHTML = `<div class="mappingSearchItem">No results found.</div><div class="mappingSearchExtra">Powered by <a href="https://github.com/linkie" target="_blank">Linkie<a/>.</div>`;
    }
  });
  NProgress.done();
}
