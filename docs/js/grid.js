"use strict";
(() => {
  var Ui = Object.create;
  var Or = Object.defineProperty;
  var Wi = Object.getOwnPropertyDescriptor;
  var Di = Object.getOwnPropertyNames,
    Wt = Object.getOwnPropertySymbols,
    Vi = Object.getPrototypeOf,
    _r = Object.prototype.hasOwnProperty,
    pn = Object.prototype.propertyIsEnumerable;
  var cn = (e, t, r) =>
      t in e
        ? Or(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r,
          })
        : (e[t] = r),
    P = (e, t) => {
      for (var r in t || (t = {})) _r.call(t, r) && cn(e, r, t[r]);
      if (Wt) for (var r of Wt(t)) pn.call(t, r) && cn(e, r, t[r]);
      return e;
    };
  var fn = (e, t) => {
    var r = {};
    for (var n in e) _r.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Wt)
      for (var n of Wt(e)) t.indexOf(n) < 0 && pn.call(e, n) && (r[n] = e[n]);
    return r;
  };
  var Dt = (e, t) => () => (
    t ||
      e(
        (t = {
          exports: {},
        }).exports,
        t
      ),
    t.exports
  );
  var zi = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of Di(t))
        !_r.call(e, o) &&
          o !== r &&
          Or(e, o, {
            get: () => t[o],
            enumerable: !(n = Wi(t, o)) || n.enumerable,
          });
    return e;
  };
  var Tt = (e, t, r) => (
    (r = e != null ? Ui(Vi(e)) : {}),
    zi(
      t || !e || !e.__esModule
        ? Or(r, "default", {
            value: e,
            enumerable: !0,
          })
        : r,
      e
    )
  );
  var un = Dt((Mr, ln) => {
    (function (e, t) {
      typeof Mr == "object" && typeof ln != "undefined"
        ? t()
        : typeof define == "function" && define.amd
        ? define(t)
        : t();
    })(Mr, function () {
      "use strict";
      function e(r) {
        var n = !0,
          o = !1,
          i = null,
          a = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0,
          };
        function s(M) {
          return !!(
            M &&
            M !== document &&
            M.nodeName !== "HTML" &&
            M.nodeName !== "BODY" &&
            "classList" in M &&
            "contains" in M.classList
          );
        }
        function p(M) {
          var Be = M.type,
            ze = M.tagName;
          return !!(
            (ze === "INPUT" && a[Be] && !M.readOnly) ||
            (ze === "TEXTAREA" && !M.readOnly) ||
            M.isContentEditable
          );
        }
        function c(M) {
          M.classList.contains("focus-visible") ||
            (M.classList.add("focus-visible"),
            M.setAttribute("data-focus-visible-added", ""));
        }
        function f(M) {
          M.hasAttribute("data-focus-visible-added") &&
            (M.classList.remove("focus-visible"),
            M.removeAttribute("data-focus-visible-added"));
        }
        function l(M) {
          M.metaKey ||
            M.altKey ||
            M.ctrlKey ||
            (s(r.activeElement) && c(r.activeElement), (n = !0));
        }
        function m(M) {
          n = !1;
        }
        function d(M) {
          s(M.target) && (n || p(M.target)) && c(M.target);
        }
        function h(M) {
          s(M.target) &&
            (M.target.classList.contains("focus-visible") ||
              M.target.hasAttribute("data-focus-visible-added")) &&
            ((o = !0),
            window.clearTimeout(i),
            (i = window.setTimeout(function () {
              o = !1;
            }, 100)),
            f(M.target));
        }
        function g(M) {
          document.visibilityState === "hidden" && (o && (n = !0), B());
        }
        function B() {
          document.addEventListener("mousemove", K),
            document.addEventListener("mousedown", K),
            document.addEventListener("mouseup", K),
            document.addEventListener("pointermove", K),
            document.addEventListener("pointerdown", K),
            document.addEventListener("pointerup", K),
            document.addEventListener("touchmove", K),
            document.addEventListener("touchstart", K),
            document.addEventListener("touchend", K);
        }
        function oe() {
          document.removeEventListener("mousemove", K),
            document.removeEventListener("mousedown", K),
            document.removeEventListener("mouseup", K),
            document.removeEventListener("pointermove", K),
            document.removeEventListener("pointerdown", K),
            document.removeEventListener("pointerup", K),
            document.removeEventListener("touchmove", K),
            document.removeEventListener("touchstart", K),
            document.removeEventListener("touchend", K);
        }
        function K(M) {
          (M.target.nodeName && M.target.nodeName.toLowerCase() === "html") ||
            ((n = !1), oe());
        }
        document.addEventListener("keydown", l, !0),
          document.addEventListener("mousedown", m, !0),
          document.addEventListener("pointerdown", m, !0),
          document.addEventListener("touchstart", m, !0),
          document.addEventListener("visibilitychange", g, !0),
          B(),
          r.addEventListener("focus", d, !0),
          r.addEventListener("blur", h, !0),
          r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host
            ? r.host.setAttribute("data-js-focus-visible", "")
            : r.nodeType === Node.DOCUMENT_NODE &&
              (document.documentElement.classList.add("js-focus-visible"),
              document.documentElement.setAttribute(
                "data-js-focus-visible",
                ""
              ));
      }
      if (typeof window != "undefined" && typeof document != "undefined") {
        window.applyFocusVisiblePolyfill = e;
        var t;
        try {
          t = new CustomEvent("focus-visible-polyfill-ready");
        } catch (r) {
          (t = document.createEvent("CustomEvent")),
            t.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});
        }
        window.dispatchEvent(t);
      }
      typeof document != "undefined" && e(document);
    });
  });
  var mn = Dt((Lr) => {
    (function (e) {
      var t = function () {
          try {
            return !!Symbol.iterator;
          } catch (c) {
            return !1;
          }
        },
        r = t(),
        n = function (c) {
          var f = {
            next: function () {
              var l = c.shift();
              return {
                done: l === void 0,
                value: l,
              };
            },
          };
          return (
            r &&
              (f[Symbol.iterator] = function () {
                return f;
              }),
            f
          );
        },
        o = function (c) {
          return encodeURIComponent(c).replace(/%20/g, "+");
        },
        i = function (c) {
          return decodeURIComponent(String(c).replace(/\+/g, " "));
        },
        a = function () {
          var c = function (l) {
              Object.defineProperty(this, "_entries", {
                writable: !0,
                value: {},
              });
              var m = typeof l;
              if (m !== "undefined")
                if (m === "string") l !== "" && this._fromString(l);
                else if (l instanceof c) {
                  var d = this;
                  l.forEach(function (oe, K) {
                    d.append(K, oe);
                  });
                } else if (l !== null && m === "object")
                  if (Object.prototype.toString.call(l) === "[object Array]")
                    for (var h = 0; h < l.length; h++) {
                      var g = l[h];
                      if (
                        Object.prototype.toString.call(g) ===
                          "[object Array]" ||
                        g.length !== 2
                      )
                        this.append(g[0], g[1]);
                      else
                        throw new TypeError(
                          "Expected [string, any] as entry at index " +
                            h +
                            " of URLSearchParams's input"
                        );
                    }
                  else
                    for (var B in l)
                      l.hasOwnProperty(B) && this.append(B, l[B]);
                else
                  throw new TypeError(
                    "Unsupported input's type for URLSearchParams"
                  );
            },
            f = c.prototype;
          (f.append = function (l, m) {
            l in this._entries
              ? this._entries[l].push(String(m))
              : (this._entries[l] = [String(m)]);
          }),
            (f.delete = function (l) {
              delete this._entries[l];
            }),
            (f.get = function (l) {
              return l in this._entries ? this._entries[l][0] : null;
            }),
            (f.getAll = function (l) {
              return l in this._entries ? this._entries[l].slice(0) : [];
            }),
            (f.has = function (l) {
              return l in this._entries;
            }),
            (f.set = function (l, m) {
              this._entries[l] = [String(m)];
            }),
            (f.forEach = function (l, m) {
              var d;
              for (var h in this._entries)
                if (this._entries.hasOwnProperty(h)) {
                  d = this._entries[h];
                  for (var g = 0; g < d.length; g++) l.call(m, d[g], h, this);
                }
            }),
            (f.keys = function () {
              var l = [];
              return (
                this.forEach(function (m, d) {
                  l.push(d);
                }),
                n(l)
              );
            }),
            (f.values = function () {
              var l = [];
              return (
                this.forEach(function (m) {
                  l.push(m);
                }),
                n(l)
              );
            }),
            (f.entries = function () {
              var l = [];
              return (
                this.forEach(function (m, d) {
                  l.push([d, m]);
                }),
                n(l)
              );
            }),
            r && (f[Symbol.iterator] = f.entries),
            (f.toString = function () {
              var l = [];
              return (
                this.forEach(function (m, d) {
                  l.push(o(d) + "=" + o(m));
                }),
                l.join("&")
              );
            }),
            (e.URLSearchParams = c);
        },
        s = function () {
          try {
            var c = e.URLSearchParams;
            return (
              new c("?a=1").toString() === "a=1" &&
              typeof c.prototype.set == "function" &&
              typeof c.prototype.entries == "function"
            );
          } catch (f) {
            return !1;
          }
        };
      s() || a();
      var p = e.URLSearchParams.prototype;
      typeof p.sort != "function" &&
        (p.sort = function () {
          var c = this,
            f = [];
          this.forEach(function (m, d) {
            f.push([d, m]), c._entries || c.delete(d);
          }),
            f.sort(function (m, d) {
              return m[0] < d[0] ? -1 : m[0] > d[0] ? 1 : 0;
            }),
            c._entries && (c._entries = {});
          for (var l = 0; l < f.length; l++) this.append(f[l][0], f[l][1]);
        }),
        typeof p._fromString != "function" &&
          Object.defineProperty(p, "_fromString", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function (c) {
              if (this._entries) this._entries = {};
              else {
                var f = [];
                this.forEach(function (h, g) {
                  f.push(g);
                });
                for (var l = 0; l < f.length; l++) this.delete(f[l]);
              }
              c = c.replace(/^\?/, "");
              for (var m = c.split("&"), d, l = 0; l < m.length; l++)
                (d = m[l].split("=")),
                  this.append(i(d[0]), d.length > 1 ? i(d[1]) : "");
            },
          });
    })(
      typeof global != "undefined"
        ? global
        : typeof window != "undefined"
        ? window
        : typeof self != "undefined"
        ? self
        : Lr
    );
    (function (e) {
      var t = function () {
          try {
            var o = new e.URL("b", "http://a");
            return (
              (o.pathname = "c d"),
              o.href === "http://a/c%20d" && o.searchParams
            );
          } catch (i) {
            return !1;
          }
        },
        r = function () {
          var o = e.URL,
            i = function (p, c) {
              typeof p != "string" && (p = String(p)),
                c && typeof c != "string" && (c = String(c));
              var f = document,
                l;
              if (c && (e.location === void 0 || c !== e.location.href)) {
                (c = c.toLowerCase()),
                  (f = document.implementation.createHTMLDocument("")),
                  (l = f.createElement("base")),
                  (l.href = c),
                  f.head.appendChild(l);
                try {
                  if (l.href.indexOf(c) !== 0) throw new Error(l.href);
                } catch (M) {
                  throw new Error(
                    "URL unable to set base " + c + " due to " + M
                  );
                }
              }
              var m = f.createElement("a");
              (m.href = p), l && (f.body.appendChild(m), (m.href = m.href));
              var d = f.createElement("input");
              if (
                ((d.type = "url"),
                (d.value = p),
                m.protocol === ":" ||
                  !/:/.test(m.href) ||
                  (!d.checkValidity() && !c))
              )
                throw new TypeError("Invalid URL");
              Object.defineProperty(this, "_anchorElement", {
                value: m,
              });
              var h = new e.URLSearchParams(this.search),
                g = !0,
                B = !0,
                oe = this;
              ["append", "delete", "set"].forEach(function (M) {
                var Be = h[M];
                h[M] = function () {
                  Be.apply(h, arguments),
                    g && ((B = !1), (oe.search = h.toString()), (B = !0));
                };
              }),
                Object.defineProperty(this, "searchParams", {
                  value: h,
                  enumerable: !0,
                });
              var K = void 0;
              Object.defineProperty(this, "_updateSearchParams", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: function () {
                  this.search !== K &&
                    ((K = this.search),
                    B &&
                      ((g = !1),
                      this.searchParams._fromString(this.search),
                      (g = !0)));
                },
              });
            },
            a = i.prototype,
            s = function (p) {
              Object.defineProperty(a, p, {
                get: function () {
                  return this._anchorElement[p];
                },
                set: function (c) {
                  this._anchorElement[p] = c;
                },
                enumerable: !0,
              });
            };
          ["hash", "host", "hostname", "port", "protocol"].forEach(function (
            p
          ) {
            s(p);
          }),
            Object.defineProperty(a, "search", {
              get: function () {
                return this._anchorElement.search;
              },
              set: function (p) {
                (this._anchorElement.search = p), this._updateSearchParams();
              },
              enumerable: !0,
            }),
            Object.defineProperties(a, {
              toString: {
                get: function () {
                  var p = this;
                  return function () {
                    return p.href;
                  };
                },
              },
              href: {
                get: function () {
                  return this._anchorElement.href.replace(/\?$/, "");
                },
                set: function (p) {
                  (this._anchorElement.href = p), this._updateSearchParams();
                },
                enumerable: !0,
              },
              pathname: {
                get: function () {
                  return this._anchorElement.pathname.replace(/(^\/?)/, "/");
                },
                set: function (p) {
                  this._anchorElement.pathname = p;
                },
                enumerable: !0,
              },
              origin: {
                get: function () {
                  var p = {
                      "http:": 80,
                      "https:": 443,
                      "ftp:": 21,
                    }[this._anchorElement.protocol],
                    c =
                      this._anchorElement.port != p &&
                      this._anchorElement.port !== "";
                  return (
                    this._anchorElement.protocol +
                    "//" +
                    this._anchorElement.hostname +
                    (c ? ":" + this._anchorElement.port : "")
                  );
                },
                enumerable: !0,
              },
              password: {
                get: function () {
                  return "";
                },
                set: function (p) {},
                enumerable: !0,
              },
              username: {
                get: function () {
                  return "";
                },
                set: function (p) {},
                enumerable: !0,
              },
            }),
            (i.createObjectURL = function (p) {
              return o.createObjectURL.apply(o, arguments);
            }),
            (i.revokeObjectURL = function (p) {
              return o.revokeObjectURL.apply(o, arguments);
            }),
            (e.URL = i);
        };
      if ((t() || r(), e.location !== void 0 && !("origin" in e.location))) {
        var n = function () {
          return (
            e.location.protocol +
            "//" +
            e.location.hostname +
            (e.location.port ? ":" + e.location.port : "")
          );
        };
        try {
          Object.defineProperty(e.location, "origin", {
            get: n,
            enumerable: !0,
          });
        } catch (o) {
          setInterval(function () {
            e.location.origin = n();
          }, 100);
        }
      }
    })(
      typeof global != "undefined"
        ? global
        : typeof window != "undefined"
        ? window
        : typeof self != "undefined"
        ? self
        : Lr
    );
  });
  var Zr = Dt(($t, Xr) => {
    (function (t, r) {
      typeof $t == "object" && typeof Xr == "object"
        ? (Xr.exports = r())
        : typeof define == "function" && define.amd
        ? define([], r)
        : typeof $t == "object"
        ? ($t.ClipboardJS = r())
        : (t.ClipboardJS = r());
    })($t, function () {
      return (function () {
        var e = {
            686: function (n, o, i) {
              "use strict";
              i.d(o, {
                default: function () {
                  return ji;
                },
              });
              var a = i(279),
                s = i.n(a),
                p = i(370),
                c = i.n(p),
                f = i(817),
                l = i.n(f);
              function m(U) {
                try {
                  return document.execCommand(U);
                } catch (L) {
                  return !1;
                }
              }
              var d = function (L) {
                  var _ = l()(L);
                  return m("cut"), _;
                },
                h = d;
              function g(U) {
                var L = document.documentElement.getAttribute("dir") === "rtl",
                  _ = document.createElement("textarea");
                (_.style.fontSize = "12pt"),
                  (_.style.border = "0"),
                  (_.style.padding = "0"),
                  (_.style.margin = "0"),
                  (_.style.position = "absolute"),
                  (_.style[L ? "right" : "left"] = "-9999px");
                var $ =
                  window.pageYOffset || document.documentElement.scrollTop;
                return (
                  (_.style.top = "".concat($, "px")),
                  _.setAttribute("readonly", ""),
                  (_.value = U),
                  _
                );
              }
              var B = function (L, _) {
                  var $ = g(L);
                  _.container.appendChild($);
                  var F = l()($);
                  return m("copy"), $.remove(), F;
                },
                oe = function (L) {
                  var _ =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {
                            container: document.body,
                          },
                    $ = "";
                  return (
                    typeof L == "string"
                      ? ($ = B(L, _))
                      : L instanceof HTMLInputElement &&
                        !["text", "search", "url", "tel", "password"].includes(
                          L == null ? void 0 : L.type
                        )
                      ? ($ = B(L.value, _))
                      : (($ = l()(L)), m("copy")),
                    $
                  );
                },
                K = oe;
              function M(U) {
                return (
                  typeof Symbol == "function" &&
                  typeof Symbol.iterator == "symbol"
                    ? (M = function (_) {
                        return typeof _;
                      })
                    : (M = function (_) {
                        return _ &&
                          typeof Symbol == "function" &&
                          _.constructor === Symbol &&
                          _ !== Symbol.prototype
                          ? "symbol"
                          : typeof _;
                      }),
                  M(U)
                );
              }
              var Be = function () {
                  var L =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {},
                    _ = L.action,
                    $ = _ === void 0 ? "copy" : _,
                    F = L.container,
                    Y = L.target,
                    ke = L.text;
                  if ($ !== "copy" && $ !== "cut")
                    throw new Error(
                      'Invalid "action" value, use either "copy" or "cut"'
                    );
                  if (Y !== void 0)
                    if (Y && M(Y) === "object" && Y.nodeType === 1) {
                      if ($ === "copy" && Y.hasAttribute("disabled"))
                        throw new Error(
                          'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                        );
                      if (
                        $ === "cut" &&
                        (Y.hasAttribute("readonly") ||
                          Y.hasAttribute("disabled"))
                      )
                        throw new Error(
                          `Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`
                        );
                    } else
                      throw new Error(
                        'Invalid "target" value, use a valid Element'
                      );
                  if (ke)
                    return K(ke, {
                      container: F,
                    });
                  if (Y)
                    return $ === "cut"
                      ? h(Y)
                      : K(Y, {
                          container: F,
                        });
                },
                ze = Be;
              function je(U) {
                return (
                  typeof Symbol == "function" &&
                  typeof Symbol.iterator == "symbol"
                    ? (je = function (_) {
                        return typeof _;
                      })
                    : (je = function (_) {
                        return _ &&
                          typeof Symbol == "function" &&
                          _.constructor === Symbol &&
                          _ !== Symbol.prototype
                          ? "symbol"
                          : typeof _;
                      }),
                  je(U)
                );
              }
              function Ci(U, L) {
                if (!(U instanceof L))
                  throw new TypeError("Cannot call a class as a function");
              }
              function sn(U, L) {
                for (var _ = 0; _ < L.length; _++) {
                  var $ = L[_];
                  ($.enumerable = $.enumerable || !1),
                    ($.configurable = !0),
                    "value" in $ && ($.writable = !0),
                    Object.defineProperty(U, $.key, $);
                }
              }
              function ki(U, L, _) {
                return L && sn(U.prototype, L), _ && sn(U, _), U;
              }
              function Ri(U, L) {
                if (typeof L != "function" && L !== null)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (U.prototype = Object.create(L && L.prototype, {
                  constructor: {
                    value: U,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  L && Sr(U, L);
              }
              function Sr(U, L) {
                return (
                  (Sr =
                    Object.setPrototypeOf ||
                    function ($, F) {
                      return ($.__proto__ = F), $;
                    }),
                  Sr(U, L)
                );
              }
              function Hi(U) {
                var L = Ii();
                return function () {
                  var $ = jt(U),
                    F;
                  if (L) {
                    var Y = jt(this).constructor;
                    F = Reflect.construct($, arguments, Y);
                  } else F = $.apply(this, arguments);
                  return Pi(this, F);
                };
              }
              function Pi(U, L) {
                return L && (je(L) === "object" || typeof L == "function")
                  ? L
                  : $i(U);
              }
              function $i(U) {
                if (U === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return U;
              }
              function Ii() {
                if (
                  typeof Reflect == "undefined" ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == "function") return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (U) {
                  return !1;
                }
              }
              function jt(U) {
                return (
                  (jt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (_) {
                        return _.__proto__ || Object.getPrototypeOf(_);
                      }),
                  jt(U)
                );
              }
              function Tr(U, L) {
                var _ = "data-clipboard-".concat(U);
                if (L.hasAttribute(_)) return L.getAttribute(_);
              }
              var Fi = (function (U) {
                  Ri(_, U);
                  var L = Hi(_);
                  function _($, F) {
                    var Y;
                    return (
                      Ci(this, _),
                      (Y = L.call(this)),
                      Y.resolveOptions(F),
                      Y.listenClick($),
                      Y
                    );
                  }
                  return (
                    ki(
                      _,
                      [
                        {
                          key: "resolveOptions",
                          value: function () {
                            var F =
                              arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : {};
                            (this.action =
                              typeof F.action == "function"
                                ? F.action
                                : this.defaultAction),
                              (this.target =
                                typeof F.target == "function"
                                  ? F.target
                                  : this.defaultTarget),
                              (this.text =
                                typeof F.text == "function"
                                  ? F.text
                                  : this.defaultText),
                              (this.container =
                                je(F.container) === "object"
                                  ? F.container
                                  : document.body);
                          },
                        },
                        {
                          key: "listenClick",
                          value: function (F) {
                            var Y = this;
                            this.listener = c()(F, "click", function (ke) {
                              return Y.onClick(ke);
                            });
                          },
                        },
                        {
                          key: "onClick",
                          value: function (F) {
                            var Y = F.delegateTarget || F.currentTarget,
                              ke = this.action(Y) || "copy",
                              Ut = ze({
                                action: ke,
                                container: this.container,
                                target: this.target(Y),
                                text: this.text(Y),
                              });
                            this.emit(Ut ? "success" : "error", {
                              action: ke,
                              text: Ut,
                              trigger: Y,
                              clearSelection: function () {
                                Y && Y.focus(),
                                  window.getSelection().removeAllRanges();
                              },
                            });
                          },
                        },
                        {
                          key: "defaultAction",
                          value: function (F) {
                            return Tr("action", F);
                          },
                        },
                        {
                          key: "defaultTarget",
                          value: function (F) {
                            var Y = Tr("target", F);
                            if (Y) return document.querySelector(Y);
                          },
                        },
                        {
                          key: "defaultText",
                          value: function (F) {
                            return Tr("text", F);
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            this.listener.destroy();
                          },
                        },
                      ],
                      [
                        {
                          key: "copy",
                          value: function (F) {
                            var Y =
                              arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {
                                    container: document.body,
                                  };
                            return K(F, Y);
                          },
                        },
                        {
                          key: "cut",
                          value: function (F) {
                            return h(F);
                          },
                        },
                        {
                          key: "isSupported",
                          value: function () {
                            var F =
                                arguments.length > 0 && arguments[0] !== void 0
                                  ? arguments[0]
                                  : ["copy", "cut"],
                              Y = typeof F == "string" ? [F] : F,
                              ke = !!document.queryCommandSupported;
                            return (
                              Y.forEach(function (Ut) {
                                ke = ke && !!document.queryCommandSupported(Ut);
                              }),
                              ke
                            );
                          },
                        },
                      ]
                    ),
                    _
                  );
                })(s()),
                ji = Fi;
            },
            828: function (n) {
              var o = 9;
              if (typeof Element != "undefined" && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches =
                  i.matchesSelector ||
                  i.mozMatchesSelector ||
                  i.msMatchesSelector ||
                  i.oMatchesSelector ||
                  i.webkitMatchesSelector;
              }
              function a(s, p) {
                for (; s && s.nodeType !== o; ) {
                  if (typeof s.matches == "function" && s.matches(p)) return s;
                  s = s.parentNode;
                }
              }
              n.exports = a;
            },
            438: function (n, o, i) {
              var a = i(828);
              function s(f, l, m, d, h) {
                var g = c.apply(this, arguments);
                return (
                  f.addEventListener(m, g, h),
                  {
                    destroy: function () {
                      f.removeEventListener(m, g, h);
                    },
                  }
                );
              }
              function p(f, l, m, d, h) {
                return typeof f.addEventListener == "function"
                  ? s.apply(null, arguments)
                  : typeof m == "function"
                  ? s.bind(null, document).apply(null, arguments)
                  : (typeof f == "string" && (f = document.querySelectorAll(f)),
                    Array.prototype.map.call(f, function (g) {
                      return s(g, l, m, d, h);
                    }));
              }
              function c(f, l, m, d) {
                return function (h) {
                  (h.delegateTarget = a(h.target, l)),
                    h.delegateTarget && d.call(f, h);
                };
              }
              n.exports = p;
            },
            879: function (n, o) {
              (o.node = function (i) {
                return (
                  i !== void 0 && i instanceof HTMLElement && i.nodeType === 1
                );
              }),
                (o.nodeList = function (i) {
                  var a = Object.prototype.toString.call(i);
                  return (
                    i !== void 0 &&
                    (a === "[object NodeList]" ||
                      a === "[object HTMLCollection]") &&
                    "length" in i &&
                    (i.length === 0 || o.node(i[0]))
                  );
                }),
                (o.string = function (i) {
                  return typeof i == "string" || i instanceof String;
                }),
                (o.fn = function (i) {
                  var a = Object.prototype.toString.call(i);
                  return a === "[object Function]";
                });
            },
            370: function (n, o, i) {
              var a = i(879),
                s = i(438);
              function p(m, d, h) {
                if (!m && !d && !h)
                  throw new Error("Missing required arguments");
                if (!a.string(d))
                  throw new TypeError("Second argument must be a String");
                if (!a.fn(h))
                  throw new TypeError("Third argument must be a Function");
                if (a.node(m)) return c(m, d, h);
                if (a.nodeList(m)) return f(m, d, h);
                if (a.string(m)) return l(m, d, h);
                throw new TypeError(
                  "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                );
              }
              function c(m, d, h) {
                return (
                  m.addEventListener(d, h),
                  {
                    destroy: function () {
                      m.removeEventListener(d, h);
                    },
                  }
                );
              }
              function f(m, d, h) {
                return (
                  Array.prototype.forEach.call(m, function (g) {
                    g.addEventListener(d, h);
                  }),
                  {
                    destroy: function () {
                      Array.prototype.forEach.call(m, function (g) {
                        g.removeEventListener(d, h);
                      });
                    },
                  }
                );
              }
              function l(m, d, h) {
                return s(document.body, m, d, h);
              }
              n.exports = p;
            },
            817: function (n) {
              function o(i) {
                var a;
                if (i.nodeName === "SELECT") i.focus(), (a = i.value);
                else if (i.nodeName === "INPUT" || i.nodeName === "TEXTAREA") {
                  var s = i.hasAttribute("readonly");
                  s || i.setAttribute("readonly", ""),
                    i.select(),
                    i.setSelectionRange(0, i.value.length),
                    s || i.removeAttribute("readonly"),
                    (a = i.value);
                } else {
                  i.hasAttribute("contenteditable") && i.focus();
                  var p = window.getSelection(),
                    c = document.createRange();
                  c.selectNodeContents(i),
                    p.removeAllRanges(),
                    p.addRange(c),
                    (a = p.toString());
                }
                return a;
              }
              n.exports = o;
            },
            279: function (n) {
              function o() {}
              (o.prototype = {
                on: function (i, a, s) {
                  var p = this.e || (this.e = {});
                  return (
                    (p[i] || (p[i] = [])).push({
                      fn: a,
                      ctx: s,
                    }),
                    this
                  );
                },
                once: function (i, a, s) {
                  var p = this;
                  function c() {
                    p.off(i, c), a.apply(s, arguments);
                  }
                  return (c._ = a), this.on(i, c, s);
                },
                emit: function (i) {
                  var a = [].slice.call(arguments, 1),
                    s = ((this.e || (this.e = {}))[i] || []).slice(),
                    p = 0,
                    c = s.length;
                  for (p; p < c; p++) s[p].fn.apply(s[p].ctx, a);
                  return this;
                },
                off: function (i, a) {
                  var s = this.e || (this.e = {}),
                    p = s[i],
                    c = [];
                  if (p && a)
                    for (var f = 0, l = p.length; f < l; f++)
                      p[f].fn !== a && p[f].fn._ !== a && c.push(p[f]);
                  return c.length ? (s[i] = c) : delete s[i], this;
                },
              }),
                (n.exports = o),
                (n.exports.TinyEmitter = o);
            },
          },
          t = {};
        function r(n) {
          if (t[n]) return t[n].exports;
          var o = (t[n] = {
            exports: {},
          });
          return e[n](o, o.exports, r), o.exports;
        }
        return (
          (function () {
            r.n = function (n) {
              var o =
                n && n.__esModule
                  ? function () {
                      return n.default;
                    }
                  : function () {
                      return n;
                    };
              return (
                r.d(o, {
                  a: o,
                }),
                o
              );
            };
          })(),
          (function () {
            r.d = function (n, o) {
              for (var i in o)
                r.o(o, i) &&
                  !r.o(n, i) &&
                  Object.defineProperty(n, i, {
                    enumerable: !0,
                    get: o[i],
                  });
            };
          })(),
          (function () {
            r.o = function (n, o) {
              return Object.prototype.hasOwnProperty.call(n, o);
            };
          })(),
          r(686)
        );
      })().default;
    });
  });
  var ni = Dt((pS, ri) => {
    "use strict";
    var ds = /["'&<>]/;
    ri.exports = hs;
    function hs(e) {
      var t = "" + e,
        r = ds.exec(t);
      if (!r) return t;
      var n,
        o = "",
        i = 0,
        a = 0;
      for (i = r.index; i < t.length; i++) {
        switch (t.charCodeAt(i)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#39;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        a !== i && (o += t.substring(a, i)), (a = i + 1), (o += n);
      }
      return a !== i ? o + t.substring(a, i) : o;
    }
  });
  Array.prototype.flat ||
    Object.defineProperty(Array.prototype, "flat", {
      configurable: !0,
      value: function e() {
        var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
        return t
          ? Array.prototype.reduce.call(
              this,
              function (r, n) {
                return (
                  Array.isArray(n)
                    ? r.push.apply(r, e.call(n, t - 1))
                    : r.push(n),
                  r
                );
              },
              []
            )
          : Array.prototype.slice.call(this);
      },
      writable: !0,
    }),
    Array.prototype.flatMap ||
      Object.defineProperty(Array.prototype, "flatMap", {
        configurable: !0,
        value: function (e) {
          return Array.prototype.map.apply(this, arguments).flat();
        },
        writable: !0,
      });
  var N_ = Tt(un());
  (() => {
    function e(n, o) {
      parent.postMessage(n, o || "*");
    }
    function t(...n) {
      return n.reduce(
        (o, i) =>
          o.then(
            () =>
              new Promise((a) => {
                let s = document.createElement("script");
                (s.src = i), (s.onload = a), document.body.appendChild(s);
              })
          ),
        Promise.resolve()
      );
    }
    var r = class {
      constructor(n) {
        (this.url = n),
          (this.onerror = null),
          (this.onmessage = null),
          (this.onmessageerror = null),
          (this.m = (a) => {
            a.source === this.w &&
              (a.stopImmediatePropagation(),
              this.dispatchEvent(
                new MessageEvent("message", {
                  data: a.data,
                })
              ),
              this.onmessage && this.onmessage(a));
          }),
          (this.e = (a, s, p, c, f) => {
            if (s === this.url.toString()) {
              let l = new ErrorEvent("error", {
                message: a,
                filename: s,
                lineno: p,
                colno: c,
                error: f,
              });
              this.dispatchEvent(l), this.onerror && this.onerror(l);
            }
          });
        let o = new EventTarget();
        (this.addEventListener = o.addEventListener.bind(o)),
          (this.removeEventListener = o.removeEventListener.bind(o)),
          (this.dispatchEvent = o.dispatchEvent.bind(o));
        let i = document.createElement("iframe");
        (i.width = i.height = i.frameBorder = "0"),
          document.body.appendChild((this.iframe = i)),
          this.w.document.open(),
          this.w.document.write(
            `<html><body><script>postMessage=${e};importScripts=${t};addEventListener("error",ev=>{parent.dispatchEvent(new ErrorEvent("error",{filename:"${n}",error:ev.error}))})<\/script><script src="${n}?${+Date.now()}"><\/script></body></html>`
          ),
          this.w.document.close(),
          (window.onmessage = this.m),
          (window.onerror = this.e),
          (this.r = new Promise((a, s) => {
            (this.w.onload = a), (this.w.onerror = s);
          }));
      }
      terminate() {
        document.body.removeChild(this.iframe),
          (window.onmessage = window.onerror = null);
      }
      postMessage(n) {
        this.r.catch().then(() => {
          this.w.dispatchEvent(
            new MessageEvent("message", {
              data: n,
            })
          );
        });
      }
      get w() {
        return this.iframe.contentWindow;
      }
    };
    (window.IFrameWorker = r),
      location.protocol === "file:" && (window.Worker = r);
  })();
  self.fetch ||
    (self.fetch = function (e, t) {
      return (
        (t = t || {}),
        new Promise(function (r, n) {
          var o = new XMLHttpRequest(),
            i = [],
            a = {},
            s = function c() {
              return {
                ok: ((o.status / 100) | 0) == 2,
                statusText: o.statusText,
                status: o.status,
                url: o.responseURL,
                text: function () {
                  return Promise.resolve(o.responseText);
                },
                json: function () {
                  return Promise.resolve(o.responseText).then(JSON.parse);
                },
                blob: function () {
                  return Promise.resolve(new Blob([o.response]));
                },
                clone: c,
                headers: {
                  keys: function () {
                    return i;
                  },
                  entries: function () {
                    return i.map(function (f) {
                      return [f, o.getResponseHeader(f)];
                    });
                  },
                  get: function (f) {
                    return o.getResponseHeader(f);
                  },
                  has: function (f) {
                    return o.getResponseHeader(f) != null;
                  },
                },
              };
            };
          for (var p in (o.open(t.method || "get", e, !0),
          (o.onload = function () {
            o
              .getAllResponseHeaders()
              .toLowerCase()
              .replace(/^(.+?):/gm, function (c, f) {
                a[f] || i.push((a[f] = f));
              }),
              r(s());
          }),
          (o.onerror = n),
          (o.withCredentials = t.credentials == "include"),
          t.headers))
            o.setRequestHeader(p, t.headers[p]);
          o.send(t.body || null);
        })
      );
    });
  var Y_ = Tt(mn());
  var Ar = function (e, t) {
    return (
      (Ar =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
        }),
      Ar(e, t)
    );
  };
  function ie(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Class extends value " + String(t) + " is not a constructor or null"
      );
    Ar(e, t);
    function r() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
  }
  function dn(e, t, r, n) {
    function o(i) {
      return i instanceof r
        ? i
        : new r(function (a) {
            a(i);
          });
    }
    return new (r || (r = Promise))(function (i, a) {
      function s(f) {
        try {
          c(n.next(f));
        } catch (l) {
          a(l);
        }
      }
      function p(f) {
        try {
          c(n.throw(f));
        } catch (l) {
          a(l);
        }
      }
      function c(f) {
        f.done ? i(f.value) : o(f.value).then(s, p);
      }
      c((n = n.apply(e, t || [])).next());
    });
  }
  function Vt(e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      },
      n,
      o,
      i,
      a;
    return (
      (a = {
        next: s(0),
        throw: s(1),
        return: s(2),
      }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(c) {
      return function (f) {
        return p([c, f]);
      };
    }
    function p(c) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (
            ((n = 1),
            o &&
              (i =
                c[0] & 2
                  ? o.return
                  : c[0]
                  ? o.throw || ((i = o.return) && i.call(o), 0)
                  : o.next) &&
              !(i = i.call(o, c[1])).done)
          )
            return i;
          switch (((o = 0), i && (c = [c[0] & 2, i.value]), c[0])) {
            case 0:
            case 1:
              i = c;
              break;
            case 4:
              return (
                r.label++,
                {
                  value: c[1],
                  done: !1,
                }
              );
            case 5:
              r.label++, (o = c[1]), (c = [0]);
              continue;
            case 7:
              (c = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (
                ((i = r.trys),
                !(i = i.length > 0 && i[i.length - 1]) &&
                  (c[0] === 6 || c[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (c[0] === 3 && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                r.label = c[1];
                break;
              }
              if (c[0] === 6 && r.label < i[1]) {
                (r.label = i[1]), (i = c);
                break;
              }
              if (i && r.label < i[2]) {
                (r.label = i[2]), r.ops.push(c);
                break;
              }
              i[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          c = t.call(e, r);
        } catch (f) {
          (c = [6, f]), (o = 0);
        } finally {
          n = i = 0;
        }
      if (c[0] & 5) throw c[1];
      return {
        value: c[0] ? c[1] : void 0,
        done: !0,
      };
    }
  }
  function be(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      r = t && e[t],
      n = 0;
    if (r) return r.call(e);
    if (e && typeof e.length == "number")
      return {
        next: function () {
          return (
            e && n >= e.length && (e = void 0),
            {
              value: e && e[n++],
              done: !e,
            }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function V(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) return e;
    var n = r.call(e),
      o,
      i = [],
      a;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
        i.push(o.value);
    } catch (s) {
      a = {
        error: s,
      };
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n);
      } finally {
        if (a) throw a.error;
      }
    }
    return i;
  }
  function N(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = t.length, i; n < o; n++)
        (i || !(n in t)) &&
          (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
    return e.concat(i || Array.prototype.slice.call(t));
  }
  function nt(e) {
    return this instanceof nt ? ((this.v = e), this) : new nt(e);
  }
  function hn(e, t, r) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []),
      o,
      i = [];
    return (
      (o = {}),
      a("next"),
      a("throw"),
      a("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o
    );
    function a(m) {
      n[m] &&
        (o[m] = function (d) {
          return new Promise(function (h, g) {
            i.push([m, d, h, g]) > 1 || s(m, d);
          });
        });
    }
    function s(m, d) {
      try {
        p(n[m](d));
      } catch (h) {
        l(i[0][3], h);
      }
    }
    function p(m) {
      m.value instanceof nt
        ? Promise.resolve(m.value.v).then(c, f)
        : l(i[0][2], m);
    }
    function c(m) {
      s("next", m);
    }
    function f(m) {
      s("throw", m);
    }
    function l(m, d) {
      m(d), i.shift(), i.length && s(i[0][0], i[0][1]);
    }
  }
  function bn(e) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator],
      r;
    return t
      ? t.call(e)
      : ((e = typeof be == "function" ? be(e) : e[Symbol.iterator]()),
        (r = {}),
        n("next"),
        n("throw"),
        n("return"),
        (r[Symbol.asyncIterator] = function () {
          return this;
        }),
        r);
    function n(i) {
      r[i] =
        e[i] &&
        function (a) {
          return new Promise(function (s, p) {
            (a = e[i](a)), o(s, p, a.done, a.value);
          });
        };
    }
    function o(i, a, s, p) {
      Promise.resolve(p).then(function (c) {
        i({
          value: c,
          done: s,
        });
      }, a);
    }
  }
  function k(e) {
    return typeof e == "function";
  }
  function pt(e) {
    var t = function (n) {
        Error.call(n), (n.stack = new Error().stack);
      },
      r = e(t);
    return (
      (r.prototype = Object.create(Error.prototype)),
      (r.prototype.constructor = r),
      r
    );
  }
  var zt = pt(function (e) {
    return function (r) {
      e(this),
        (this.message = r
          ? r.length +
            ` errors occurred during unsubscription:
` +
            r.map(function (n, o) {
              return o + 1 + ") " + n.toString();
            }).join(`
  `)
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = r);
    };
  });
  function Ne(e, t) {
    if (e) {
      var r = e.indexOf(t);
      0 <= r && e.splice(r, 1);
    }
  }
  var Ue = (function () {
    function e(t) {
      (this.initialTeardown = t),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t, r, n, o, i;
        if (!this.closed) {
          this.closed = !0;
          var a = this._parentage;
          if (a)
            if (((this._parentage = null), Array.isArray(a)))
              try {
                for (var s = be(a), p = s.next(); !p.done; p = s.next()) {
                  var c = p.value;
                  c.remove(this);
                }
              } catch (g) {
                t = {
                  error: g,
                };
              } finally {
                try {
                  p && !p.done && (r = s.return) && r.call(s);
                } finally {
                  if (t) throw t.error;
                }
              }
            else a.remove(this);
          var f = this.initialTeardown;
          if (k(f))
            try {
              f();
            } catch (g) {
              i = g instanceof zt ? g.errors : [g];
            }
          var l = this._finalizers;
          if (l) {
            this._finalizers = null;
            try {
              for (var m = be(l), d = m.next(); !d.done; d = m.next()) {
                var h = d.value;
                try {
                  vn(h);
                } catch (g) {
                  (i = i != null ? i : []),
                    g instanceof zt
                      ? (i = N(N([], V(i)), V(g.errors)))
                      : i.push(g);
                }
              }
            } catch (g) {
              n = {
                error: g,
              };
            } finally {
              try {
                d && !d.done && (o = m.return) && o.call(m);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          if (i) throw new zt(i);
        }
      }),
      (e.prototype.add = function (t) {
        var r;
        if (t && t !== this)
          if (this.closed) vn(t);
          else {
            if (t instanceof e) {
              if (t.closed || t._hasParent(this)) return;
              t._addParent(this);
            }
            (this._finalizers =
              (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
          }
      }),
      (e.prototype._hasParent = function (t) {
        var r = this._parentage;
        return r === t || (Array.isArray(r) && r.includes(t));
      }),
      (e.prototype._addParent = function (t) {
        var r = this._parentage;
        this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
      }),
      (e.prototype._removeParent = function (t) {
        var r = this._parentage;
        r === t ? (this._parentage = null) : Array.isArray(r) && Ne(r, t);
      }),
      (e.prototype.remove = function (t) {
        var r = this._finalizers;
        r && Ne(r, t), t instanceof e && t._removeParent(this);
      }),
      (e.EMPTY = (function () {
        var t = new e();
        return (t.closed = !0), t;
      })()),
      e
    );
  })();
  var Cr = Ue.EMPTY;
  function Nt(e) {
    return (
      e instanceof Ue ||
      (e && "closed" in e && k(e.remove) && k(e.add) && k(e.unsubscribe))
    );
  }
  function vn(e) {
    k(e) ? e() : e.unsubscribe();
  }
  var Re = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  };
  var ft = {
    setTimeout: function (e, t) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      var o = ft.delegate;
      return o != null && o.setTimeout
        ? o.setTimeout.apply(o, N([e, t], V(r)))
        : setTimeout.apply(void 0, N([e, t], V(r)));
    },
    clearTimeout: function (e) {
      var t = ft.delegate;
      return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
    },
    delegate: void 0,
  };
  function qt(e) {
    ft.setTimeout(function () {
      var t = Re.onUnhandledError;
      if (t) t(e);
      else throw e;
    });
  }
  function ve() {}
  var gn = (function () {
    return kr("C", void 0, void 0);
  })();
  function yn(e) {
    return kr("E", void 0, e);
  }
  function xn(e) {
    return kr("N", e, void 0);
  }
  function kr(e, t, r) {
    return {
      kind: e,
      value: t,
      error: r,
    };
  }
  var ot = null;
  function lt(e) {
    if (Re.useDeprecatedSynchronousErrorHandling) {
      var t = !ot;
      if (
        (t &&
          (ot = {
            errorThrown: !1,
            error: null,
          }),
        e(),
        t)
      ) {
        var r = ot,
          n = r.errorThrown,
          o = r.error;
        if (((ot = null), n)) throw o;
      }
    } else e();
  }
  function En(e) {
    Re.useDeprecatedSynchronousErrorHandling &&
      ot &&
      ((ot.errorThrown = !0), (ot.error = e));
  }
  var Ot = (function (e) {
    ie(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return (
        (n.isStopped = !1),
        r ? ((n.destination = r), Nt(r) && r.add(n)) : (n.destination = Yi),
        n
      );
    }
    return (
      (t.create = function (r, n, o) {
        return new it(r, n, o);
      }),
      (t.prototype.next = function (r) {
        this.isStopped ? Hr(xn(r), this) : this._next(r);
      }),
      (t.prototype.error = function (r) {
        this.isStopped
          ? Hr(yn(r), this)
          : ((this.isStopped = !0), this._error(r));
      }),
      (t.prototype.complete = function () {
        this.isStopped
          ? Hr(gn, this)
          : ((this.isStopped = !0), this._complete());
      }),
      (t.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          e.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (t.prototype._next = function (r) {
        this.destination.next(r);
      }),
      (t.prototype._error = function (r) {
        try {
          this.destination.error(r);
        } finally {
          this.unsubscribe();
        }
      }),
      (t.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      t
    );
  })(Ue);
  var Ni = Function.prototype.bind;
  function Rr(e, t) {
    return Ni.call(e, t);
  }
  var qi = (function () {
      function e(t) {
        this.partialObserver = t;
      }
      return (
        (e.prototype.next = function (t) {
          var r = this.partialObserver;
          if (r.next)
            try {
              r.next(t);
            } catch (n) {
              Kt(n);
            }
        }),
        (e.prototype.error = function (t) {
          var r = this.partialObserver;
          if (r.error)
            try {
              r.error(t);
            } catch (n) {
              Kt(n);
            }
          else Kt(t);
        }),
        (e.prototype.complete = function () {
          var t = this.partialObserver;
          if (t.complete)
            try {
              t.complete();
            } catch (r) {
              Kt(r);
            }
        }),
        e
      );
    })(),
    it = (function (e) {
      ie(t, e);
      function t(r, n, o) {
        var i = e.call(this) || this,
          a;
        if (k(r) || !r)
          a = {
            next: r != null ? r : void 0,
            error: n != null ? n : void 0,
            complete: o != null ? o : void 0,
          };
        else {
          var s;
          i && Re.useDeprecatedNextContext
            ? ((s = Object.create(r)),
              (s.unsubscribe = function () {
                return i.unsubscribe();
              }),
              (a = {
                next: r.next && Rr(r.next, s),
                error: r.error && Rr(r.error, s),
                complete: r.complete && Rr(r.complete, s),
              }))
            : (a = r);
        }
        return (i.destination = new qi(a)), i;
      }
      return t;
    })(Ot);
  function Kt(e) {
    Re.useDeprecatedSynchronousErrorHandling ? En(e) : qt(e);
  }
  function Ki(e) {
    throw e;
  }
  function Hr(e, t) {
    var r = Re.onStoppedNotification;
    r &&
      ft.setTimeout(function () {
        return r(e, t);
      });
  }
  var Yi = {
    closed: !0,
    next: ve,
    error: Ki,
    complete: ve,
  };
  var ut = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
  function se(e) {
    return e;
  }
  function wn() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Pr(e);
  }
  function Pr(e) {
    return e.length === 0
      ? se
      : e.length === 1
      ? e[0]
      : function (r) {
          return e.reduce(function (n, o) {
            return o(n);
          }, r);
        };
  }
  var W = (function () {
    function e(t) {
      t && (this._subscribe = t);
    }
    return (
      (e.prototype.lift = function (t) {
        var r = new e();
        return (r.source = this), (r.operator = t), r;
      }),
      (e.prototype.subscribe = function (t, r, n) {
        var o = this,
          i = Bi(t) ? t : new it(t, r, n);
        return (
          lt(function () {
            var a = o,
              s = a.operator,
              p = a.source;
            i.add(s ? s.call(i, p) : p ? o._subscribe(i) : o._trySubscribe(i));
          }),
          i
        );
      }),
      (e.prototype._trySubscribe = function (t) {
        try {
          return this._subscribe(t);
        } catch (r) {
          t.error(r);
        }
      }),
      (e.prototype.forEach = function (t, r) {
        var n = this;
        return (
          (r = Sn(r)),
          new r(function (o, i) {
            var a = new it({
              next: function (s) {
                try {
                  t(s);
                } catch (p) {
                  i(p), a.unsubscribe();
                }
              },
              error: i,
              complete: o,
            });
            n.subscribe(a);
          })
        );
      }),
      (e.prototype._subscribe = function (t) {
        var r;
        return (r = this.source) === null || r === void 0
          ? void 0
          : r.subscribe(t);
      }),
      (e.prototype[ut] = function () {
        return this;
      }),
      (e.prototype.pipe = function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return Pr(t)(this);
      }),
      (e.prototype.toPromise = function (t) {
        var r = this;
        return (
          (t = Sn(t)),
          new t(function (n, o) {
            var i;
            r.subscribe(
              function (a) {
                return (i = a);
              },
              function (a) {
                return o(a);
              },
              function () {
                return n(i);
              }
            );
          })
        );
      }),
      (e.create = function (t) {
        return new e(t);
      }),
      e
    );
  })();
  function Sn(e) {
    var t;
    return (t = e != null ? e : Re.Promise) !== null && t !== void 0
      ? t
      : Promise;
  }
  function Qi(e) {
    return e && k(e.next) && k(e.error) && k(e.complete);
  }
  function Bi(e) {
    return (e && e instanceof Ot) || (Qi(e) && Nt(e));
  }
  function Gi(e) {
    return k(e == null ? void 0 : e.lift);
  }
  function y(e) {
    return function (t) {
      if (Gi(t))
        return t.lift(function (r) {
          try {
            return e(r, this);
          } catch (n) {
            this.error(n);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function E(e, t, r, n, o) {
    return new Ji(e, t, r, n, o);
  }
  var Ji = (function (e) {
    ie(t, e);
    function t(r, n, o, i, a, s) {
      var p = e.call(this, r) || this;
      return (
        (p.onFinalize = a),
        (p.shouldUnsubscribe = s),
        (p._next = n
          ? function (c) {
              try {
                n(c);
              } catch (f) {
                r.error(f);
              }
            }
          : e.prototype._next),
        (p._error = i
          ? function (c) {
              try {
                i(c);
              } catch (f) {
                r.error(f);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._error),
        (p._complete = o
          ? function () {
              try {
                o();
              } catch (c) {
                r.error(c);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._complete),
        p
      );
    }
    return (
      (t.prototype.unsubscribe = function () {
        var r;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var n = this.closed;
          e.prototype.unsubscribe.call(this),
            !n &&
              ((r = this.onFinalize) === null || r === void 0 || r.call(this));
        }
      }),
      t
    );
  })(Ot);
  var mt = {
    schedule: function (e) {
      var t = requestAnimationFrame,
        r = cancelAnimationFrame,
        n = mt.delegate;
      n && ((t = n.requestAnimationFrame), (r = n.cancelAnimationFrame));
      var o = t(function (i) {
        (r = void 0), e(i);
      });
      return new Ue(function () {
        return r == null ? void 0 : r(o);
      });
    },
    requestAnimationFrame: function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var r = mt.delegate;
      return (
        (r == null ? void 0 : r.requestAnimationFrame) || requestAnimationFrame
      ).apply(void 0, N([], V(e)));
    },
    cancelAnimationFrame: function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var r = mt.delegate;
      return (
        (r == null ? void 0 : r.cancelAnimationFrame) || cancelAnimationFrame
      ).apply(void 0, N([], V(e)));
    },
    delegate: void 0,
  };
  var Tn = pt(function (e) {
    return function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    };
  });
  var w = (function (e) {
    ie(t, e);
    function t() {
      var r = e.call(this) || this;
      return (
        (r.closed = !1),
        (r.currentObservers = null),
        (r.observers = []),
        (r.isStopped = !1),
        (r.hasError = !1),
        (r.thrownError = null),
        r
      );
    }
    return (
      (t.prototype.lift = function (r) {
        var n = new On(this, this);
        return (n.operator = r), n;
      }),
      (t.prototype._throwIfClosed = function () {
        if (this.closed) throw new Tn();
      }),
      (t.prototype.next = function (r) {
        var n = this;
        lt(function () {
          var o, i;
          if ((n._throwIfClosed(), !n.isStopped)) {
            n.currentObservers ||
              (n.currentObservers = Array.from(n.observers));
            try {
              for (
                var a = be(n.currentObservers), s = a.next();
                !s.done;
                s = a.next()
              ) {
                var p = s.value;
                p.next(r);
              }
            } catch (c) {
              o = {
                error: c,
              };
            } finally {
              try {
                s && !s.done && (i = a.return) && i.call(a);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        });
      }),
      (t.prototype.error = function (r) {
        var n = this;
        lt(function () {
          if ((n._throwIfClosed(), !n.isStopped)) {
            (n.hasError = n.isStopped = !0), (n.thrownError = r);
            for (var o = n.observers; o.length; ) o.shift().error(r);
          }
        });
      }),
      (t.prototype.complete = function () {
        var r = this;
        lt(function () {
          if ((r._throwIfClosed(), !r.isStopped)) {
            r.isStopped = !0;
            for (var n = r.observers; n.length; ) n.shift().complete();
          }
        });
      }),
      (t.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(t.prototype, "observed", {
        get: function () {
          var r;
          return (
            ((r = this.observers) === null || r === void 0
              ? void 0
              : r.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype._trySubscribe = function (r) {
        return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
      }),
      (t.prototype._subscribe = function (r) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(r),
          this._innerSubscribe(r)
        );
      }),
      (t.prototype._innerSubscribe = function (r) {
        var n = this,
          o = this,
          i = o.hasError,
          a = o.isStopped,
          s = o.observers;
        return i || a
          ? Cr
          : ((this.currentObservers = null),
            s.push(r),
            new Ue(function () {
              (n.currentObservers = null), Ne(s, r);
            }));
      }),
      (t.prototype._checkFinalizedStatuses = function (r) {
        var n = this,
          o = n.hasError,
          i = n.thrownError,
          a = n.isStopped;
        o ? r.error(i) : a && r.complete();
      }),
      (t.prototype.asObservable = function () {
        var r = new W();
        return (r.source = this), r;
      }),
      (t.create = function (r, n) {
        return new On(r, n);
      }),
      t
    );
  })(W);
  var On = (function (e) {
    ie(t, e);
    function t(r, n) {
      var o = e.call(this) || this;
      return (o.destination = r), (o.source = n), o;
    }
    return (
      (t.prototype.next = function (r) {
        var n, o;
        (o =
          (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
          null ||
          o === void 0 ||
          o.call(n, r);
      }),
      (t.prototype.error = function (r) {
        var n, o;
        (o =
          (n = this.destination) === null || n === void 0
            ? void 0
            : n.error) === null ||
          o === void 0 ||
          o.call(n, r);
      }),
      (t.prototype.complete = function () {
        var r, n;
        (n =
          (r = this.destination) === null || r === void 0
            ? void 0
            : r.complete) === null ||
          n === void 0 ||
          n.call(r);
      }),
      (t.prototype._subscribe = function (r) {
        var n, o;
        return (o =
          (n = this.source) === null || n === void 0
            ? void 0
            : n.subscribe(r)) !== null && o !== void 0
          ? o
          : Cr;
      }),
      t
    );
  })(w);
  var _t = {
    now: function () {
      return (_t.delegate || Date).now();
    },
    delegate: void 0,
  };
  var Mt = (function (e) {
    ie(t, e);
    function t(r, n, o) {
      r === void 0 && (r = 1 / 0),
        n === void 0 && (n = 1 / 0),
        o === void 0 && (o = _t);
      var i = e.call(this) || this;
      return (
        (i._bufferSize = r),
        (i._windowTime = n),
        (i._timestampProvider = o),
        (i._buffer = []),
        (i._infiniteTimeWindow = !0),
        (i._infiniteTimeWindow = n === 1 / 0),
        (i._bufferSize = Math.max(1, r)),
        (i._windowTime = Math.max(1, n)),
        i
      );
    }
    return (
      (t.prototype.next = function (r) {
        var n = this,
          o = n.isStopped,
          i = n._buffer,
          a = n._infiniteTimeWindow,
          s = n._timestampProvider,
          p = n._windowTime;
        o || (i.push(r), !a && i.push(s.now() + p)),
          this._trimBuffer(),
          e.prototype.next.call(this, r);
      }),
      (t.prototype._subscribe = function (r) {
        this._throwIfClosed(), this._trimBuffer();
        for (
          var n = this._innerSubscribe(r),
            o = this,
            i = o._infiniteTimeWindow,
            a = o._buffer,
            s = a.slice(),
            p = 0;
          p < s.length && !r.closed;
          p += i ? 1 : 2
        )
          r.next(s[p]);
        return this._checkFinalizedStatuses(r), n;
      }),
      (t.prototype._trimBuffer = function () {
        var r = this,
          n = r._bufferSize,
          o = r._timestampProvider,
          i = r._buffer,
          a = r._infiniteTimeWindow,
          s = (a ? 1 : 2) * n;
        if ((n < 1 / 0 && s < i.length && i.splice(0, i.length - s), !a)) {
          for (var p = o.now(), c = 0, f = 1; f < i.length && i[f] <= p; f += 2)
            c = f;
          c && i.splice(0, c + 1);
        }
      }),
      t
    );
  })(w);
  var _n = (function (e) {
    ie(t, e);
    function t(r, n) {
      return e.call(this) || this;
    }
    return (
      (t.prototype.schedule = function (r, n) {
        return n === void 0 && (n = 0), this;
      }),
      t
    );
  })(Ue);
  var Lt = {
    setInterval: function (e, t) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      var o = Lt.delegate;
      return o != null && o.setInterval
        ? o.setInterval.apply(o, N([e, t], V(r)))
        : setInterval.apply(void 0, N([e, t], V(r)));
    },
    clearInterval: function (e) {
      var t = Lt.delegate;
      return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e);
    },
    delegate: void 0,
  };
  var Yt = (function (e) {
    ie(t, e);
    function t(r, n) {
      var o = e.call(this, r, n) || this;
      return (o.scheduler = r), (o.work = n), (o.pending = !1), o;
    }
    return (
      (t.prototype.schedule = function (r, n) {
        var o;
        if ((n === void 0 && (n = 0), this.closed)) return this;
        this.state = r;
        var i = this.id,
          a = this.scheduler;
        return (
          i != null && (this.id = this.recycleAsyncId(a, i, n)),
          (this.pending = !0),
          (this.delay = n),
          (this.id =
            (o = this.id) !== null && o !== void 0
              ? o
              : this.requestAsyncId(a, this.id, n)),
          this
        );
      }),
      (t.prototype.requestAsyncId = function (r, n, o) {
        return (
          o === void 0 && (o = 0), Lt.setInterval(r.flush.bind(r, this), o)
        );
      }),
      (t.prototype.recycleAsyncId = function (r, n, o) {
        if (
          (o === void 0 && (o = 0),
          o != null && this.delay === o && this.pending === !1)
        )
          return n;
        n != null && Lt.clearInterval(n);
      }),
      (t.prototype.execute = function (r, n) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var o = this._execute(r, n);
        if (o) return o;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (t.prototype._execute = function (r, n) {
        var o = !1,
          i;
        try {
          this.work(r);
        } catch (a) {
          (o = !0), (i = a || new Error("Scheduled action threw falsy error"));
        }
        if (o) return this.unsubscribe(), i;
      }),
      (t.prototype.unsubscribe = function () {
        if (!this.closed) {
          var r = this,
            n = r.id,
            o = r.scheduler,
            i = o.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            Ne(i, this),
            n != null && (this.id = this.recycleAsyncId(o, n, null)),
            (this.delay = null),
            e.prototype.unsubscribe.call(this);
        }
      }),
      t
    );
  })(_n);
  var $r = (function () {
    function e(t, r) {
      r === void 0 && (r = e.now),
        (this.schedulerActionCtor = t),
        (this.now = r);
    }
    return (
      (e.prototype.schedule = function (t, r, n) {
        return (
          r === void 0 && (r = 0),
          new this.schedulerActionCtor(this, t).schedule(n, r)
        );
      }),
      (e.now = _t.now),
      e
    );
  })();
  var Qt = (function (e) {
    ie(t, e);
    function t(r, n) {
      n === void 0 && (n = $r.now);
      var o = e.call(this, r, n) || this;
      return (o.actions = []), (o._active = !1), o;
    }
    return (
      (t.prototype.flush = function (r) {
        var n = this.actions;
        if (this._active) {
          n.push(r);
          return;
        }
        var o;
        this._active = !0;
        do if ((o = r.execute(r.state, r.delay))) break;
        while ((r = n.shift()));
        if (((this._active = !1), o)) {
          for (; (r = n.shift()); ) r.unsubscribe();
          throw o;
        }
      }),
      t
    );
  })($r);
  var ae = new Qt(Yt),
    Ir = ae;
  var Mn = (function (e) {
    ie(t, e);
    function t(r, n) {
      var o = e.call(this, r, n) || this;
      return (o.scheduler = r), (o.work = n), o;
    }
    return (
      (t.prototype.requestAsyncId = function (r, n, o) {
        return (
          o === void 0 && (o = 0),
          o !== null && o > 0
            ? e.prototype.requestAsyncId.call(this, r, n, o)
            : (r.actions.push(this),
              r._scheduled ||
                (r._scheduled = mt.requestAnimationFrame(function () {
                  return r.flush(void 0);
                })))
        );
      }),
      (t.prototype.recycleAsyncId = function (r, n, o) {
        var i;
        if ((o === void 0 && (o = 0), o != null ? o > 0 : this.delay > 0))
          return e.prototype.recycleAsyncId.call(this, r, n, o);
        var a = r.actions;
        n != null &&
          ((i = a[a.length - 1]) === null || i === void 0 ? void 0 : i.id) !==
            n &&
          (mt.cancelAnimationFrame(n), (r._scheduled = void 0));
      }),
      t
    );
  })(Yt);
  var Ln = (function (e) {
    ie(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.flush = function (r) {
        this._active = !0;
        var n = this._scheduled;
        this._scheduled = void 0;
        var o = this.actions,
          i;
        r = r || o.shift();
        do if ((i = r.execute(r.state, r.delay))) break;
        while ((r = o[0]) && r.id === n && o.shift());
        if (((this._active = !1), i)) {
          for (; (r = o[0]) && r.id === n && o.shift(); ) r.unsubscribe();
          throw i;
        }
      }),
      t
    );
  })(Qt);
  var ge = new Ln(Mn);
  var A = new W(function (e) {
    return e.complete();
  });
  function Bt(e) {
    return e && k(e.schedule);
  }
  function Fr(e) {
    return e[e.length - 1];
  }
  function Ge(e) {
    return k(Fr(e)) ? e.pop() : void 0;
  }
  function Me(e) {
    return Bt(Fr(e)) ? e.pop() : void 0;
  }
  function Gt(e, t) {
    return typeof Fr(e) == "number" ? e.pop() : t;
  }
  var dt = function (e) {
    return e && typeof e.length == "number" && typeof e != "function";
  };
  function Jt(e) {
    return k(e == null ? void 0 : e.then);
  }
  function Xt(e) {
    return k(e[ut]);
  }
  function Zt(e) {
    return (
      Symbol.asyncIterator && k(e == null ? void 0 : e[Symbol.asyncIterator])
    );
  }
  function er(e) {
    return new TypeError(
      "You provided " +
        (e !== null && typeof e == "object"
          ? "an invalid object"
          : "'" + e + "'") +
        " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
    );
  }
  function Xi() {
    return typeof Symbol != "function" || !Symbol.iterator
      ? "@@iterator"
      : Symbol.iterator;
  }
  var tr = Xi();
  function rr(e) {
    return k(e == null ? void 0 : e[tr]);
  }
  function nr(e) {
    return hn(this, arguments, function () {
      var r, n, o, i;
      return Vt(this, function (a) {
        switch (a.label) {
          case 0:
            (r = e.getReader()), (a.label = 1);
          case 1:
            a.trys.push([1, , 9, 10]), (a.label = 2);
          case 2:
            return [4, nt(r.read())];
          case 3:
            return (
              (n = a.sent()),
              (o = n.value),
              (i = n.done),
              i ? [4, nt(void 0)] : [3, 5]
            );
          case 4:
            return [2, a.sent()];
          case 5:
            return [4, nt(o)];
          case 6:
            return [4, a.sent()];
          case 7:
            return a.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return r.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function or(e) {
    return k(e == null ? void 0 : e.getReader);
  }
  function I(e) {
    if (e instanceof W) return e;
    if (e != null) {
      if (Xt(e)) return Zi(e);
      if (dt(e)) return ea(e);
      if (Jt(e)) return ta(e);
      if (Zt(e)) return An(e);
      if (rr(e)) return ra(e);
      if (or(e)) return na(e);
    }
    throw er(e);
  }
  function Zi(e) {
    return new W(function (t) {
      var r = e[ut]();
      if (k(r.subscribe)) return r.subscribe(t);
      throw new TypeError(
        "Provided object does not correctly implement Symbol.observable"
      );
    });
  }
  function ea(e) {
    return new W(function (t) {
      for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
      t.complete();
    });
  }
  function ta(e) {
    return new W(function (t) {
      e.then(
        function (r) {
          t.closed || (t.next(r), t.complete());
        },
        function (r) {
          return t.error(r);
        }
      ).then(null, qt);
    });
  }
  function ra(e) {
    return new W(function (t) {
      var r, n;
      try {
        for (var o = be(e), i = o.next(); !i.done; i = o.next()) {
          var a = i.value;
          if ((t.next(a), t.closed)) return;
        }
      } catch (s) {
        r = {
          error: s,
        };
      } finally {
        try {
          i && !i.done && (n = o.return) && n.call(o);
        } finally {
          if (r) throw r.error;
        }
      }
      t.complete();
    });
  }
  function An(e) {
    return new W(function (t) {
      oa(e, t).catch(function (r) {
        return t.error(r);
      });
    });
  }
  function na(e) {
    return An(nr(e));
  }
  function oa(e, t) {
    var r, n, o, i;
    return dn(this, void 0, void 0, function () {
      var a, s;
      return Vt(this, function (p) {
        switch (p.label) {
          case 0:
            p.trys.push([0, 5, 6, 11]), (r = bn(e)), (p.label = 1);
          case 1:
            return [4, r.next()];
          case 2:
            if (((n = p.sent()), !!n.done)) return [3, 4];
            if (((a = n.value), t.next(a), t.closed)) return [2];
            p.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return (
              (s = p.sent()),
              (o = {
                error: s,
              }),
              [3, 11]
            );
          case 6:
            return (
              p.trys.push([6, , 9, 10]),
              n && !n.done && (i = r.return) ? [4, i.call(r)] : [3, 8]
            );
          case 7:
            p.sent(), (p.label = 8);
          case 8:
            return [3, 10];
          case 9:
            if (o) throw o.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return t.complete(), [2];
        }
      });
    });
  }
  function Ee(e, t, r, n, o) {
    n === void 0 && (n = 0), o === void 0 && (o = !1);
    var i = t.schedule(function () {
      r(), o ? e.add(this.schedule(null, n)) : this.unsubscribe();
    }, n);
    if ((e.add(i), !o)) return i;
  }
  function He(e, t) {
    return (
      t === void 0 && (t = 0),
      y(function (r, n) {
        r.subscribe(
          E(
            n,
            function (o) {
              return Ee(
                n,
                e,
                function () {
                  return n.next(o);
                },
                t
              );
            },
            function () {
              return Ee(
                n,
                e,
                function () {
                  return n.complete();
                },
                t
              );
            },
            function (o) {
              return Ee(
                n,
                e,
                function () {
                  return n.error(o);
                },
                t
              );
            }
          )
        );
      })
    );
  }
  function qe(e, t) {
    return (
      t === void 0 && (t = 0),
      y(function (r, n) {
        n.add(
          e.schedule(function () {
            return r.subscribe(n);
          }, t)
        );
      })
    );
  }
  function Cn(e, t) {
    return I(e).pipe(qe(t), He(t));
  }
  function kn(e, t) {
    return I(e).pipe(qe(t), He(t));
  }
  function Rn(e, t) {
    return new W(function (r) {
      var n = 0;
      return t.schedule(function () {
        n === e.length
          ? r.complete()
          : (r.next(e[n++]), r.closed || this.schedule());
      });
    });
  }
  function Hn(e, t) {
    return new W(function (r) {
      var n;
      return (
        Ee(r, t, function () {
          (n = e[tr]()),
            Ee(
              r,
              t,
              function () {
                var o, i, a;
                try {
                  (o = n.next()), (i = o.value), (a = o.done);
                } catch (s) {
                  r.error(s);
                  return;
                }
                a ? r.complete() : r.next(i);
              },
              0,
              !0
            );
        }),
        function () {
          return k(n == null ? void 0 : n.return) && n.return();
        }
      );
    });
  }
  function ir(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new W(function (r) {
      Ee(r, t, function () {
        var n = e[Symbol.asyncIterator]();
        Ee(
          r,
          t,
          function () {
            n.next().then(function (o) {
              o.done ? r.complete() : r.next(o.value);
            });
          },
          0,
          !0
        );
      });
    });
  }
  function Pn(e, t) {
    return ir(nr(e), t);
  }
  function $n(e, t) {
    if (e != null) {
      if (Xt(e)) return Cn(e, t);
      if (dt(e)) return Rn(e, t);
      if (Jt(e)) return kn(e, t);
      if (Zt(e)) return ir(e, t);
      if (rr(e)) return Hn(e, t);
      if (or(e)) return Pn(e, t);
    }
    throw er(e);
  }
  function ce(e, t) {
    return t ? $n(e, t) : I(e);
  }
  function H() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = Me(e);
    return ce(e, r);
  }
  function At(e, t) {
    var r = k(e)
        ? e
        : function () {
            return e;
          },
      n = function (o) {
        return o.error(r());
      };
    return new W(
      t
        ? function (o) {
            return t.schedule(n, 0, o);
          }
        : n
    );
  }
  var ar = pt(function (e) {
    return function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    };
  });
  function In(e) {
    return e instanceof Date && !isNaN(e);
  }
  function u(e, t) {
    return y(function (r, n) {
      var o = 0;
      r.subscribe(
        E(n, function (i) {
          n.next(e.call(t, i, o++));
        })
      );
    });
  }
  var ia = Array.isArray;
  function aa(e, t) {
    return ia(t) ? e.apply(void 0, N([], V(t))) : e(t);
  }
  function Je(e) {
    return u(function (t) {
      return aa(e, t);
    });
  }
  var sa = Array.isArray,
    ca = Object.getPrototypeOf,
    pa = Object.prototype,
    fa = Object.keys;
  function Fn(e) {
    if (e.length === 1) {
      var t = e[0];
      if (sa(t))
        return {
          args: t,
          keys: null,
        };
      if (la(t)) {
        var r = fa(t);
        return {
          args: r.map(function (n) {
            return t[n];
          }),
          keys: r,
        };
      }
    }
    return {
      args: e,
      keys: null,
    };
  }
  function la(e) {
    return e && typeof e == "object" && ca(e) === pa;
  }
  function jn(e, t) {
    return e.reduce(function (r, n, o) {
      return (r[n] = t[o]), r;
    }, {});
  }
  function Q() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = Me(e),
      n = Ge(e),
      o = Fn(e),
      i = o.args,
      a = o.keys;
    if (i.length === 0) return ce([], r);
    var s = new W(
      jr(
        i,
        r,
        a
          ? function (p) {
              return jn(a, p);
            }
          : se
      )
    );
    return n ? s.pipe(Je(n)) : s;
  }
  function jr(e, t, r) {
    return (
      r === void 0 && (r = se),
      function (n) {
        Un(
          t,
          function () {
            for (
              var o = e.length,
                i = new Array(o),
                a = o,
                s = o,
                p = function (f) {
                  Un(
                    t,
                    function () {
                      var l = ce(e[f], t),
                        m = !1;
                      l.subscribe(
                        E(
                          n,
                          function (d) {
                            (i[f] = d),
                              m || ((m = !0), s--),
                              s || n.next(r(i.slice()));
                          },
                          function () {
                            --a || n.complete();
                          }
                        )
                      );
                    },
                    n
                  );
                },
                c = 0;
              c < o;
              c++
            )
              p(c);
          },
          n
        );
      }
    );
  }
  function Un(e, t, r) {
    e ? Ee(r, e, t) : t();
  }
  function Wn(e, t, r, n, o, i, a, s) {
    var p = [],
      c = 0,
      f = 0,
      l = !1,
      m = function () {
        l && !p.length && !c && t.complete();
      },
      d = function (g) {
        return c < n ? h(g) : p.push(g);
      },
      h = function (g) {
        i && t.next(g), c++;
        var B = !1;
        I(r(g, f++)).subscribe(
          E(
            t,
            function (oe) {
              o == null || o(oe), i ? d(oe) : t.next(oe);
            },
            function () {
              B = !0;
            },
            void 0,
            function () {
              if (B)
                try {
                  c--;
                  for (
                    var oe = function () {
                      var K = p.shift();
                      a
                        ? Ee(t, a, function () {
                            return h(K);
                          })
                        : h(K);
                    };
                    p.length && c < n;

                  )
                    oe();
                  m();
                } catch (K) {
                  t.error(K);
                }
            }
          )
        );
      };
    return (
      e.subscribe(
        E(t, d, function () {
          (l = !0), m();
        })
      ),
      function () {
        s == null || s();
      }
    );
  }
  function Z(e, t, r) {
    return (
      r === void 0 && (r = 1 / 0),
      k(t)
        ? Z(function (n, o) {
            return u(function (i, a) {
              return t(n, i, o, a);
            })(I(e(n, o)));
          }, r)
        : (typeof t == "number" && (r = t),
          y(function (n, o) {
            return Wn(n, o, e, r);
          }))
    );
  }
  function ht(e) {
    return e === void 0 && (e = 1 / 0), Z(se, e);
  }
  function Dn() {
    return ht(1);
  }
  function at() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Dn()(ce(e, Me(e)));
  }
  function R(e) {
    return new W(function (t) {
      I(e()).subscribe(t);
    });
  }
  var ua = ["addListener", "removeListener"],
    ma = ["addEventListener", "removeEventListener"],
    da = ["on", "off"];
  function b(e, t, r, n) {
    if ((k(r) && ((n = r), (r = void 0)), n)) return b(e, t, r).pipe(Je(n));
    var o = V(
        va(e)
          ? ma.map(function (s) {
              return function (p) {
                return e[s](t, p, r);
              };
            })
          : ha(e)
          ? ua.map(Vn(e, t))
          : ba(e)
          ? da.map(Vn(e, t))
          : [],
        2
      ),
      i = o[0],
      a = o[1];
    if (!i && dt(e))
      return Z(function (s) {
        return b(s, t, r);
      })(I(e));
    if (!i) throw new TypeError("Invalid event target");
    return new W(function (s) {
      var p = function () {
        for (var c = [], f = 0; f < arguments.length; f++) c[f] = arguments[f];
        return s.next(1 < c.length ? c : c[0]);
      };
      return (
        i(p),
        function () {
          return a(p);
        }
      );
    });
  }
  function Vn(e, t) {
    return function (r) {
      return function (n) {
        return e[r](t, n);
      };
    };
  }
  function ha(e) {
    return k(e.addListener) && k(e.removeListener);
  }
  function ba(e) {
    return k(e.on) && k(e.off);
  }
  function va(e) {
    return k(e.addEventListener) && k(e.removeEventListener);
  }
  function sr(e, t, r) {
    return r
      ? sr(e, t).pipe(Je(r))
      : new W(function (n) {
          var o = function () {
              for (var a = [], s = 0; s < arguments.length; s++)
                a[s] = arguments[s];
              return n.next(a.length === 1 ? a[0] : a);
            },
            i = e(o);
          return k(t)
            ? function () {
                return t(o, i);
              }
            : void 0;
        });
  }
  function Xe(e, t, r) {
    e === void 0 && (e = 0), r === void 0 && (r = Ir);
    var n = -1;
    return (
      t != null && (Bt(t) ? (r = t) : (n = t)),
      new W(function (o) {
        var i = In(e) ? +e - r.now() : e;
        i < 0 && (i = 0);
        var a = 0;
        return r.schedule(function () {
          o.closed ||
            (o.next(a++), 0 <= n ? this.schedule(void 0, n) : o.complete());
        }, i);
      })
    );
  }
  function O() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = Me(e),
      n = Gt(e, 1 / 0),
      o = e;
    return o.length ? (o.length === 1 ? I(o[0]) : ht(n)(ce(o, r))) : A;
  }
  var Le = new W(ve);
  var ga = Array.isArray;
  function bt(e) {
    return e.length === 1 && ga(e[0]) ? e[0] : e;
  }
  function v(e, t) {
    return y(function (r, n) {
      var o = 0;
      r.subscribe(
        E(n, function (i) {
          return e.call(t, i, o++) && n.next(i);
        })
      );
    });
  }
  function Ct() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = Ge(e),
      n = bt(e);
    return n.length
      ? new W(function (o) {
          var i = n.map(function () {
              return [];
            }),
            a = n.map(function () {
              return !1;
            });
          o.add(function () {
            i = a = null;
          });
          for (
            var s = function (c) {
                I(n[c]).subscribe(
                  E(
                    o,
                    function (f) {
                      if (
                        (i[c].push(f),
                        i.every(function (m) {
                          return m.length;
                        }))
                      ) {
                        var l = i.map(function (m) {
                          return m.shift();
                        });
                        o.next(r ? r.apply(void 0, N([], V(l))) : l),
                          i.some(function (m, d) {
                            return !m.length && a[d];
                          }) && o.complete();
                      }
                    },
                    function () {
                      (a[c] = !0), !i[c].length && o.complete();
                    }
                  )
                );
              },
              p = 0;
            !o.closed && p < n.length;
            p++
          )
            s(p);
          return function () {
            i = a = null;
          };
        })
      : A;
  }
  function zn(e) {
    return y(function (t, r) {
      var n = !1,
        o = null,
        i = null,
        a = !1,
        s = function () {
          if ((i == null || i.unsubscribe(), (i = null), n)) {
            n = !1;
            var c = o;
            (o = null), r.next(c);
          }
          a && r.complete();
        },
        p = function () {
          (i = null), a && r.complete();
        };
      t.subscribe(
        E(
          r,
          function (c) {
            (n = !0), (o = c), i || I(e(c)).subscribe((i = E(r, s, p)));
          },
          function () {
            (a = !0), (!n || !i || i.closed) && r.complete();
          }
        )
      );
    });
  }
  function Oe(e, t) {
    return (
      t === void 0 && (t = ae),
      zn(function () {
        return Xe(e, t);
      })
    );
  }
  function Pe(e, t) {
    return (
      t === void 0 && (t = null),
      (t = t != null ? t : e),
      y(function (r, n) {
        var o = [],
          i = 0;
        r.subscribe(
          E(
            n,
            function (a) {
              var s,
                p,
                c,
                f,
                l = null;
              i++ % t === 0 && o.push([]);
              try {
                for (var m = be(o), d = m.next(); !d.done; d = m.next()) {
                  var h = d.value;
                  h.push(a),
                    e <= h.length && ((l = l != null ? l : []), l.push(h));
                }
              } catch (oe) {
                s = {
                  error: oe,
                };
              } finally {
                try {
                  d && !d.done && (p = m.return) && p.call(m);
                } finally {
                  if (s) throw s.error;
                }
              }
              if (l)
                try {
                  for (var g = be(l), B = g.next(); !B.done; B = g.next()) {
                    var h = B.value;
                    Ne(o, h), n.next(h);
                  }
                } catch (oe) {
                  c = {
                    error: oe,
                  };
                } finally {
                  try {
                    B && !B.done && (f = g.return) && f.call(g);
                  } finally {
                    if (c) throw c.error;
                  }
                }
            },
            function () {
              var a, s;
              try {
                for (var p = be(o), c = p.next(); !c.done; c = p.next()) {
                  var f = c.value;
                  n.next(f);
                }
              } catch (l) {
                a = {
                  error: l,
                };
              } finally {
                try {
                  c && !c.done && (s = p.return) && s.call(p);
                } finally {
                  if (a) throw a.error;
                }
              }
              n.complete();
            },
            void 0,
            function () {
              o = null;
            }
          )
        );
      })
    );
  }
  function ue(e) {
    return y(function (t, r) {
      var n = null,
        o = !1,
        i;
      (n = t.subscribe(
        E(r, void 0, void 0, function (a) {
          (i = I(e(a, ue(e)(t)))),
            n ? (n.unsubscribe(), (n = null), i.subscribe(r)) : (o = !0);
        })
      )),
        o && (n.unsubscribe(), (n = null), i.subscribe(r));
    });
  }
  function Nn(e, t, r, n, o) {
    return function (i, a) {
      var s = r,
        p = t,
        c = 0;
      i.subscribe(
        E(
          a,
          function (f) {
            var l = c++;
            (p = s ? e(p, f, l) : ((s = !0), f)), n && a.next(p);
          },
          o &&
            function () {
              s && a.next(p), a.complete();
            }
        )
      );
    };
  }
  function Ur() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = Ge(e);
    return r
      ? wn(Ur.apply(void 0, N([], V(e))), Je(r))
      : y(function (n, o) {
          jr(N([n], V(bt(e))))(o);
        });
  }
  function Ze() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Ur.apply(void 0, N([], V(e)));
  }
  function Wr(e, t) {
    return k(t) ? Z(e, t, 1) : Z(e, 1);
  }
  function ye(e, t) {
    return (
      t === void 0 && (t = ae),
      y(function (r, n) {
        var o = null,
          i = null,
          a = null,
          s = function () {
            if (o) {
              o.unsubscribe(), (o = null);
              var c = i;
              (i = null), n.next(c);
            }
          };
        function p() {
          var c = a + e,
            f = t.now();
          if (f < c) {
            (o = this.schedule(void 0, c - f)), n.add(o);
            return;
          }
          s();
        }
        r.subscribe(
          E(
            n,
            function (c) {
              (i = c), (a = t.now()), o || ((o = t.schedule(p, e)), n.add(o));
            },
            function () {
              s(), n.complete();
            },
            void 0,
            function () {
              i = o = null;
            }
          )
        );
      })
    );
  }
  function $e(e) {
    return y(function (t, r) {
      var n = !1;
      t.subscribe(
        E(
          r,
          function (o) {
            (n = !0), r.next(o);
          },
          function () {
            n || r.next(e), r.complete();
          }
        )
      );
    });
  }
  function we(e) {
    return e <= 0
      ? function () {
          return A;
        }
      : y(function (t, r) {
          var n = 0;
          t.subscribe(
            E(r, function (o) {
              ++n <= e && (r.next(o), e <= n && r.complete());
            })
          );
        });
  }
  function te() {
    return y(function (e, t) {
      e.subscribe(E(t, ve));
    });
  }
  function qn(e) {
    return u(function () {
      return e;
    });
  }
  function Dr(e, t) {
    return t
      ? function (r) {
          return at(t.pipe(we(1), te()), r.pipe(Dr(e)));
        }
      : Z(function (r, n) {
          return I(e(r, n)).pipe(we(1), qn(r));
        });
  }
  function Ke(e, t) {
    t === void 0 && (t = ae);
    var r = Xe(e, t);
    return Dr(function () {
      return r;
    });
  }
  function G(e, t) {
    return (
      t === void 0 && (t = se),
      (e = e != null ? e : ya),
      y(function (r, n) {
        var o,
          i = !0;
        r.subscribe(
          E(n, function (a) {
            var s = t(a);
            (i || !e(o, s)) && ((i = !1), (o = s), n.next(a));
          })
        );
      })
    );
  }
  function ya(e, t) {
    return e === t;
  }
  function ee(e, t) {
    return G(function (r, n) {
      return t ? t(r[e], n[e]) : r[e] === n[e];
    });
  }
  function Kn(e) {
    return (
      e === void 0 && (e = xa),
      y(function (t, r) {
        var n = !1;
        t.subscribe(
          E(
            r,
            function (o) {
              (n = !0), r.next(o);
            },
            function () {
              return n ? r.complete() : r.error(e());
            }
          )
        );
      })
    );
  }
  function xa() {
    return new ar();
  }
  function re() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return function (r) {
      return at(r, H.apply(void 0, N([], V(e))));
    };
  }
  function C(e) {
    return y(function (t, r) {
      try {
        t.subscribe(r);
      } finally {
        r.add(e);
      }
    });
  }
  function Ie(e, t) {
    var r = arguments.length >= 2;
    return function (n) {
      return n.pipe(
        e
          ? v(function (o, i) {
              return e(o, i, n);
            })
          : se,
        we(1),
        r
          ? $e(t)
          : Kn(function () {
              return new ar();
            })
      );
    };
  }
  function Vr(e) {
    return e <= 0
      ? function () {
          return A;
        }
      : y(function (t, r) {
          var n = [];
          t.subscribe(
            E(
              r,
              function (o) {
                n.push(o), e < n.length && n.shift();
              },
              function () {
                var o, i;
                try {
                  for (var a = be(n), s = a.next(); !s.done; s = a.next()) {
                    var p = s.value;
                    r.next(p);
                  }
                } catch (c) {
                  o = {
                    error: c,
                  };
                } finally {
                  try {
                    s && !s.done && (i = a.return) && i.call(a);
                  } finally {
                    if (o) throw o.error;
                  }
                }
                r.complete();
              },
              void 0,
              function () {
                n = null;
              }
            )
          );
        });
  }
  function Yn() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = Me(e),
      n = Gt(e, 1 / 0);
    return (
      (e = bt(e)),
      y(function (o, i) {
        ht(n)(ce(N([o], V(e)), r)).subscribe(i);
      })
    );
  }
  function Ae() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Yn.apply(void 0, N([], V(e)));
  }
  function st(e) {
    var t,
      r = 1 / 0,
      n;
    return (
      e != null &&
        (typeof e == "object"
          ? ((t = e.count), (r = t === void 0 ? 1 / 0 : t), (n = e.delay))
          : (r = e)),
      r <= 0
        ? function () {
            return A;
          }
        : y(function (o, i) {
            var a = 0,
              s,
              p = function () {
                if ((s == null || s.unsubscribe(), (s = null), n != null)) {
                  var f = typeof n == "number" ? Xe(n) : I(n(a)),
                    l = E(i, function () {
                      l.unsubscribe(), c();
                    });
                  f.subscribe(l);
                } else c();
              },
              c = function () {
                var f = !1;
                (s = o.subscribe(
                  E(i, void 0, function () {
                    ++a < r ? (s ? p() : (f = !0)) : i.complete();
                  })
                )),
                  f && p();
              };
            c();
          })
    );
  }
  function cr(e) {
    return y(function (t, r) {
      var n = !1,
        o = null;
      t.subscribe(
        E(r, function (i) {
          (n = !0), (o = i);
        })
      ),
        I(e).subscribe(
          E(
            r,
            function () {
              if (n) {
                n = !1;
                var i = o;
                (o = null), r.next(i);
              }
            },
            ve
          )
        );
    });
  }
  function zr(e, t) {
    return y(Nn(e, t, arguments.length >= 2, !0));
  }
  function me(e) {
    e === void 0 && (e = {});
    var t = e.connector,
      r =
        t === void 0
          ? function () {
              return new w();
            }
          : t,
      n = e.resetOnError,
      o = n === void 0 ? !0 : n,
      i = e.resetOnComplete,
      a = i === void 0 ? !0 : i,
      s = e.resetOnRefCountZero,
      p = s === void 0 ? !0 : s;
    return function (c) {
      var f,
        l,
        m,
        d = 0,
        h = !1,
        g = !1,
        B = function () {
          l == null || l.unsubscribe(), (l = void 0);
        },
        oe = function () {
          B(), (f = m = void 0), (h = g = !1);
        },
        K = function () {
          var M = f;
          oe(), M == null || M.unsubscribe();
        };
      return y(function (M, Be) {
        d++, !g && !h && B();
        var ze = (m = m != null ? m : r());
        Be.add(function () {
          d--, d === 0 && !g && !h && (l = Nr(K, p));
        }),
          ze.subscribe(Be),
          !f &&
            d > 0 &&
            ((f = new it({
              next: function (je) {
                return ze.next(je);
              },
              error: function (je) {
                (g = !0), B(), (l = Nr(oe, o, je)), ze.error(je);
              },
              complete: function () {
                (h = !0), B(), (l = Nr(oe, a)), ze.complete();
              },
            })),
            I(M).subscribe(f));
      })(c);
    };
  }
  function Nr(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    if (t === !0) {
      e();
      return;
    }
    if (t !== !1) {
      var o = new it({
        next: function () {
          o.unsubscribe(), e();
        },
      });
      return I(t.apply(void 0, N([], V(r)))).subscribe(o);
    }
  }
  function J(e, t, r) {
    var n,
      o,
      i,
      a,
      s = !1;
    return (
      e && typeof e == "object"
        ? ((n = e.bufferSize),
          (a = n === void 0 ? 1 / 0 : n),
          (o = e.windowTime),
          (t = o === void 0 ? 1 / 0 : o),
          (i = e.refCount),
          (s = i === void 0 ? !1 : i),
          (r = e.scheduler))
        : (a = e != null ? e : 1 / 0),
      me({
        connector: function () {
          return new Mt(a, t, r);
        },
        resetOnError: !0,
        resetOnComplete: !1,
        resetOnRefCountZero: s,
      })
    );
  }
  function de(e) {
    return v(function (t, r) {
      return e <= r;
    });
  }
  function kt(e) {
    return y(function (t, r) {
      var n = !1,
        o = E(
          r,
          function () {
            o == null || o.unsubscribe(), (n = !0);
          },
          ve
        );
      I(e).subscribe(o),
        t.subscribe(
          E(r, function (i) {
            return n && r.next(i);
          })
        );
    });
  }
  function q() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = Me(e);
    return y(function (n, o) {
      (r ? at(e, n, r) : at(e, n)).subscribe(o);
    });
  }
  function x(e, t) {
    return y(function (r, n) {
      var o = null,
        i = 0,
        a = !1,
        s = function () {
          return a && !o && n.complete();
        };
      r.subscribe(
        E(
          n,
          function (p) {
            o == null || o.unsubscribe();
            var c = 0,
              f = i++;
            I(e(p, f)).subscribe(
              (o = E(
                n,
                function (l) {
                  return n.next(t ? t(p, l, f, c++) : l);
                },
                function () {
                  (o = null), s();
                }
              ))
            );
          },
          function () {
            (a = !0), s();
          }
        )
      );
    });
  }
  function j(e) {
    return y(function (t, r) {
      I(e).subscribe(
        E(
          r,
          function () {
            return r.complete();
          },
          ve
        )
      ),
        !r.closed && t.subscribe(r);
    });
  }
  function qr(e, t) {
    return (
      t === void 0 && (t = !1),
      y(function (r, n) {
        var o = 0;
        r.subscribe(
          E(n, function (i) {
            var a = e(i, o++);
            (a || t) && n.next(i), !a && n.complete();
          })
        );
      })
    );
  }
  function S(e, t, r) {
    var n =
      k(e) || t || r
        ? {
            next: e,
            error: t,
            complete: r,
          }
        : e;
    return n
      ? y(function (o, i) {
          var a;
          (a = n.subscribe) === null || a === void 0 || a.call(n);
          var s = !0;
          o.subscribe(
            E(
              i,
              function (p) {
                var c;
                (c = n.next) === null || c === void 0 || c.call(n, p),
                  i.next(p);
              },
              function () {
                var p;
                (s = !1),
                  (p = n.complete) === null || p === void 0 || p.call(n),
                  i.complete();
              },
              function (p) {
                var c;
                (s = !1),
                  (c = n.error) === null || c === void 0 || c.call(n, p),
                  i.error(p);
              },
              function () {
                var p, c;
                s &&
                  ((p = n.unsubscribe) === null || p === void 0 || p.call(n)),
                  (c = n.finalize) === null || c === void 0 || c.call(n);
              }
            )
          );
        })
      : se;
  }
  var Kr = {
    leading: !0,
    trailing: !1,
  };
  function Qn(e, t) {
    return (
      t === void 0 && (t = Kr),
      y(function (r, n) {
        var o = t.leading,
          i = t.trailing,
          a = !1,
          s = null,
          p = null,
          c = !1,
          f = function () {
            p == null || p.unsubscribe(),
              (p = null),
              i && (d(), c && n.complete());
          },
          l = function () {
            (p = null), c && n.complete();
          },
          m = function (h) {
            return (p = I(e(h)).subscribe(E(n, f, l)));
          },
          d = function () {
            if (a) {
              a = !1;
              var h = s;
              (s = null), n.next(h), !c && m(h);
            }
          };
        r.subscribe(
          E(
            n,
            function (h) {
              (a = !0), (s = h), !(p && !p.closed) && (o ? d() : m(h));
            },
            function () {
              (c = !0), !(i && a && p && !p.closed) && n.complete();
            }
          )
        );
      })
    );
  }
  function Rt(e, t, r) {
    t === void 0 && (t = ae), r === void 0 && (r = Kr);
    var n = Xe(e, t);
    return Qn(function () {
      return n;
    }, r);
  }
  function pe() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = Ge(e);
    return y(function (n, o) {
      for (
        var i = e.length,
          a = new Array(i),
          s = e.map(function () {
            return !1;
          }),
          p = !1,
          c = function (l) {
            I(e[l]).subscribe(
              E(
                o,
                function (m) {
                  (a[l] = m),
                    !p &&
                      !s[l] &&
                      ((s[l] = !0), (p = s.every(se)) && (s = null));
                },
                ve
              )
            );
          },
          f = 0;
        f < i;
        f++
      )
        c(f);
      n.subscribe(
        E(o, function (l) {
          if (p) {
            var m = N([l], V(a));
            o.next(r ? r.apply(void 0, N([], V(m))) : m);
          }
        })
      );
    });
  }
  function Bn() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return y(function (r, n) {
      Ct.apply(void 0, N([r], V(e))).subscribe(n);
    });
  }
  function Yr() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Bn.apply(void 0, N([], V(e)));
  }
  function Gn() {
    let e = new Mt(1);
    return (
      b(document, "DOMContentLoaded", {
        once: !0,
      }).subscribe(() => e.next(document)),
      e
    );
  }
  function D(e, t = document) {
    return Array.from(t.querySelectorAll(e));
  }
  function z(e, t = document) {
    let r = fe(e, t);
    if (typeof r == "undefined")
      throw new ReferenceError(
        `Missing element: expected "${e}" to be present`
      );
    return r;
  }
  function fe(e, t = document) {
    return t.querySelector(e) || void 0;
  }
  function Fe() {
    return (
      (document.activeElement instanceof HTMLElement &&
        document.activeElement) ||
      void 0
    );
  }
  var Ea = O(b(document.body, "focusin"), b(document.body, "focusout")).pipe(
    ye(1),
    q(void 0),
    u(() => Fe() || document.body),
    J(1)
  );
  function vt(e) {
    return Ea.pipe(
      u((t) => e.contains(t)),
      G()
    );
  }
  function Jn(e, t) {
    return O(
      b(e, "mouseenter").pipe(u(() => !0)),
      b(e, "mouseleave").pipe(u(() => !1))
    ).pipe(t ? ye(t) : se, q(!1));
  }
  function We(e) {
    return {
      x: e.offsetLeft,
      y: e.offsetTop,
    };
  }
  function Xn(e) {
    return O(b(window, "load"), b(window, "resize")).pipe(
      Oe(0, ge),
      u(() => We(e)),
      q(We(e))
    );
  }
  function pr(e) {
    return {
      x: e.scrollLeft,
      y: e.scrollTop,
    };
  }
  function et(e) {
    return O(b(e, "scroll"), b(window, "resize")).pipe(
      Oe(0, ge),
      u(() => pr(e)),
      q(pr(e))
    );
  }
  var eo = (function () {
      if (typeof Map != "undefined") return Map;
      function e(t, r) {
        var n = -1;
        return (
          t.some(function (o, i) {
            return o[0] === r ? ((n = i), !0) : !1;
          }),
          n
        );
      }
      return (function () {
        function t() {
          this.__entries__ = [];
        }
        return (
          Object.defineProperty(t.prototype, "size", {
            get: function () {
              return this.__entries__.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.get = function (r) {
            var n = e(this.__entries__, r),
              o = this.__entries__[n];
            return o && o[1];
          }),
          (t.prototype.set = function (r, n) {
            var o = e(this.__entries__, r);
            ~o ? (this.__entries__[o][1] = n) : this.__entries__.push([r, n]);
          }),
          (t.prototype.delete = function (r) {
            var n = this.__entries__,
              o = e(n, r);
            ~o && n.splice(o, 1);
          }),
          (t.prototype.has = function (r) {
            return !!~e(this.__entries__, r);
          }),
          (t.prototype.clear = function () {
            this.__entries__.splice(0);
          }),
          (t.prototype.forEach = function (r, n) {
            n === void 0 && (n = null);
            for (var o = 0, i = this.__entries__; o < i.length; o++) {
              var a = i[o];
              r.call(n, a[1], a[0]);
            }
          }),
          t
        );
      })();
    })(),
    Qr =
      typeof window != "undefined" &&
      typeof document != "undefined" &&
      window.document === document,
    fr = (function () {
      return typeof global != "undefined" && global.Math === Math
        ? global
        : typeof self != "undefined" && self.Math === Math
        ? self
        : typeof window != "undefined" && window.Math === Math
        ? window
        : Function("return this")();
    })(),
    wa = (function () {
      return typeof requestAnimationFrame == "function"
        ? requestAnimationFrame.bind(fr)
        : function (e) {
            return setTimeout(function () {
              return e(Date.now());
            }, 1e3 / 60);
          };
    })(),
    Sa = 2;
  function Ta(e, t) {
    var r = !1,
      n = !1,
      o = 0;
    function i() {
      r && ((r = !1), e()), n && s();
    }
    function a() {
      wa(i);
    }
    function s() {
      var p = Date.now();
      if (r) {
        if (p - o < Sa) return;
        n = !0;
      } else (r = !0), (n = !1), setTimeout(a, t);
      o = p;
    }
    return s;
  }
  var Oa = 20,
    _a = [
      "top",
      "right",
      "bottom",
      "left",
      "width",
      "height",
      "size",
      "weight",
    ],
    Ma = typeof MutationObserver != "undefined",
    La = (function () {
      function e() {
        (this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = Ta(this.refresh.bind(this), Oa));
      }
      return (
        (e.prototype.addObserver = function (t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t),
            this.connected_ || this.connect_();
        }),
        (e.prototype.removeObserver = function (t) {
          var r = this.observers_,
            n = r.indexOf(t);
          ~n && r.splice(n, 1),
            !r.length && this.connected_ && this.disconnect_();
        }),
        (e.prototype.refresh = function () {
          var t = this.updateObservers_();
          t && this.refresh();
        }),
        (e.prototype.updateObservers_ = function () {
          var t = this.observers_.filter(function (r) {
            return r.gatherActive(), r.hasActive();
          });
          return (
            t.forEach(function (r) {
              return r.broadcastActive();
            }),
            t.length > 0
          );
        }),
        (e.prototype.connect_ = function () {
          !Qr ||
            this.connected_ ||
            (document.addEventListener("transitionend", this.onTransitionEnd_),
            window.addEventListener("resize", this.refresh),
            Ma
              ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                this.mutationsObserver_.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))
              : (document.addEventListener("DOMSubtreeModified", this.refresh),
                (this.mutationEventsAdded_ = !0)),
            (this.connected_ = !0));
        }),
        (e.prototype.disconnect_ = function () {
          !Qr ||
            !this.connected_ ||
            (document.removeEventListener(
              "transitionend",
              this.onTransitionEnd_
            ),
            window.removeEventListener("resize", this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ &&
              document.removeEventListener("DOMSubtreeModified", this.refresh),
            (this.mutationsObserver_ = null),
            (this.mutationEventsAdded_ = !1),
            (this.connected_ = !1));
        }),
        (e.prototype.onTransitionEnd_ = function (t) {
          var r = t.propertyName,
            n = r === void 0 ? "" : r,
            o = _a.some(function (i) {
              return !!~n.indexOf(i);
            });
          o && this.refresh();
        }),
        (e.getInstance = function () {
          return this.instance_ || (this.instance_ = new e()), this.instance_;
        }),
        (e.instance_ = null),
        e
      );
    })(),
    to = function (e, t) {
      for (var r = 0, n = Object.keys(t); r < n.length; r++) {
        var o = n[r];
        Object.defineProperty(e, o, {
          value: t[o],
          enumerable: !1,
          writable: !1,
          configurable: !0,
        });
      }
      return e;
    },
    gt = function (e) {
      var t = e && e.ownerDocument && e.ownerDocument.defaultView;
      return t || fr;
    },
    ro = ur(0, 0, 0, 0);
  function lr(e) {
    return parseFloat(e) || 0;
  }
  function Zn(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return t.reduce(function (n, o) {
      var i = e["border-" + o + "-width"];
      return n + lr(i);
    }, 0);
  }
  function Aa(e) {
    for (
      var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t;
      n < o.length;
      n++
    ) {
      var i = o[n],
        a = e["padding-" + i];
      r[i] = lr(a);
    }
    return r;
  }
  function Ca(e) {
    var t = e.getBBox();
    return ur(0, 0, t.width, t.height);
  }
  function ka(e) {
    var t = e.clientWidth,
      r = e.clientHeight;
    if (!t && !r) return ro;
    var n = gt(e).getComputedStyle(e),
      o = Aa(n),
      i = o.left + o.right,
      a = o.top + o.bottom,
      s = lr(n.width),
      p = lr(n.height);
    if (
      (n.boxSizing === "border-box" &&
        (Math.round(s + i) !== t && (s -= Zn(n, "left", "right") + i),
        Math.round(p + a) !== r && (p -= Zn(n, "top", "bottom") + a)),
      !Ha(e))
    ) {
      var c = Math.round(s + i) - t,
        f = Math.round(p + a) - r;
      Math.abs(c) !== 1 && (s -= c), Math.abs(f) !== 1 && (p -= f);
    }
    return ur(o.left, o.top, s, p);
  }
  var Ra = (function () {
    return typeof SVGGraphicsElement != "undefined"
      ? function (e) {
          return e instanceof gt(e).SVGGraphicsElement;
        }
      : function (e) {
          return (
            e instanceof gt(e).SVGElement && typeof e.getBBox == "function"
          );
        };
  })();
  function Ha(e) {
    return e === gt(e).document.documentElement;
  }
  function Pa(e) {
    return Qr ? (Ra(e) ? Ca(e) : ka(e)) : ro;
  }
  function $a(e) {
    var t = e.x,
      r = e.y,
      n = e.width,
      o = e.height,
      i = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object,
      a = Object.create(i.prototype);
    return (
      to(a, {
        x: t,
        y: r,
        width: n,
        height: o,
        top: r,
        right: t + n,
        bottom: o + r,
        left: t,
      }),
      a
    );
  }
  function ur(e, t, r, n) {
    return {
      x: e,
      y: t,
      width: r,
      height: n,
    };
  }
  var Ia = (function () {
      function e(t) {
        (this.broadcastWidth = 0),
          (this.broadcastHeight = 0),
          (this.contentRect_ = ur(0, 0, 0, 0)),
          (this.target = t);
      }
      return (
        (e.prototype.isActive = function () {
          var t = Pa(this.target);
          return (
            (this.contentRect_ = t),
            t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
          );
        }),
        (e.prototype.broadcastRect = function () {
          var t = this.contentRect_;
          return (
            (this.broadcastWidth = t.width),
            (this.broadcastHeight = t.height),
            t
          );
        }),
        e
      );
    })(),
    Fa = (function () {
      function e(t, r) {
        var n = $a(r);
        to(this, {
          target: t,
          contentRect: n,
        });
      }
      return e;
    })(),
    ja = (function () {
      function e(t, r, n) {
        if (
          ((this.activeObservations_ = []),
          (this.observations_ = new eo()),
          typeof t != "function")
        )
          throw new TypeError(
            "The callback provided as parameter 1 is not a function."
          );
        (this.callback_ = t), (this.controller_ = r), (this.callbackCtx_ = n);
      }
      return (
        (e.prototype.observe = function (t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (
            !(typeof Element == "undefined" || !(Element instanceof Object))
          ) {
            if (!(t instanceof gt(t).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var r = this.observations_;
            r.has(t) ||
              (r.set(t, new Ia(t)),
              this.controller_.addObserver(this),
              this.controller_.refresh());
          }
        }),
        (e.prototype.unobserve = function (t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (
            !(typeof Element == "undefined" || !(Element instanceof Object))
          ) {
            if (!(t instanceof gt(t).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var r = this.observations_;
            r.has(t) &&
              (r.delete(t), r.size || this.controller_.removeObserver(this));
          }
        }),
        (e.prototype.disconnect = function () {
          this.clearActive(),
            this.observations_.clear(),
            this.controller_.removeObserver(this);
        }),
        (e.prototype.gatherActive = function () {
          var t = this;
          this.clearActive(),
            this.observations_.forEach(function (r) {
              r.isActive() && t.activeObservations_.push(r);
            });
        }),
        (e.prototype.broadcastActive = function () {
          if (this.hasActive()) {
            var t = this.callbackCtx_,
              r = this.activeObservations_.map(function (n) {
                return new Fa(n.target, n.broadcastRect());
              });
            this.callback_.call(t, r, t), this.clearActive();
          }
        }),
        (e.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        }),
        (e.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        }),
        e
      );
    })(),
    no = typeof WeakMap != "undefined" ? new WeakMap() : new eo(),
    oo = (function () {
      function e(t) {
        if (!(this instanceof e))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var r = La.getInstance(),
          n = new ja(t, r, this);
        no.set(this, n);
      }
      return e;
    })();
  ["observe", "unobserve", "disconnect"].forEach(function (e) {
    oo.prototype[e] = function () {
      var t;
      return (t = no.get(this))[e].apply(t, arguments);
    };
  });
  var Ua = (function () {
      return typeof fr.ResizeObserver != "undefined" ? fr.ResizeObserver : oo;
    })(),
    io = Ua;
  var ao = new w(),
    Wa = R(() =>
      H(
        new io((e) => {
          for (let t of e) ao.next(t);
        })
      )
    ).pipe(
      x((e) => O(Le, H(e)).pipe(C(() => e.disconnect()))),
      J(1)
    );
  function le(e) {
    return {
      width: e.offsetWidth,
      height: e.offsetHeight,
    };
  }
  function Se(e) {
    return Wa.pipe(
      S((t) => t.observe(e)),
      x((t) =>
        ao.pipe(
          v(({ target: r }) => r === e),
          C(() => t.unobserve(e)),
          u(() => le(e))
        )
      ),
      q(le(e))
    );
  }
  function yt(e) {
    return {
      width: e.scrollWidth,
      height: e.scrollHeight,
    };
  }
  function xt(e) {
    let t = e.parentElement;
    for (
      ;
      t && e.scrollWidth <= t.scrollWidth && e.scrollHeight <= t.scrollHeight;

    )
      t = (e = t).parentElement;
    return t ? e : void 0;
  }
  var so = new w(),
    Da = R(() =>
      H(
        new IntersectionObserver(
          (e) => {
            for (let t of e) so.next(t);
          },
          {
            threshold: 0,
          }
        )
      )
    ).pipe(
      x((e) => O(Le, H(e)).pipe(C(() => e.disconnect()))),
      J(1)
    );
  function Et(e) {
    return Da.pipe(
      S((t) => t.observe(e)),
      x((t) =>
        so.pipe(
          v(({ target: r }) => r === e),
          C(() => t.unobserve(e)),
          u(({ isIntersecting: r }) => r)
        )
      )
    );
  }
  function co(e, t = 16) {
    return et(e).pipe(
      u(({ y: r }) => {
        let n = le(e),
          o = yt(e);
        return r >= o.height - n.height - t;
      }),
      G()
    );
  }
  var mr = {
    drawer: z("[data-md-toggle=drawer]"),
    search: z("[data-md-toggle=search]"),
  };
  function po(e) {
    return mr[e].checked;
  }
  function Ye(e, t) {
    mr[e].checked !== t && mr[e].click();
  }
  function De(e) {
    let t = mr[e];
    return b(t, "change").pipe(
      u(() => t.checked),
      q(t.checked)
    );
  }
  function Va(e, t) {
    switch (e.constructor) {
      case HTMLInputElement:
        return e.type === "radio" ? /^Arrow/.test(t) : !0;
      case HTMLSelectElement:
      case HTMLTextAreaElement:
        return !0;
      default:
        return e.isContentEditable;
    }
  }
  function za() {
    return O(
      b(window, "compositionstart").pipe(u(() => !0)),
      b(window, "compositionend").pipe(u(() => !1))
    ).pipe(q(!1));
  }
  function fo() {
    let e = b(window, "keydown").pipe(
      v((t) => !(t.metaKey || t.ctrlKey)),
      u((t) => ({
        mode: po("search") ? "search" : "global",
        type: t.key,
        claim() {
          t.preventDefault(), t.stopPropagation();
        },
      })),
      v(({ mode: t, type: r }) => {
        if (t === "global") {
          let n = Fe();
          if (typeof n != "undefined") return !Va(n, r);
        }
        return !0;
      }),
      me()
    );
    return za().pipe(x((t) => (t ? A : e)));
  }
  function Ce() {
    return new URL(location.href);
  }
  function ct(e) {
    location.href = e.href;
  }
  function lo() {
    return new w();
  }
  function uo(e, t) {
    if (typeof t == "string" || typeof t == "number")
      e.innerHTML += t.toString();
    else if (t instanceof Node) e.appendChild(t);
    else if (Array.isArray(t)) for (let r of t) uo(e, r);
  }
  function T(e, t, ...r) {
    let n = document.createElement(e);
    if (t)
      for (let o of Object.keys(t))
        typeof t[o] != "undefined" &&
          (typeof t[o] != "boolean"
            ? n.setAttribute(o, t[o])
            : n.setAttribute(o, ""));
    for (let o of r) uo(n, o);
    return n;
  }
  function dr(e) {
    if (e > 999) {
      let t = +((e - 950) % 1e3 > 99);
      return `${((e + 1e-6) / 1e3).toFixed(t)}k`;
    } else return e.toString();
  }
  function mo() {
    return location.hash.substring(1);
  }
  function ho(e) {
    let t = T("a", {
      href: e,
    });
    t.addEventListener("click", (r) => r.stopPropagation()), t.click();
  }
  function Na() {
    return b(window, "hashchange").pipe(
      u(mo),
      q(mo()),
      v((e) => e.length > 0),
      J(1)
    );
  }
  function bo() {
    return Na().pipe(
      u((e) => fe(`[id="${e}"]`)),
      v((e) => typeof e != "undefined")
    );
  }
  function Ht(e) {
    let t = matchMedia(e);
    return sr((r) => t.addListener(() => r(t.matches))).pipe(q(t.matches));
  }
  function vo() {
    let e = matchMedia("print");
    return O(
      b(window, "beforeprint").pipe(u(() => !0)),
      b(window, "afterprint").pipe(u(() => !1))
    ).pipe(q(e.matches));
  }
  function Br(e, t) {
    return e.pipe(x((r) => (r ? t() : A)));
  }
  function hr(
    e,
    t = {
      credentials: "same-origin",
    }
  ) {
    return ce(fetch(`${e}`, t)).pipe(
      ue(() => A),
      x((r) => (r.status !== 200 ? At(() => new Error(r.statusText)) : H(r)))
    );
  }
  function Ve(e, t) {
    return hr(e, t).pipe(
      x((r) => r.json()),
      J(1)
    );
  }
  function go(e, t) {
    let r = new DOMParser();
    return hr(e, t).pipe(
      x((n) => n.text()),
      u((n) => r.parseFromString(n, "text/xml")),
      J(1)
    );
  }
  function br(e) {
    let t = T("script", {
      src: e,
    });
    return R(
      () => (
        document.head.appendChild(t),
        O(
          b(t, "load"),
          b(t, "error").pipe(
            x(() => At(() => new ReferenceError(`Invalid script: ${e}`)))
          )
        ).pipe(
          u(() => {}),
          C(() => document.head.removeChild(t)),
          we(1)
        )
      )
    );
  }
  function yo() {
    return {
      x: Math.max(0, scrollX),
      y: Math.max(0, scrollY),
    };
  }
  function xo() {
    return O(
      b(window, "scroll", {
        passive: !0,
      }),
      b(window, "resize", {
        passive: !0,
      })
    ).pipe(u(yo), q(yo()));
  }
  function Eo() {
    return {
      width: innerWidth,
      height: innerHeight,
    };
  }
  function wo() {
    return b(window, "resize", {
      passive: !0,
    }).pipe(u(Eo), q(Eo()));
  }
  function So() {
    return Q([xo(), wo()]).pipe(
      u(([e, t]) => ({
        offset: e,
        size: t,
      })),
      J(1)
    );
  }
  function vr(e, { viewport$: t, header$: r }) {
    let n = t.pipe(ee("size")),
      o = Q([n, r]).pipe(u(() => We(e)));
    return Q([r, t, o]).pipe(
      u(([{ height: i }, { offset: a, size: s }, { x: p, y: c }]) => ({
        offset: {
          x: a.x - p,
          y: a.y - c + i,
        },
        size: s,
      }))
    );
  }
  function qa(e) {
    return b(e, "message", (t) => t.data);
  }
  function Ka(e) {
    let t = new w();
    return t.subscribe((r) => e.postMessage(r)), t;
  }
  function To(e, t = new Worker(e)) {
    let r = qa(t),
      n = Ka(t),
      o = new w();
    o.subscribe(n);
    let i = n.pipe(te(), re(!0));
    return o.pipe(te(), Ae(r.pipe(j(i))), me());
  }
  var Ya = z("#__config"),
    wt = JSON.parse(Ya.textContent);
  wt.base = `${new URL(wt.base, Ce())}`;
  function he() {
    return wt;
  }
  function X(e) {
    return wt.features.includes(e);
  }
  function xe(e, t) {
    return typeof t != "undefined"
      ? wt.translations[e].replace("#", t.toString())
      : wt.translations[e];
  }
  function Te(e, t = document) {
    return z(`[data-md-component=${e}]`, t);
  }
  function ne(e, t = document) {
    return D(`[data-md-component=${e}]`, t);
  }
  function Qa(e) {
    let t = z(".md-typeset > :first-child", e);
    return b(t, "click", {
      once: !0,
    }).pipe(
      u(() => z(".md-typeset", e)),
      u((r) => ({
        hash: __md_hash(r.innerHTML),
      }))
    );
  }
  function Oo(e) {
    return !X("announce.dismiss") || !e.childElementCount
      ? A
      : R(() => {
          let t = new w();
          return (
            t
              .pipe(
                q({
                  hash: __md_get("__announce"),
                })
              )
              .subscribe(({ hash: r }) => {
                var n;
                r &&
                  r === ((n = __md_get("__announce")) != null ? n : r) &&
                  ((e.hidden = !0), __md_set("__announce", r));
              }),
            Qa(e).pipe(
              S((r) => t.next(r)),
              C(() => t.complete()),
              u((r) =>
                P(
                  {
                    ref: e,
                  },
                  r
                )
              )
            )
          );
        });
  }
  function Ba(e, { target$: t }) {
    return t.pipe(
      u((r) => ({
        hidden: r !== e,
      }))
    );
  }
  function _o(e, t) {
    let r = new w();
    return (
      r.subscribe(({ hidden: n }) => {
        e.hidden = n;
      }),
      Ba(e, t).pipe(
        S((n) => r.next(n)),
        C(() => r.complete()),
        u((n) =>
          P(
            {
              ref: e,
            },
            n
          )
        )
      )
    );
  }
  function Pt(e, t) {
    return t === "inline"
      ? T(
          "div",
          {
            class: "md-tooltip md-tooltip--inline",
            id: e,
            role: "tooltip",
          },
          T("div", {
            class: "md-tooltip__inner md-typeset",
          })
        )
      : T(
          "div",
          {
            class: "md-tooltip",
            id: e,
            role: "tooltip",
          },
          T("div", {
            class: "md-tooltip__inner md-typeset",
          })
        );
  }
  function Mo(e, t) {
    if (((t = t ? `${t}_annotation_${e}` : void 0), t)) {
      let r = t ? `#${t}` : void 0;
      return T(
        "aside",
        {
          class: "md-annotation",
          tabIndex: 0,
        },
        Pt(t),
        T(
          "a",
          {
            href: r,
            class: "md-annotation__index",
            tabIndex: -1,
          },
          T("span", {
            "data-md-annotation-id": e,
          })
        )
      );
    } else
      return T(
        "aside",
        {
          class: "md-annotation",
          tabIndex: 0,
        },
        Pt(t),
        T(
          "span",
          {
            class: "md-annotation__index",
            tabIndex: -1,
          },
          T("span", {
            "data-md-annotation-id": e,
          })
        )
      );
  }
  function Lo(e) {
    return T("button", {
      class: "md-clipboard md-icon",
      title: xe("clipboard.copy"),
      "data-clipboard-target": `#${e} > code`,
    });
  }
  function Gr(e, t) {
    let r = t & 2,
      n = t & 1,
      o = Object.keys(e.terms)
        .filter((p) => !e.terms[p])
        .reduce((p, c) => [...p, T("del", null, c), " "], [])
        .slice(0, -1),
      i = he(),
      a = new URL(e.location, i.base);
    X("search.highlight") &&
      a.searchParams.set(
        "h",
        Object.entries(e.terms)
          .filter(([, p]) => p)
          .reduce((p, [c]) => `${p} ${c}`.trim(), "")
      );
    let { tags: s } = he();
    return T(
      "a",
      {
        href: `${a}`,
        class: "md-search-result__link",
        tabIndex: -1,
      },
      T(
        "article",
        {
          class: "md-search-result__article md-typeset",
          "data-md-score": e.score.toFixed(2),
        },
        r > 0 &&
          T("div", {
            class: "md-search-result__icon md-icon",
          }),
        r > 0 && T("h1", null, e.title),
        r <= 0 && T("h2", null, e.title),
        n > 0 && e.text.length > 0 && e.text,
        e.tags &&
          e.tags.map((p) => {
            let c = s
              ? p in s
                ? `md-tag-icon md-tag-icon--${s[p]}`
                : "md-tag-icon"
              : "";
            return T(
              "span",
              {
                class: `md-tag ${c}`,
              },
              p
            );
          }),
        n > 0 &&
          o.length > 0 &&
          T(
            "p",
            {
              class: "md-search-result__terms",
            },
            xe("search.result.term.missing"),
            ": ",
            ...o
          )
      )
    );
  }
  function Ao(e) {
    let t = e[0].score,
      r = [...e],
      n = he(),
      o = r.findIndex((f) => !`${new URL(f.location, n.base)}`.includes("#")),
      [i] = r.splice(o, 1),
      a = r.findIndex((f) => f.score < t);
    a === -1 && (a = r.length);
    let s = r.slice(0, a),
      p = r.slice(a),
      c = [
        Gr(i, 2 | +(!o && a === 0)),
        ...s.map((f) => Gr(f, 1)),
        ...(p.length
          ? [
              T(
                "details",
                {
                  class: "md-search-result__more",
                },
                T(
                  "summary",
                  {
                    tabIndex: -1,
                  },
                  T(
                    "div",
                    null,
                    p.length > 0 && p.length === 1
                      ? xe("search.result.more.one")
                      : xe("search.result.more.other", p.length)
                  )
                ),
                ...p.map((f) => Gr(f, 1))
              ),
            ]
          : []),
      ];
    return T(
      "li",
      {
        class: "md-search-result__item",
      },
      c
    );
  }
  function Co(e) {
    return T(
      "ul",
      {
        class: "md-source__facts",
      },
    );
  }
  function Jr(e) {
    let t = `tabbed-control tabbed-control--${e}`;
    return T(
      "div",
      {
        class: t,
        hidden: !0,
      },
      T("button", {
        class: "tabbed-button",
        tabIndex: -1,
        "aria-hidden": "true",
      })
    );
  }
  function ko(e) {
    return T(
      "div",
      {
        class: "md-typeset__scrollwrap",
      },
      T(
        "div",
        {
          class: "md-typeset__table",
        },
        e
      )
    );
  }
  function Ga(e) {
    let t = he(),
      r = new URL(`../${e.version}/`, t.base);
    return T(
      "li",
      {
        class: "md-version__item",
      },
      T(
        "a",
        {
          href: `${r}`,
          class: "md-version__link",
        },
        e.title
      )
    );
  }
  function Ro(e, t) {
    return T(
      "div",
      {
        class: "md-version",
      },
      T(
        "button",
        {
          class: "md-version__current",
          "aria-label": xe("select.version"),
        },
        t.title
      ),
      T(
        "ul",
        {
          class: "md-version__list",
        },
        e.map(Ga)
      )
    );
  }
  var Ja = 0;
  function Xa(e, t) {
    document.body.append(e);
    let { width: r } = le(e);
    e.style.setProperty("--md-tooltip-width", `${r}px`), e.remove();
    let n = xt(t),
      o =
        typeof n != "undefined"
          ? et(n)
          : H({
              x: 0,
              y: 0,
            }),
      i = O(vt(t), Jn(t)).pipe(G());
    return Q([i, o]).pipe(
      u(([a, s]) => {
        let { x: p, y: c } = We(t),
          f = le(t),
          l = t.closest("table");
        return (
          l &&
            t.parentElement &&
            ((p += l.offsetLeft + t.parentElement.offsetLeft),
            (c += l.offsetTop + t.parentElement.offsetTop)),
          {
            active: a,
            offset: {
              x: p - s.x + f.width / 2 - r / 2,
              y: c - s.y + f.height + 8,
            },
          }
        );
      })
    );
  }
  function Qe(e) {
    let t = e.title;
    if (!t.length) return A;
    let r = `__tooltip_${Ja++}`,
      n = Pt(r, "inline"),
      o = z(".md-typeset", n);
    return (
      (o.innerHTML = t),
      R(() => {
        let i = new w();
        return (
          i.subscribe({
            next({ offset: a }) {
              n.style.setProperty("--md-tooltip-x", `${a.x}px`),
                n.style.setProperty("--md-tooltip-y", `${a.y}px`);
            },
            complete() {
              n.style.removeProperty("--md-tooltip-x"),
                n.style.removeProperty("--md-tooltip-y");
            },
          }),
          O(
            i.pipe(v(({ active: a }) => a)),
            i.pipe(
              ye(250),
              v(({ active: a }) => !a)
            )
          ).subscribe({
            next({ active: a }) {
              a
                ? (e.insertAdjacentElement("afterend", n),
                  e.setAttribute("aria-describedby", r),
                  e.removeAttribute("title"))
                : (n.remove(),
                  e.removeAttribute("aria-describedby"),
                  e.setAttribute("title", t));
            },
            complete() {
              n.remove(),
                e.removeAttribute("aria-describedby"),
                e.setAttribute("title", t);
            },
          }),
          i.pipe(Oe(16, ge)).subscribe(({ active: a }) => {
            n.classList.toggle("md-tooltip--active", a);
          }),
          i
            .pipe(
              Rt(125, ge),
              v(() => !!e.offsetParent),
              u(() => e.offsetParent.getBoundingClientRect()),
              u(({ x: a }) => a)
            )
            .subscribe({
              next(a) {
                a
                  ? n.style.setProperty("--md-tooltip-0", `${-a}px`)
                  : n.style.removeProperty("--md-tooltip-0");
              },
              complete() {
                n.style.removeProperty("--md-tooltip-0");
              },
            }),
          Xa(n, e).pipe(
            S((a) => i.next(a)),
            C(() => i.complete()),
            u((a) =>
              P(
                {
                  ref: e,
                },
                a
              )
            )
          )
        );
      }).pipe(qe(ae))
    );
  }
  function Za(e, t) {
    let r = R(() => Q([Xn(e), et(t)])).pipe(
      u(([{ x: n, y: o }, i]) => {
        let { width: a, height: s } = le(e);
        return {
          x: n - i.x + a / 2,
          y: o - i.y + s / 2,
        };
      })
    );
    return vt(e).pipe(
      x((n) =>
        r.pipe(
          u((o) => ({
            active: n,
            offset: o,
          })),
          we(+!n || 1 / 0)
        )
      )
    );
  }
  function Ho(e, t, { target$: r }) {
    let [n, o] = Array.from(e.children);
    return R(() => {
      let i = new w(),
        a = i.pipe(te(), re(!0));
      return (
        i.subscribe({
          next({ offset: s }) {
            e.style.setProperty("--md-tooltip-x", `${s.x}px`),
              e.style.setProperty("--md-tooltip-y", `${s.y}px`);
          },
          complete() {
            e.style.removeProperty("--md-tooltip-x"),
              e.style.removeProperty("--md-tooltip-y");
          },
        }),
        Et(e)
          .pipe(j(a))
          .subscribe((s) => {
            e.toggleAttribute("data-md-visible", s);
          }),
        O(
          i.pipe(v(({ active: s }) => s)),
          i.pipe(
            ye(250),
            v(({ active: s }) => !s)
          )
        ).subscribe({
          next({ active: s }) {
            s ? e.prepend(n) : n.remove();
          },
          complete() {
            e.prepend(n);
          },
        }),
        i.pipe(Oe(16, ge)).subscribe(({ active: s }) => {
          n.classList.toggle("md-tooltip--active", s);
        }),
        i
          .pipe(
            Rt(125, ge),
            v(() => !!e.offsetParent),
            u(() => e.offsetParent.getBoundingClientRect()),
            u(({ x: s }) => s)
          )
          .subscribe({
            next(s) {
              s
                ? e.style.setProperty("--md-tooltip-0", `${-s}px`)
                : e.style.removeProperty("--md-tooltip-0");
            },
            complete() {
              e.style.removeProperty("--md-tooltip-0");
            },
          }),
        b(o, "click")
          .pipe(
            j(a),
            v((s) => !(s.metaKey || s.ctrlKey))
          )
          .subscribe((s) => s.preventDefault()),
        b(o, "mousedown")
          .pipe(j(a), pe(i))
          .subscribe(([s, { active: p }]) => {
            var c;
            if (s.button !== 0 || s.metaKey || s.ctrlKey) s.preventDefault();
            else if (p) {
              s.preventDefault();
              let f = e.parentElement.closest(".md-annotation");
              f instanceof HTMLElement
                ? f.focus()
                : (c = Fe()) == null || c.blur();
            }
          }),
        r
          .pipe(
            j(a),
            v((s) => s === n),
            Ke(125)
          )
          .subscribe(() => e.focus()),
        Za(e, t).pipe(
          S((s) => i.next(s)),
          C(() => i.complete()),
          u((s) =>
            P(
              {
                ref: e,
              },
              s
            )
          )
        )
      );
    });
  }
  function es(e) {
    let t = [];
    for (let r of e.tagName === "CODE" ? D(".c, .c1, .cm", e) : [e]) {
      let n = [],
        o = document.createNodeIterator(r, NodeFilter.SHOW_TEXT);
      for (let i = o.nextNode(); i; i = o.nextNode()) n.push(i);
      for (let i of n) {
        let a;
        for (; (a = /(\(\d+\))(!)?/.exec(i.textContent)); ) {
          let [, s, p] = a;
          if (typeof p == "undefined") {
            let c = i.splitText(a.index);
            (i = c.splitText(s.length)), t.push(c);
          } else {
            (i.textContent = s), t.push(i);
            break;
          }
        }
      }
    }
    return t;
  }
  function Po(e, t) {
    t.append(...Array.from(e.childNodes));
  }
  function gr(e, t, { target$: r, print$: n }) {
    let o = t.closest("[id]"),
      i = o == null ? void 0 : o.id,
      a = new Map();
    for (let s of es(t)) {
      let [, p] = s.textContent.match(/\((\d+)\)/);
      fe(`li:nth-child(${p})`, e) &&
        (a.set(p, Mo(p, i)), s.replaceWith(a.get(p)));
    }
    return a.size === 0
      ? A
      : R(() => {
          let s = new w(),
            p = [];
          for (let [c, f] of a)
            p.push([z(".md-typeset", f), z(`li:nth-child(${c})`, e)]);
          return (
            n.pipe(j(s.pipe(te(), re(!0)))).subscribe((c) => {
              e.hidden = !c;
              for (let [f, l] of p) c ? Po(f, l) : Po(l, f);
            }),
            O(
              ...[...a].map(([, c]) =>
                Ho(c, t, {
                  target$: r,
                })
              )
            ).pipe(
              C(() => s.complete()),
              me()
            )
          );
        });
  }
  function $o(e) {
    if (e.nextElementSibling) {
      let t = e.nextElementSibling;
      if (t.tagName === "OL") return t;
      if (t.tagName === "P" && !t.children.length) return $o(t);
    }
  }
  function Io(e, t) {
    return R(() => {
      let r = $o(e);
      return typeof r != "undefined" ? gr(r, e, t) : A;
    });
  }
  var jo = Tt(Zr());
  var ts = 0;
  function Uo(e) {
    if (e.nextElementSibling) {
      let t = e.nextElementSibling;
      if (t.tagName === "OL") return t;
      if (t.tagName === "P" && !t.children.length) return Uo(t);
    }
  }
  function Fo(e) {
    return Se(e).pipe(
      u(({ width: t }) => ({
        scrollable: yt(e).width > t,
      })),
      ee("scrollable")
    );
  }
  function Wo(e, t) {
    let { matches: r } = matchMedia("(hover)"),
      n = R(() => {
        let o = new w(),
          i = o.pipe(Vr(1));
        o.subscribe(({ scrollable: p }) => {
          p && r
            ? e.setAttribute("tabindex", "0")
            : e.removeAttribute("tabindex");
        });
        let a = A;
        if (
          jo.default.isSupported() &&
          (e.closest(".copy") ||
            (X("content.code.copy") && !e.closest(".no-copy")))
        ) {
          let p = e.closest("pre");
          p.id = `__code_${++ts}`;
          let c = Lo(p.id);
          p.insertBefore(c, e), X("content.tooltips") && (a = Qe(c));
        }
        let s = e.closest(".highlight");
        if (s instanceof HTMLElement) {
          let p = Uo(s);
          if (
            typeof p != "undefined" &&
            (s.classList.contains("annotate") || X("content.code.annotate"))
          ) {
            let c = gr(p, e, t);
            return Fo(e).pipe(
              S((f) => o.next(f)),
              C(() => o.complete()),
              u((f) =>
                P(
                  {
                    ref: e,
                  },
                  f
                )
              ),
              Ae(
                a,
                Se(s).pipe(
                  j(i),
                  u(({ width: f, height: l }) => f && l),
                  G(),
                  x((f) => (f ? c : A))
                )
              )
            );
          }
        }
        return Fo(e).pipe(
          S((p) => o.next(p)),
          C(() => o.complete()),
          u((p) =>
            P(
              {
                ref: e,
              },
              p
            )
          ),
          Ae(a)
        );
      });
    return X("content.lazy")
      ? Et(e).pipe(
          v((o) => o),
          we(1),
          x(() => n)
        )
      : n;
  }
  var Do =
    ".node circle,.node ellipse,.node path,.node polygon,.node rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}marker{fill:var(--md-mermaid-edge-color)!important}.edgeLabel .label rect{fill:#0000}.label{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.label foreignObject{line-height:normal;overflow:visible}.label div .edgeLabel{color:var(--md-mermaid-label-fg-color)}.edgeLabel,.edgeLabel rect,.label div .edgeLabel{background-color:var(--md-mermaid-label-bg-color)}.edgeLabel,.edgeLabel rect{fill:var(--md-mermaid-label-bg-color);color:var(--md-mermaid-edge-color)}.edgePath .path,.flowchart-link{stroke:var(--md-mermaid-edge-color)}.edgePath .arrowheadPath{fill:var(--md-mermaid-edge-color);stroke:none}.cluster rect{fill:var(--md-default-fg-color--lightest);stroke:var(--md-default-fg-color--lighter)}.cluster span{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}defs #flowchart-circleEnd,defs #flowchart-circleStart,defs #flowchart-crossEnd,defs #flowchart-crossStart,defs #flowchart-pointEnd,defs #flowchart-pointStart{stroke:none}g.classGroup line,g.classGroup rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}g.classGroup text{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.classLabel .box{fill:var(--md-mermaid-label-bg-color);background-color:var(--md-mermaid-label-bg-color);opacity:1}.classLabel .label{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.node .divider{stroke:var(--md-mermaid-node-fg-color)}.relation{stroke:var(--md-mermaid-edge-color)}.cardinality{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.cardinality text{fill:inherit!important}defs #classDiagram-compositionEnd,defs #classDiagram-compositionStart,defs #classDiagram-dependencyEnd,defs #classDiagram-dependencyStart,defs #classDiagram-extensionEnd,defs #classDiagram-extensionStart{fill:var(--md-mermaid-edge-color)!important;stroke:var(--md-mermaid-edge-color)!important}defs #classDiagram-aggregationEnd,defs #classDiagram-aggregationStart{fill:var(--md-mermaid-label-bg-color)!important;stroke:var(--md-mermaid-edge-color)!important}g.stateGroup rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}g.stateGroup .state-title{fill:var(--md-mermaid-label-fg-color)!important;font-family:var(--md-mermaid-font-family)}g.stateGroup .composit{fill:var(--md-mermaid-label-bg-color)}.nodeLabel{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.node circle.state-end,.node circle.state-start,.start-state{fill:var(--md-mermaid-edge-color);stroke:none}.end-state-inner,.end-state-outer{fill:var(--md-mermaid-edge-color)}.end-state-inner,.node circle.state-end{stroke:var(--md-mermaid-label-bg-color)}.transition{stroke:var(--md-mermaid-edge-color)}[id^=state-fork] rect,[id^=state-join] rect{fill:var(--md-mermaid-edge-color)!important;stroke:none!important}.statediagram-cluster.statediagram-cluster .inner{fill:var(--md-default-bg-color)}.statediagram-cluster rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}.statediagram-state rect.divider{fill:var(--md-default-fg-color--lightest);stroke:var(--md-default-fg-color--lighter)}defs #statediagram-barbEnd{stroke:var(--md-mermaid-edge-color)}.attributeBoxEven,.attributeBoxOdd{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}.entityBox{fill:var(--md-mermaid-label-bg-color);stroke:var(--md-mermaid-node-fg-color)}.entityLabel{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.relationshipLabelBox{fill:var(--md-mermaid-label-bg-color);fill-opacity:1;background-color:var(--md-mermaid-label-bg-color);opacity:1}.relationshipLabel{fill:var(--md-mermaid-label-fg-color)}.relationshipLine{stroke:var(--md-mermaid-edge-color)}defs #ONE_OR_MORE_END *,defs #ONE_OR_MORE_START *,defs #ONLY_ONE_END *,defs #ONLY_ONE_START *,defs #ZERO_OR_MORE_END *,defs #ZERO_OR_MORE_START *,defs #ZERO_OR_ONE_END *,defs #ZERO_OR_ONE_START *{stroke:var(--md-mermaid-edge-color)!important}.actor,defs #ZERO_OR_MORE_END circle,defs #ZERO_OR_MORE_START circle{fill:var(--md-mermaid-label-bg-color)}.actor{stroke:var(--md-mermaid-node-fg-color)}text.actor>tspan{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}line{stroke:var(--md-default-fg-color--lighter)}.messageLine0,.messageLine1{stroke:var(--md-mermaid-edge-color)}.loopText,.loopText>tspan,.messageText,.noteText>tspan{fill:var(--md-mermaid-edge-color);stroke:none;font-family:var(--md-mermaid-font-family)!important}.noteText>tspan{fill:#000}#arrowhead path{fill:var(--md-mermaid-edge-color);stroke:none}.loopLine{stroke:var(--md-mermaid-node-fg-color)}.labelBox,.loopLine{fill:var(--md-mermaid-node-bg-color)}.labelBox{stroke:none}.labelText,.labelText>span{fill:var(--md-mermaid-node-fg-color);font-family:var(--md-mermaid-font-family)}.sequenceNumber{fill:var(--md-accent-bg-color)}defs #sequencenumber{fill:var(--md-mermaid-node-fg-color)!important}";
  var en,
    ns = 0;
  function os() {
    return typeof mermaid == "undefined" || mermaid instanceof Element
      ? br("https://unpkg.com/mermaid@9.3.0/dist/mermaid.min.js")
      : H(void 0);
  }
  function Vo(e) {
    return (
      e.classList.remove("mermaid"),
      en ||
        (en = os().pipe(
          S(() =>
            mermaid.initialize({
              startOnLoad: !1,
              themeCSS: Do,
              sequence: {
                actorFontSize: "16px",
                messageFontSize: "16px",
                noteFontSize: "16px",
              },
            })
          ),
          u(() => {}),
          J(1)
        )),
      en.subscribe(() => {
        e.classList.add("mermaid");
        let t = `__mermaid_${ns++}`,
          r = T("div", {
            class: "mermaid",
          }),
          n = e.textContent;
        mermaid.mermaidAPI.render(t, n, (o, i) => {
          let a = r.attachShadow({
            mode: "closed",
          });
          (a.innerHTML = o), e.replaceWith(r), i == null || i(a);
        });
      }),
      en.pipe(
        u(() => ({
          ref: e,
        }))
      )
    );
  }
  function is(e, { target$: t, print$: r }) {
    let n = !0;
    return O(
      t.pipe(
        u((o) => o.closest("details:not([open])")),
        v((o) => e === o),
        u(() => ({
          action: "open",
          reveal: !0,
        }))
      ),
      r.pipe(
        v((o) => o || !n),
        S(() => (n = e.open)),
        u((o) => ({
          action: o ? "open" : "close",
        }))
      )
    );
  }
  function zo(e, t) {
    return R(() => {
      let r = new w();
      return (
        r.subscribe(({ action: n, reveal: o }) => {
          e.toggleAttribute("open", n === "open"), o && e.scrollIntoView();
        }),
        is(e, t).pipe(
          S((n) => r.next(n)),
          C(() => r.complete()),
          u((n) =>
            P(
              {
                ref: e,
              },
              n
            )
          )
        )
      );
    });
  }
  var No = T("table");
  function qo(e) {
    return (
      e.replaceWith(No),
      No.replaceWith(ko(e)),
      H({
        ref: e,
      })
    );
  }
  function as(e) {
    let t = e.find((r) => r.checked) || e[0];
    return O(
      ...e.map((r) => b(r, "change").pipe(u(() => z(`label[for="${r.id}"]`))))
    ).pipe(
      q(z(`label[for="${t.id}"]`)),
      u((r) => ({
        active: r,
      }))
    );
  }
  function Ko(e, { viewport$: t, target$: r }) {
    let n = z(".tabbed-labels", e),
      o = D(":scope > input", e),
      i = Jr("prev");
    e.append(i);
    let a = Jr("next");
    return (
      e.append(a),
      R(() => {
        let s = new w(),
          p = s.pipe(te(), re(!0));
        Q([s, Se(e)])
          .pipe(j(p), Oe(1, ge))
          .subscribe({
            next([{ active: c }, f]) {
              let l = We(c),
                { width: m } = le(c);
              e.style.setProperty("--md-indicator-x", `${l.x}px`),
                e.style.setProperty("--md-indicator-width", `${m}px`);
              let d = pr(n);
              (l.x < d.x || l.x + m > d.x + f.width) &&
                n.scrollTo({
                  left: Math.max(0, l.x - 16),
                  behavior: "smooth",
                });
            },
            complete() {
              e.style.removeProperty("--md-indicator-x"),
                e.style.removeProperty("--md-indicator-width");
            },
          }),
          Q([et(n), Se(n)])
            .pipe(j(p))
            .subscribe(([c, f]) => {
              let l = yt(n);
              (i.hidden = c.x < 16), (a.hidden = c.x > l.width - f.width - 16);
            }),
          O(b(i, "click").pipe(u(() => -1)), b(a, "click").pipe(u(() => 1)))
            .pipe(j(p))
            .subscribe((c) => {
              let { width: f } = le(n);
              n.scrollBy({
                left: f * c,
                behavior: "smooth",
              });
            }),
          r
            .pipe(
              j(p),
              v((c) => o.includes(c))
            )
            .subscribe((c) => c.click()),
          n.classList.add("tabbed-labels--linked");
        for (let c of o) {
          let f = z(`label[for="${c.id}"]`);
          f.replaceChildren(
            T(
              "a",
              {
                href: `#${f.htmlFor}`,
                tabIndex: -1,
              },
              ...Array.from(f.childNodes)
            )
          ),
            b(f.firstElementChild, "click")
              .pipe(
                j(p),
                v((l) => !(l.metaKey || l.ctrlKey)),
                S((l) => l.preventDefault())
              )
              .subscribe(() => {
                history.replaceState({}, "", `#${f.htmlFor}`), f.click();
              });
        }
        return (
          X("content.tabs.link") &&
            s.pipe(de(1), pe(t)).subscribe(([{ active: c }, { offset: f }]) => {
              let l = c.innerText.trim();
              if (c.hasAttribute("data-md-switching"))
                c.removeAttribute("data-md-switching");
              else {
                let m = e.offsetTop - f.y;
                for (let h of D("[data-tabs]"))
                  for (let g of D(":scope > input", h)) {
                    let B = z(`label[for="${g.id}"]`);
                    if (B !== c && B.innerText.trim() === l) {
                      B.setAttribute("data-md-switching", ""), g.click();
                      break;
                    }
                  }
                window.scrollTo({
                  top: e.offsetTop - m,
                });
                let d = __md_get("__tabs") || [];
                __md_set("__tabs", [...new Set([l, ...d])]);
              }
            }),
          as(o).pipe(
            S((c) => s.next(c)),
            C(() => s.complete()),
            u((c) =>
              P(
                {
                  ref: e,
                },
                c
              )
            )
          )
        );
      }).pipe(qe(ae))
    );
  }
  function Yo(e, { viewport$: t, target$: r, print$: n }) {
    return O(
      ...D(".annotate:not(.highlight)", e).map((o) =>
        Io(o, {
          target$: r,
          print$: n,
        })
      ),
      ...D("pre:not(.mermaid) > code", e).map((o) =>
        Wo(o, {
          target$: r,
          print$: n,
        })
      ),
      ...D("pre.mermaid", e).map((o) => Vo(o)),
      ...D("table:not([class])", e).map((o) => qo(o)),
      ...D("details", e).map((o) =>
        zo(o, {
          target$: r,
          print$: n,
        })
      ),
      ...D("[data-tabs]", e).map((o) =>
        Ko(o, {
          viewport$: t,
          target$: r,
        })
      ),
      ...D("[title]", e)
        .filter(() => X("content.tooltips"))
        .map((o) => Qe(o))
    );
  }
  function ss(e, { alert$: t }) {
    return t.pipe(
      x((r) =>
        O(H(!0), H(!1).pipe(Ke(2e3))).pipe(
          u((n) => ({
            message: r,
            active: n,
          }))
        )
      )
    );
  }
  function Qo(e, t) {
    let r = z(".md-typeset", e);
    return R(() => {
      let n = new w();
      return (
        n.subscribe(({ message: o, active: i }) => {
          e.classList.toggle("md-dialog--active", i), (r.textContent = o);
        }),
        ss(e, t).pipe(
          S((o) => n.next(o)),
          C(() => n.complete()),
          u((o) =>
            P(
              {
                ref: e,
              },
              o
            )
          )
        )
      );
    });
  }
  function cs({ viewport$: e }) {
    if (!X("header.autohide")) return H(!1);
    let t = e.pipe(
        u(({ offset: { y: o } }) => o),
        Pe(2, 1),
        u(([o, i]) => [o < i, i]),
        ee(0)
      ),
      r = Q([e, t]).pipe(
        v(([{ offset: o }, [, i]]) => Math.abs(i - o.y) > 100),
        u(([, [o]]) => o),
        G()
      ),
      n = De("search");
    return Q([e, n]).pipe(
      u(([{ offset: o }, i]) => o.y > 400 && !i),
      G(),
      x((o) => (o ? r : H(!1))),
      q(!1)
    );
  }
  function Bo(e, t) {
    return R(() => Q([Se(e), cs(t)])).pipe(
      u(([{ height: r }, n]) => ({
        height: r,
        hidden: n,
      })),
      G((r, n) => r.height === n.height && r.hidden === n.hidden),
      J(1)
    );
  }
  function Go(e, { header$: t, main$: r }) {
    return R(() => {
      let n = new w(),
        o = n.pipe(te(), re(!0));
      n.pipe(ee("active"), Ze(t)).subscribe(
        ([{ active: a }, { hidden: s }]) => {
          e.classList.toggle("md-header--shadow", a && !s), (e.hidden = s);
        }
      );
      let i = ce(D("[title]", e)).pipe(
        v(() => X("content.tooltips")),
        Z((a) => Qe(a))
      );
      return (
        r.subscribe(n),
        t.pipe(
          j(o),
          u((a) =>
            P(
              {
                ref: e,
              },
              a
            )
          ),
          Ae(i.pipe(j(o)))
        )
      );
    });
  }
  function ps(e, { viewport$: t, header$: r }) {
    return vr(e, {
      viewport$: t,
      header$: r,
    }).pipe(
      u(({ offset: { y: n } }) => {
        let { height: o } = le(e);
        return {
          active: n >= o,
        };
      }),
      ee("active")
    );
  }
  function Jo(e, t) {
    return R(() => {
      let r = new w();
      r.subscribe({
        next({ active: o }) {
          e.classList.toggle("md-header__title--active", o);
        },
        complete() {
          e.classList.remove("md-header__title--active");
        },
      });
      let n = fe(".md-content h1");
      return typeof n == "undefined"
        ? A
        : ps(n, t).pipe(
            S((o) => r.next(o)),
            C(() => r.complete()),
            u((o) =>
              P(
                {
                  ref: e,
                },
                o
              )
            )
          );
    });
  }
  function Xo(e, { viewport$: t, header$: r }) {
    let n = r.pipe(
        u(({ height: i }) => i),
        G()
      ),
      o = n.pipe(
        x(() =>
          Se(e).pipe(
            u(({ height: i }) => ({
              top: e.offsetTop,
              bottom: e.offsetTop + i,
            })),
            ee("bottom")
          )
        )
      );
    return Q([n, o, t]).pipe(
      u(
        ([
          i,
          { top: a, bottom: s },
          {
            offset: { y: p },
            size: { height: c },
          },
        ]) => (
          (c = Math.max(0, c - Math.max(0, a - p, i) - Math.max(0, c + p - s))),
          {
            offset: a - i,
            height: c,
            active: a - i <= p,
          }
        )
      ),
      G(
        (i, a) =>
          i.offset === a.offset &&
          i.height === a.height &&
          i.active === a.active
      )
    );
  }
  function fs(e) {
    let t = __md_get("__palette") || {
      index: e.findIndex(
        (r) => matchMedia(r.getAttribute("data-md-color-media")).matches
      ),
    };
    return H(...e).pipe(
      Z((r) => b(r, "change").pipe(u(() => r))),
      q(e[Math.max(0, t.index)]),
      u((r) => ({
        index: e.indexOf(r),
        color: {
          media: r.getAttribute("data-md-color-media"),
          scheme: r.getAttribute("data-md-color-scheme"),
          primary: r.getAttribute("data-md-color-primary"),
          accent: r.getAttribute("data-md-color-accent"),
        },
      })),
      J(1)
    );
  }
  function Zo(e) {
    let t = D("input", e),
      r = T("meta", {
        name: "theme-color",
      });
    document.head.appendChild(r);
    let n = Ht("(prefers-color-scheme: light)");
    return R(() => {
      let o = new w();
      return (
        o.subscribe((i) => {
          if (
            (document.body.setAttribute("data-md-color-switching", ""),
            i.color.media === "(prefers-color-scheme)")
          ) {
            let a = matchMedia("(prefers-color-scheme: light)"),
              s = document.querySelector(
                a.matches
                  ? "[data-md-color-media='(prefers-color-scheme: light)']"
                  : "[data-md-color-media='(prefers-color-scheme: dark)']"
              );
            (i.color.scheme = s.getAttribute("data-md-color-scheme")),
              (i.color.primary = s.getAttribute("data-md-color-primary")),
              (i.color.accent = s.getAttribute("data-md-color-accent"));
          }
          for (let [a, s] of Object.entries(i.color))
            document.body.setAttribute(`data-md-color-${a}`, s);
          for (let a = 0; a < t.length; a++) {
            let s = t[a].nextElementSibling;
            s instanceof HTMLElement && (s.hidden = i.index !== a);
          }
          __md_set("__palette", i);
        }),
        o
          .pipe(
            u(() => {
              let i = Te("header"),
                { backgroundColor: a } = window.getComputedStyle(i);
              return a
                .match(/\d+/g)
                .map((s) => (+s).toString(16).padStart(2, "0"))
                .join("");
            })
          )
          .subscribe((i) => (r.content = `#${i}`)),
        o.pipe(He(ae)).subscribe(() => {
          document.body.removeAttribute("data-md-color-switching");
        }),
        fs(t).pipe(
          j(n.pipe(de(1))),
          st(),
          S((i) => o.next(i)),
          C(() => o.complete()),
          u((i) =>
            P(
              {
                ref: e,
              },
              i
            )
          )
        )
      );
    });
  }
  var tn = Tt(Zr());
  function ls(e) {
    e.setAttribute("data-md-copying", "");
    let t = e.innerText;
    return e.removeAttribute("data-md-copying"), t;
  }
  function ei({ alert$: e }) {
    tn.default.isSupported() &&
      new W((t) => {
        new tn.default("[data-clipboard-target], [data-clipboard-text]", {
          text: (r) =>
            r.getAttribute("data-clipboard-text") ||
            ls(z(r.getAttribute("data-clipboard-target"))),
        }).on("success", (r) => t.next(r));
      })
        .pipe(
          S((t) => {
            t.trigger.focus();
          }),
          u(() => xe("clipboard.copied"))
        )
        .subscribe(e);
  }
  function us(e) {
    if (e.length < 2) return [""];
    let [t, r] = [...e]
        .sort((o, i) => o.length - i.length)
        .map((o) => o.replace(/[^/]+$/, "")),
      n = 0;
    if (t === r) n = t.length;
    else for (; t.charCodeAt(n) === r.charCodeAt(n); ) n++;
    return e.map((o) => o.replace(t.slice(0, n), ""));
  }
  function yr(e) {
    let t = __md_get("__sitemap", sessionStorage, e);
    if (t) return H(t);
    {
      let r = he();
      return go(new URL("sitemap.xml", e || r.base)).pipe(
        u((n) => us(D("loc", n).map((o) => o.textContent))),
        ue(() => A),
        $e([]),
        S((n) => __md_set("__sitemap", n, sessionStorage, e))
      );
    }
  }
  function ti({ document$: e, location$: t, viewport$: r }) {
    let n = he();
    if (location.protocol === "file:") return;
    "scrollRestoration" in history &&
      ((history.scrollRestoration = "manual"),
      b(window, "beforeunload").subscribe(() => {
        history.scrollRestoration = "auto";
      }));
    let o = fe("link[rel=icon]");
    typeof o != "undefined" && (o.href = o.href);
    let i = yr().pipe(
        u((c) => c.map((f) => `${new URL(f, n.base)}`)),
        x((c) =>
          b(document.body, "click").pipe(
            v((f) => !f.metaKey && !f.ctrlKey),
            x((f) => {
              if (f.target instanceof Element) {
                let l = f.target.closest("a");
                if (l && !l.target) {
                  let m = new URL(l.href);
                  if (
                    ((m.search = ""),
                    (m.hash = ""),
                    m.pathname !== location.pathname &&
                      c.includes(m.toString()))
                  )
                    return (
                      f.preventDefault(),
                      H({
                        url: new URL(l.href),
                      })
                    );
                }
              }
              return Le;
            })
          )
        ),
        me()
      ),
      a = b(window, "popstate").pipe(
        v((c) => c.state !== null),
        u((c) => ({
          url: new URL(location.href),
          offset: c.state,
        })),
        me()
      );
    O(i, a)
      .pipe(
        G((c, f) => c.url.href === f.url.href),
        u(({ url: c }) => c)
      )
      .subscribe(t);
    let s = t.pipe(
      ee("pathname"),
      x((c) => hr(c.href).pipe(ue(() => (ct(c), Le)))),
      me()
    );
    i.pipe(cr(s)).subscribe(({ url: c }) => {
      history.pushState({}, "", `${c}`);
    });
    let p = new DOMParser();
    s
      .pipe(
        x((c) => c.text()),
        u((c) => p.parseFromString(c, "text/html"))
      )
      .subscribe(e),
      e.pipe(de(1)).subscribe((c) => {
        for (let f of [
          "title",
          "link[rel=canonical]",
          "meta[name=author]",
          "meta[name=description]",
          "[data-md-component=announce]",
          "[data-md-component=container]",
          "[data-md-component=header-topic]",
          "[data-md-component=outdated]",
          "[data-md-component=logo]",
          "[data-md-component=skip]",
          ...(X("navigation.tabs.sticky") ? ["[data-md-component=tabs]"] : []),
        ]) {
          let l = fe(f),
            m = fe(f, c);
          typeof l != "undefined" &&
            typeof m != "undefined" &&
            l.replaceWith(m);
        }
      }),
      e
        .pipe(
          de(1),
          u(() => Te("container")),
          x((c) => D("script", c)),
          Wr((c) => {
            let f = T("script");
            if (c.src) {
              for (let l of c.getAttributeNames())
                f.setAttribute(l, c.getAttribute(l));
              return (
                c.replaceWith(f),
                new W((l) => {
                  f.onload = () => l.complete();
                })
              );
            } else return (f.textContent = c.textContent), c.replaceWith(f), A;
          })
        )
        .subscribe(),
      O(i, a)
        .pipe(cr(e))
        .subscribe(({ url: c, offset: f }) => {
          c.hash && !f
            ? ho(c.hash)
            : window.scrollTo(0, (f == null ? void 0 : f.y) || 0);
        }),
      r.pipe(kt(i), ye(250), ee("offset")).subscribe(({ offset: c }) => {
        history.replaceState(c, "");
      }),
      O(i, a)
        .pipe(
          Pe(2, 1),
          v(([c, f]) => c.url.pathname === f.url.pathname),
          u(([, c]) => c)
        )
        .subscribe(({ offset: c }) => {
          window.scrollTo(0, (c == null ? void 0 : c.y) || 0);
        });
  }
  var oi = Tt(ni());
  function ii(e) {
    let t = e.separator
        .split("|")
        .map((o) =>
          o.replace(/(\(\?[!=][^)]+\))/g, "").length === 0 ? "\uFFFD" : o
        )
        .join("|"),
      r = new RegExp(t, "img"),
      n = (o, i, a) => `${i}<mark data-md-highlight>${a}</mark>`;
    return (o) => {
      o = o.replace(/[\s*+\-:~^]+/g, " ").trim();
      let i = new RegExp(
        `(^|${e.separator}|)(${o
          .replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&")
          .replace(r, "|")})`,
        "img"
      );
      return (a) =>
        (0, oi.default)(a)
          .replace(i, n)
          .replace(/<\/mark>(\s+)<mark[^>]*>/gim, "$1");
    };
  }
  function It(e) {
    return e.type === 1;
  }
  function xr(e) {
    return e.type === 3;
  }
  function ai(e, t) {
    let r = To(e);
    return (
      O(H(location.protocol !== "file:"), De("search"))
        .pipe(
          Ie((n) => n),
          x(() => t)
        )
        .subscribe(({ config: n, docs: o }) =>
          r.next({
            type: 0,
            data: {
              config: n,
              docs: o,
              options: {
                suggest: X("search.suggest"),
              },
            },
          })
        ),
      r
    );
  }
  function si({ document$: e }) {
    let t = he(),
      r = Ve(new URL("../versions.json", t.base)).pipe(ue(() => A)),
      n = r.pipe(
        u((o) => {
          let [, i] = t.base.match(/([^/]+)\/?$/);
          return (
            o.find(({ version: a, aliases: s }) => a === i || s.includes(i)) ||
            o[0]
          );
        })
      );
    r
      .pipe(
        u(
          (o) =>
            new Map(o.map((i) => [`${new URL(`../${i.version}/`, t.base)}`, i]))
        ),
        x((o) =>
          b(document.body, "click").pipe(
            v((i) => !i.metaKey && !i.ctrlKey),
            pe(n),
            x(([i, a]) => {
              if (i.target instanceof Element) {
                let s = i.target.closest("a");
                if (s && !s.target && o.has(s.href)) {
                  let p = s.href;
                  return !i.target.closest(".md-version") && o.get(p) === a
                    ? A
                    : (i.preventDefault(), H(p));
                }
              }
              return A;
            }),
            x((i) => {
              let { version: a } = o.get(i);
              return yr(new URL(i)).pipe(
                u((s) => {
                  let c = Ce().href.replace(t.base, "");
                  return s.includes(c.split("#")[0])
                    ? new URL(`../${a}/${c}`, t.base)
                    : new URL(i);
                })
              );
            })
          )
        )
      )
      .subscribe((o) => ct(o)),
      Q([r, n]).subscribe(([o, i]) => {
        z(".md-header__topic").appendChild(Ro(o, i));
      }),
      e.pipe(x(() => n)).subscribe((o) => {
        var a;
        let i = __md_get("__outdated", sessionStorage);
        if (i === null) {
          let s = ((a = t.version) == null ? void 0 : a.default) || "latest";
          (i = !o.aliases.includes(s)),
            __md_set("__outdated", i, sessionStorage);
        }
        if (i) for (let s of ne("outdated")) s.hidden = !1;
      });
  }
  function vs(e, { worker$: t }) {
    let { searchParams: r } = Ce();
    r.has("q") &&
      (Ye("search", !0),
      (e.value = r.get("q")),
      e.focus(),
      De("search")
        .pipe(Ie((i) => !i))
        .subscribe(() => {
          let i = new URL(location.href);
          i.searchParams.delete("q"), history.replaceState({}, "", `${i}`);
        }));
    let n = vt(e),
      o = O(t.pipe(Ie(It)), b(e, "keyup"), n).pipe(
        u(() => e.value),
        G()
      );
    return Q([o, n]).pipe(
      u(([i, a]) => ({
        value: i,
        focus: a,
      })),
      J(1)
    );
  }
  function ci(e, { worker$: t }) {
    let r = new w(),
      n = r.pipe(te(), re(!0));
    return (
      Q([t.pipe(Ie(It)), r], (o, i) => i)
        .pipe(ee("value"))
        .subscribe(({ value: o }) =>
          t.next({
            type: 2,
            data: o,
          })
        ),
      r.pipe(ee("focus")).subscribe(({ focus: o }) => {
        o && Ye("search", o);
      }),
      b(e.form, "reset")
        .pipe(j(n))
        .subscribe(() => e.focus()),
      vs(e, {
        worker$: t,
      }).pipe(
        S((o) => r.next(o)),
        C(() => r.complete()),
        u((o) =>
          P(
            {
              ref: e,
            },
            o
          )
        ),
        J(1)
      )
    );
  }
  function pi(e, { worker$: t, query$: r }) {
    let n = new w(),
      o = co(e.parentElement).pipe(v(Boolean)),
      i = e.parentElement,
      a = z(":scope > :first-child", e),
      s = z(":scope > :last-child", e);
    De("search").subscribe((f) =>
      s.setAttribute("role", f ? "list" : "presentation")
    ),
      n
        .pipe(pe(r), kt(t.pipe(Ie(It))))
        .subscribe(([{ items: f }, { value: l }]) => {
          switch (f.length) {
            case 0:
              a.textContent = l.length
                ? xe("search.result.none")
                : xe("search.result.placeholder");
              break;
            case 1:
              a.textContent = xe("search.result.one");
              break;
            default:
              let m = dr(f.length);
              a.textContent = xe("search.result.other", m);
          }
        });
    let p = n.pipe(
      S(() => (s.innerHTML = "")),
      x(({ items: f }) =>
        O(
          H(...f.slice(0, 10)),
          H(...f.slice(10)).pipe(
            Pe(4),
            Yr(o),
            x(([l]) => l)
          )
        )
      ),
      u(Ao),
      me()
    );
    return (
      p.subscribe((f) => s.appendChild(f)),
      p
        .pipe(
          Z((f) => {
            let l = fe("details", f);
            return typeof l == "undefined"
              ? A
              : b(l, "toggle").pipe(
                  j(n),
                  u(() => l)
                );
          })
        )
        .subscribe((f) => {
          f.open === !1 &&
            f.offsetTop <= i.scrollTop &&
            i.scrollTo({
              top: f.offsetTop,
            });
        }),
      t
        .pipe(
          v(xr),
          u(({ data: f }) => f)
        )
        .pipe(
          S((f) => n.next(f)),
          C(() => n.complete()),
          u((f) =>
            P(
              {
                ref: e,
              },
              f
            )
          )
        )
    );
  }
  function gs(e, { query$: t }) {
    return t.pipe(
      u(({ value: r }) => {
        let n = Ce();
        return (
          (n.hash = ""),
          (r = r
            .replace(/\s+/g, "+")
            .replace(/&/g, "%26")
            .replace(/=/g, "%3D")),
          (n.search = `q=${r}`),
          {
            url: n,
          }
        );
      })
    );
  }
  function fi(e, t) {
    let r = new w(),
      n = r.pipe(te(), re(!0));
    return (
      r.subscribe(({ url: o }) => {
        e.setAttribute("data-clipboard-text", e.href), (e.href = `${o}`);
      }),
      b(e, "click")
        .pipe(j(n))
        .subscribe((o) => o.preventDefault()),
      gs(e, t).pipe(
        S((o) => r.next(o)),
        C(() => r.complete()),
        u((o) =>
          P(
            {
              ref: e,
            },
            o
          )
        )
      )
    );
  }
  function li(e, { worker$: t, keyboard$: r }) {
    let n = new w(),
      o = Te("search-query"),
      i = O(b(o, "keydown"), b(o, "focus")).pipe(
        He(ae),
        u(() => o.value),
        G()
      );
    return (
      n
        .pipe(
          Ze(i),
          u(([{ suggest: s }, p]) => {
            let c = p.split(/([\s-]+)/);
            if (s != null && s.length && c[c.length - 1]) {
              let f = s[s.length - 1];
              f.startsWith(c[c.length - 1]) && (c[c.length - 1] = f);
            } else c.length = 0;
            return c;
          })
        )
        .subscribe((s) => (e.innerHTML = s.join("").replace(/\s/g, "&nbsp;"))),
      r.pipe(v(({ mode: s }) => s === "search")).subscribe((s) => {
        switch (s.type) {
          case "ArrowRight":
            e.innerText.length &&
              o.selectionStart === o.value.length &&
              (o.value = e.innerText);
            break;
        }
      }),
      t
        .pipe(
          v(xr),
          u(({ data: s }) => s)
        )
        .pipe(
          S((s) => n.next(s)),
          C(() => n.complete()),
          u(() => ({
            ref: e,
          }))
        )
    );
  }
  function ui(e, { index$: t, keyboard$: r }) {
    let n = he();
    try {
      let o = ai(n.search, t),
        i = Te("search-query", e),
        a = Te("search-result", e);
      b(e, "click")
        .pipe(v(({ target: p }) => p instanceof Element && !!p.closest("a")))
        .subscribe(() => Ye("search", !1)),
        r.pipe(v(({ mode: p }) => p === "search")).subscribe((p) => {
          let c = Fe();
          switch (p.type) {
            case "Enter":
              if (c === i) {
                let f = new Map();
                for (let l of D(":first-child [href]", a)) {
                  let m = l.firstElementChild;
                  f.set(l, parseFloat(m.getAttribute("data-md-score")));
                }
                if (f.size) {
                  let [[l]] = [...f].sort(([, m], [, d]) => d - m);
                  l.click();
                }
                p.claim();
              }
              break;
            case "Escape":
            case "Tab":
              Ye("search", !1), i.blur();
              break;
            case "ArrowUp":
            case "ArrowDown":
              if (typeof c == "undefined") i.focus();
              else {
                let f = [
                    i,
                    ...D(
                      ":not(details) > [href], summary, details[open] [href]",
                      a
                    ),
                  ],
                  l = Math.max(
                    0,
                    (Math.max(0, f.indexOf(c)) +
                      f.length +
                      (p.type === "ArrowUp" ? -1 : 1)) %
                      f.length
                  );
                f[l].focus();
              }
              p.claim();
              break;
            default:
              i !== Fe() && i.focus();
          }
        }),
        r.pipe(v(({ mode: p }) => p === "global")).subscribe((p) => {
          switch (p.type) {
            case "f":
            case "s":
            case "/":
              i.focus(), i.select(), p.claim();
              break;
          }
        });
      let s = ci(i, {
        worker$: o,
      });
      return O(
        s,
        pi(a, {
          worker$: o,
          query$: s,
        })
      ).pipe(
        Ae(
          ...ne("search-share", e).map((p) =>
            fi(p, {
              query$: s,
            })
          ),
          ...ne("search-suggest", e).map((p) =>
            li(p, {
              worker$: o,
              keyboard$: r,
            })
          )
        )
      );
    } catch (o) {
      return (e.hidden = !0), Le;
    }
  }
  function mi(e, { index$: t, location$: r }) {
    return Q([
      t,
      r.pipe(
        q(Ce()),
        v((n) => !!n.searchParams.get("h"))
      ),
    ]).pipe(
      u(([n, o]) => ii(n.config)(o.searchParams.get("h"))),
      u((n) => {
        var a;
        let o = new Map(),
          i = document.createNodeIterator(e, NodeFilter.SHOW_TEXT);
        for (let s = i.nextNode(); s; s = i.nextNode())
          if ((a = s.parentElement) != null && a.offsetHeight) {
            let p = s.textContent,
              c = n(p);
            c.length > p.length && o.set(s, c);
          }
        for (let [s, p] of o) {
          let { childNodes: c } = T("span", null, p);
          s.replaceWith(...Array.from(c));
        }
        return {
          ref: e,
          nodes: o,
        };
      })
    );
  }
  function ys(e, { viewport$: t, main$: r }) {
    let n = e.closest(".md-grid"),
      o = n.offsetTop - n.parentElement.offsetTop;
    return Q([r, t]).pipe(
      u(
        ([
          { offset: i, height: a },
          {
            offset: { y: s },
          },
        ]) => (
          (a = a + Math.min(o, Math.max(0, s - i)) - o),
          {
            height: a,
            locked: s >= i + o,
          }
        )
      ),
      G((i, a) => i.height === a.height && i.locked === a.locked)
    );
  }
  function rn(e, n) {
    var o = n,
      { header$: t } = o,
      r = fn(o, ["header$"]);
    let i = z(".md-sidebar__scrollwrap", e),
      { y: a } = We(i);
    return R(() => {
      let s = new w(),
        p = s.pipe(te(), re(!0)),
        c = s.pipe(Oe(0, ge));
      return (
        c.pipe(pe(t)).subscribe({
          next([{ height: f }, { height: l }]) {
            (i.style.height = `${f - 2 * a}px`), (e.style.top = `${l}px`);
          },
          complete() {
            (i.style.height = ""), (e.style.top = "");
          },
        }),
        c.pipe(Ie()).subscribe(() => {
          for (let f of D(".md-nav__link--active[href]", e)) {
            let l = xt(f);
            if (typeof l != "undefined") {
              let m = f.offsetTop - l.offsetTop,
                { height: d } = le(l);
              l.scrollTo({
                top: m - d / 2,
              });
            }
          }
        }),
        ce(D("label[tabindex]", e))
          .pipe(
            Z((f) =>
              b(f, "click").pipe(
                u(() => f),
                j(p)
              )
            )
          )
          .subscribe((f) => {
            let l = z(`[id="${f.htmlFor}"]`);
            z(`[aria-labelledby="${f.id}"]`).setAttribute(
              "aria-expanded",
              `${l.checked}`
            );
          }),
        ys(e, r).pipe(
          S((f) => s.next(f)),
          C(() => s.complete()),
          u((f) =>
            P(
              {
                ref: e,
              },
              f
            )
          )
        )
      );
    });
  }
  function di(e, t) {
    if (typeof t != "undefined") {
      let r = `https://api.github.com/repos/${e}/${t}`;
      return Ct(
        Ve(`${r}/releases/latest`).pipe(
          ue(() => A),
          u((n) => ({
            version: n.tag_name,
          })),
          $e({})
        ),
        Ve(r).pipe(
          ue(() => A),
          u((n) => ({
            stars: n.stargazers_count,
            forks: n.forks_count,
          })),
          $e({})
        )
      ).pipe(u(([n, o]) => P(P({}, n), o)));
    } else {
      let r = `https://api.github.com/users/${e}`;
      return Ve(r).pipe(
        u((n) => ({
          repositories: n.public_repos,
        })),
        $e({})
      );
    }
  }
  function hi(e, t) {
    let r = `https://${e}/api/v4/projects/${encodeURIComponent(t)}`;
    return Ve(r).pipe(
      ue(() => A),
      u(({ star_count: n, forks_count: o }) => ({
        stars: n,
        forks: o,
      })),
      $e({})
    );
  }
  function bi(e) {
    let t = e.match(/^.+github\.com\/([^/]+)\/?([^/]+)?/i);
    if (t) {
      let [, r, n] = t;
      return di(r, n);
    }
    if (((t = e.match(/^.+?([^/]*gitlab[^/]+)\/(.+?)\/?$/i)), t)) {
      let [, r, n] = t;
      return hi(r, n);
    }
    return A;
  }
  var xs;
  function Es(e) {
    return (
      xs ||
      (xs = R(() => {
        let t = __md_get("__source", sessionStorage);
        if (t) return H(t);
        if (ne("consent").length) {
          let n = __md_get("__consent");
          if (!(n && n.github)) return A;
        }
        return bi(e.href).pipe(
          S((n) => __md_set("__source", n, sessionStorage))
        );
      }).pipe(
        ue(() => A),
        v((t) => Object.keys(t).length > 0),
        u((t) => ({
          facts: t,
        })),
        J(1)
      ))
    );
  }
  function vi(e) {
    let t = z(":scope > :last-child", e);
    return R(() => {
      let r = new w();
      return (
        r.subscribe(({ facts: n }) => {
          t.appendChild(Co(n)),
            t.classList.add("md-source__repository--active");
        }),
        Es(e).pipe(
          S((n) => r.next(n)),
          C(() => r.complete()),
          u((n) =>
            P(
              {
                ref: e,
              },
              n
            )
          )
        )
      );
    });
  }
  function ws(e, { viewport$: t, header$: r }) {
    return Se(document.body).pipe(
      x(() =>
        vr(e, {
          header$: r,
          viewport$: t,
        })
      ),
      u(({ offset: { y: n } }) => ({
        hidden: n >= 10,
      })),
      ee("hidden")
    );
  }
  function gi(e, t) {
    return R(() => {
      let r = new w();
      return (
        r.subscribe({
          next({ hidden: n }) {
            e.hidden = n;
          },
          complete() {
            e.hidden = !1;
          },
        }),
        (X("navigation.tabs.sticky")
          ? H({
              hidden: !1,
            })
          : ws(e, t)
        ).pipe(
          S((n) => r.next(n)),
          C(() => r.complete()),
          u((n) =>
            P(
              {
                ref: e,
              },
              n
            )
          )
        )
      );
    });
  }
  function Ss(e, { viewport$: t, header$: r }) {
    let n = new Map(),
      o = D("[href^=\\#]", e);
    for (let s of o) {
      let p = decodeURIComponent(s.hash.substring(1)),
        c = fe(`[id="${p}"]`);
      typeof c != "undefined" && n.set(s, c);
    }
    let i = r.pipe(
      ee("height"),
      u(({ height: s }) => {
        let p = Te("main"),
          c = z(":scope > :first-child", p);
        return s + 0.8 * (c.offsetTop - p.offsetTop);
      }),
      me()
    );
    return Se(document.body)
      .pipe(
        ee("height"),
        x((s) =>
          R(() => {
            let p = [];
            return H(
              [...n].reduce((c, [f, l]) => {
                for (
                  ;
                  p.length && n.get(p[p.length - 1]).tagName >= l.tagName;

                )
                  p.pop();
                let m = l.offsetTop;
                for (; !m && l.parentElement; )
                  (l = l.parentElement), (m = l.offsetTop);
                let d = l.offsetParent;
                for (; d; d = d.offsetParent) m += d.offsetTop;
                return c.set([...(p = [...p, f])].reverse(), m);
              }, new Map())
            );
          }).pipe(
            u((p) => new Map([...p].sort(([, c], [, f]) => c - f))),
            Ze(i),
            x(([p, c]) =>
              t.pipe(
                zr(
                  ([f, l], { offset: { y: m }, size: d }) => {
                    let h = m + d.height >= Math.floor(s.height);
                    for (; l.length; ) {
                      let [, g] = l[0];
                      if (g - c < m || h) f = [...f, l.shift()];
                      else break;
                    }
                    for (; f.length; ) {
                      let [, g] = f[f.length - 1];
                      if (g - c >= m && !h) l = [f.pop(), ...l];
                      else break;
                    }
                    return [f, l];
                  },
                  [[], [...p]]
                ),
                G((f, l) => f[0] === l[0] && f[1] === l[1])
              )
            )
          )
        )
      )
      .pipe(
        u(([s, p]) => ({
          prev: s.map(([c]) => c),
          next: p.map(([c]) => c),
        })),
        q({
          prev: [],
          next: [],
        }),
        Pe(2, 1),
        u(([s, p]) =>
          s.prev.length < p.prev.length
            ? {
                prev: p.prev.slice(
                  Math.max(0, s.prev.length - 1),
                  p.prev.length
                ),
                next: [],
              }
            : {
                prev: p.prev.slice(-1),
                next: p.next.slice(0, p.next.length - s.next.length),
              }
        )
      );
  }
  function yi(e, { viewport$: t, header$: r, main$: n, target$: o }) {
    return R(() => {
      let i = new w(),
        a = i.pipe(te(), re(!0));
      if (
        (i.subscribe(({ prev: s, next: p }) => {
          for (let [c] of p)
            c.classList.remove("md-nav__link--passed"),
              c.classList.remove("md-nav__link--active");
          for (let [c, [f]] of s.entries())
            f.classList.add("md-nav__link--passed"),
              f.classList.toggle("md-nav__link--active", c === s.length - 1);
        }),
        X("toc.follow"))
      ) {
        let s = O(
          t.pipe(
            ye(1),
            u(() => {})
          ),
          t.pipe(
            ye(250),
            u(() => "smooth")
          )
        );
        i.pipe(
          v(({ prev: p }) => p.length > 0),
          Ze(n.pipe(He(ae))),
          pe(s)
        ).subscribe(([[{ prev: p }], c]) => {
          let [f] = p[p.length - 1];
          if (f.offsetHeight) {
            let l = xt(f);
            if (typeof l != "undefined") {
              let m = f.offsetTop - l.offsetTop,
                { height: d } = le(l);
              l.scrollTo({
                top: m - d / 2,
                behavior: c,
              });
            }
          }
        });
      }
      return (
        X("navigation.tracking") &&
          t
            .pipe(
              j(a),
              ee("offset"),
              ye(250),
              de(1),
              j(o.pipe(de(1))),
              st({
                delay: 250,
              }),
              pe(i)
            )
            .subscribe(([, { prev: s }]) => {
              let p = Ce(),
                c = s[s.length - 1];
              if (c && c.length) {
                let [f] = c,
                  { hash: l } = new URL(f.href);
                p.hash !== l &&
                  ((p.hash = l), history.replaceState({}, "", `${p}`));
              } else (p.hash = ""), history.replaceState({}, "", `${p}`);
            }),
        Ss(e, {
          viewport$: t,
          header$: r,
        }).pipe(
          S((s) => i.next(s)),
          C(() => i.complete()),
          u((s) =>
            P(
              {
                ref: e,
              },
              s
            )
          )
        )
      );
    });
  }
  function Ts(e, { viewport$: t, main$: r, target$: n }) {
    let o = t.pipe(
        u(({ offset: { y: a } }) => a),
        Pe(2, 1),
        u(([a, s]) => a > s && s > 0),
        G()
      ),
      i = r.pipe(u(({ active: a }) => a));
    return Q([i, o]).pipe(
      u(([a, s]) => !(a && s)),
      G(),
      j(n.pipe(de(1))),
      re(!0),
      st({
        delay: 250,
      }),
      u((a) => ({
        hidden: a,
      }))
    );
  }
  function xi(e, { viewport$: t, header$: r, main$: n, target$: o }) {
    let i = new w(),
      a = i.pipe(te(), re(!0));
    return (
      i.subscribe({
        next({ hidden: s }) {
          (e.hidden = s),
            s
              ? (e.setAttribute("tabindex", "-1"), e.blur())
              : e.removeAttribute("tabindex");
        },
        complete() {
          (e.style.top = ""), (e.hidden = !0), e.removeAttribute("tabindex");
        },
      }),
      r.pipe(j(a), ee("height")).subscribe(({ height: s }) => {
        e.style.top = `${s + 16}px`;
      }),
      Ts(e, {
        viewport$: t,
        main$: n,
        target$: o,
      }).pipe(
        S((s) => i.next(s)),
        C(() => i.complete()),
        u((s) =>
          P(
            {
              ref: e,
            },
            s
          )
        )
      )
    );
  }
  function Ei({ document$: e }) {
    e
      .pipe(
        x(() => D(".md-ellipsis")),
        Z((t) =>
          Et(t).pipe(
            j(e.pipe(de(1))),
            v((r) => r),
            u(() => t),
            we(1)
          )
        ),
        v((t) => t.offsetWidth < t.scrollWidth),
        Z((t) => {
          let r = t.innerText,
            n = t.closest("a") || t;
          return (
            (n.title = r),
            Qe(n).pipe(
              j(e.pipe(de(1))),
              C(() => n.removeAttribute("title"))
            )
          );
        })
      )
      .subscribe(),
      e
        .pipe(
          x(() => D(".md-status")),
          Z((t) => Qe(t))
        )
        .subscribe();
  }
  function wi({ document$: e, tablet$: t }) {
    e.pipe(
      x(() => D(".md-toggle--indeterminate")),
      S((r) => {
        (r.indeterminate = !0), (r.checked = !1);
      }),
      Z((r) =>
        b(r, "change").pipe(
          qr(() => r.classList.contains("md-toggle--indeterminate")),
          u(() => r)
        )
      ),
      pe(t)
    ).subscribe(([r, n]) => {
      r.classList.remove("md-toggle--indeterminate"), n && (r.checked = !1);
    });
  }
  function Os() {
    return /(iPad|iPhone|iPod)/.test(navigator.userAgent);
  }
  function Si({ document$: e }) {
    e.pipe(
      x(() => D("[data-md-scrollfix]")),
      S((t) => t.removeAttribute("data-md-scrollfix")),
      v(Os),
      Z((t) => b(t, "touchstart").pipe(u(() => t)))
    ).subscribe((t) => {
      let r = t.scrollTop;
      r === 0
        ? (t.scrollTop = 1)
        : r + t.offsetHeight === t.scrollHeight && (t.scrollTop = r - 1);
    });
  }
  function Ti({ viewport$: e, tablet$: t }) {
    Q([De("search"), t])
      .pipe(
        u(([r, n]) => r && !n),
        x((r) => H(r).pipe(Ke(r ? 400 : 100))),
        pe(e)
      )
      .subscribe(
        ([
          r,
          {
            offset: { y: n },
          },
        ]) => {
          if (r)
            document.body.setAttribute("data-md-scrolllock", ""),
              (document.body.style.top = `-${n}px`);
          else {
            let o = -1 * parseInt(document.body.style.top, 10);
            document.body.removeAttribute("data-md-scrolllock"),
              (document.body.style.top = ""),
              o && window.scrollTo(0, o);
          }
        }
      );
  }
  Object.entries ||
    (Object.entries = function (e) {
      let t = [];
      for (let r of Object.keys(e)) t.push([r, e[r]]);
      return t;
    });
  Object.values ||
    (Object.values = function (e) {
      let t = [];
      for (let r of Object.keys(e)) t.push(e[r]);
      return t;
    });
  typeof Element != "undefined" &&
    (Element.prototype.scrollTo ||
      (Element.prototype.scrollTo = function (e, t) {
        typeof e == "object"
          ? ((this.scrollLeft = e.left), (this.scrollTop = e.top))
          : ((this.scrollLeft = e), (this.scrollTop = t));
      }),
    Element.prototype.replaceWith ||
      (Element.prototype.replaceWith = function (...e) {
        let t = this.parentNode;
        if (t) {
          e.length === 0 && t.removeChild(this);
          for (let r = e.length - 1; r >= 0; r--) {
            let n = e[r];
            typeof n == "string"
              ? (n = document.createTextNode(n))
              : n.parentNode && n.parentNode.removeChild(n),
              r
                ? t.insertBefore(this.previousSibling, n)
                : t.replaceChild(n, this);
          }
        }
      }));
  function _s() {
    return location.protocol === "file:"
      ? br(`${new URL("search/search_index.js", nn.base)}`).pipe(
          u(() => __index),
          J(1)
        )
      : Ve(new URL("search/search_index.json", nn.base));
  }
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");
  var rt = Gn(),
    Er = lo(),
    St = bo(),
    on = fo(),
    _e = So(),
    wr = Ht("(min-width: 960px)"),
    _i = Ht("(min-width: 1220px)"),
    Mi = vo(),
    nn = he(),
    Li = document.forms.namedItem("search") ? _s() : Le,
    an = new w();
  ei({
    alert$: an,
  });
  X("navigation.instant") &&
    ti({
      document$: rt,
      location$: Er,
      viewport$: _e,
    });
  var Oi;
  ((Oi = nn.version) == null ? void 0 : Oi.provider) === "mike" &&
    si({
      document$: rt,
    });
  O(Er, St)
    .pipe(Ke(125))
    .subscribe(() => {
      Ye("drawer", !1), Ye("search", !1);
    });
  on.pipe(v(({ mode: e }) => e === "global")).subscribe((e) => {
    switch (e.type) {
      case "p":
      case ",":
        let t = fe("link[rel=prev]");
        typeof t != "undefined" && ct(t);
        break;
      case "n":
      case ".":
        let r = fe("link[rel=next]");
        typeof r != "undefined" && ct(r);
        break;
      case "Enter":
        let n = Fe();
        n instanceof HTMLLabelElement && n.click();
    }
  });
  Ei({
    document$: rt,
  });
  wi({
    document$: rt,
    tablet$: wr,
  });
  Si({
    document$: rt,
  });
  Ti({
    viewport$: _e,
    tablet$: wr,
  });
  var tt = Bo(Te("header"), {
      viewport$: _e,
    }),
    Ft = rt.pipe(
      u(() => Te("main")),
      x((e) =>
        Xo(e, {
          viewport$: _e,
          header$: tt,
        })
      ),
      J(1)
    ),
    Ms = O(
      ...ne("consent").map((e) =>
        _o(e, {
          target$: St,
        })
      ),
      ...ne("dialog").map((e) =>
        Qo(e, {
          alert$: an,
        })
      ),
      ...ne("header").map((e) =>
        Go(e, {
          viewport$: _e,
          header$: tt,
          main$: Ft,
        })
      ),
      ...ne("palette").map((e) => Zo(e)),
      ...ne("search").map((e) =>
        ui(e, {
          index$: Li,
          keyboard$: on,
        })
      ),
      ...ne("source").map((e) => vi(e))
    ),
    Ls = R(() =>
      O(
        ...ne("announce").map((e) => Oo(e)),
        ...ne("content").map((e) =>
          Yo(e, {
            viewport$: _e,
            target$: St,
            print$: Mi,
          })
        ),
        ...ne("content").map((e) =>
          X("search.highlight")
            ? mi(e, {
                index$: Li,
                location$: Er,
              })
            : A
        ),
        ...ne("header-title").map((e) =>
          Jo(e, {
            viewport$: _e,
            header$: tt,
          })
        ),
        ...ne("sidebar").map((e) =>
          e.getAttribute("data-md-type") === "navigation"
            ? Br(_i, () =>
                rn(e, {
                  viewport$: _e,
                  header$: tt,
                  main$: Ft,
                })
              )
            : Br(wr, () =>
                rn(e, {
                  viewport$: _e,
                  header$: tt,
                  main$: Ft,
                })
              )
        ),
        ...ne("tabs").map((e) =>
          gi(e, {
            viewport$: _e,
            header$: tt,
          })
        ),
        ...ne("toc").map((e) =>
          yi(e, {
            viewport$: _e,
            header$: tt,
            main$: Ft,
            target$: St,
          })
        ),
        ...ne("top").map((e) =>
          xi(e, {
            viewport$: _e,
            header$: tt,
            main$: Ft,
            target$: St,
          })
        )
      )
    ),
    Ai = rt.pipe(
      x(() => Ls),
      Ae(Ms),
      J(1)
    );
  Ai.subscribe();
  window.document$ = rt;
  window.location$ = Er;
  window.target$ = St;
  window.keyboard$ = on;
  window.viewport$ = _e;
  window.tablet$ = wr;
  window.screen$ = _i;
  window.print$ = Mi;
  window.alert$ = an;
  window.component$ = Ai;
})();
