# Contribution Guidelines

Below are the guidelines for writing wiki pages / tutorials.

## 1. Formatting

All written pages must be formatted. In order to comply with the guidelines, the following must be achieved:

- [x] Headings are used appropriately. Each page must have a large heading at the top.
- [x] Bold, italics, and strikethroughs are used appropriately.
- [x] Links, numbered, bullet and checkmark lists are used appropriately.
- [x] Highlighted codeblocks are used whenever required.
- [x] Admonitions are used to provide extra information.
- [x] Buttons are added to link to relevant pages.
- [x] MathJax equations must be used appropriately.
- [x] Comment section is added if necessary.

!!! warning "Pull Requests"

    For a pull requests to be merged, it must comply with all guidelines.

### 1.1 Headings

To write headings in markdown, place a `#` before the heading line.
Adding more `#` will diminish the size of the heading.

```markdown title="Headings in Markdown" linenums="1"
# Page Title

## Title

### Subtitle

#### Heading 4

##### Heading 5

###### Heading 6
```

!!! info "Rich Text Usage"

    You **must** use headings whenever appropriate.

### 1.2 Rich Text Formatting

You can use text formatting to add the following rich text features:

```markdown title="Rich Text Features" linenums="1"
**This text is bold!**
_This text is italic!_
^^This text is underlined!^^
~​~This text has strikethrough!~~
`This is code.`
```

!!! info "Rich Text Usage"

    You **must** use rich text whenever appropriate.

### 1.3 Key Strokes

You can describe key strokes such as ++enter++ and ++alt+f4++ with the following syntax:

```markdown title="Key Strokes" linenums="1"
++enter++
++alt+f4++
++ctrl+shift+win+alt+h++
```

!!! info "Key Strokes Usage"

    You **must** use key strokes whenever appropriate.

### 1.4 Lists

You can add a simple list with the following syntax:

```markdown title="Lists" linenums="1"
- This is a bulleted list.
- This is a bulleted list.
  - Sublist.

1. This is a numbered list.
2. This is a numbered list.

- [ ] Checkmark list.
- [x] Checked checkmark list.
  - [ ] Sublist.
```

!!! info "List Usage"

    You **must** add checkmark lists at the end of any multipage tutorial.

### 1.5 Links

Links can be created with the following syntax:

```markdown title="Links" linenums="1"
[Internal Link](/wiki/path/to/page)
[Link With Tooltip](/wiki/path/to/page "I am a tooltip!")
[External Link, Opens In New Tab](https://example.com){:target="_blank"}
```

!!! info "Link Usage"

    - Add tooltips whenever possible.
    - External links must open in a new tab.

### 1.6 Codeblocks

A basic codeblock can be created as such:

````title="Basic Codeblock" linenums="1"
```java
System.out.println("Test Output");
```
````

Here, `java` defines the language to use when highlighting the code. A list of available lexers can be found [here](https://pygments.org/docs/lexers/).

You can also add a title, and line numbers:

````title="Codeblock With Title and Line Numbers" linenums="1"
```java title="Title Goes Here" linenums="1"
System.out.println("Test Output");
```
````

!!! info "Codeblock Usage"

    - If a codeblock exceeds $1$ line, line numbers must be added.
    - Codeblocks must be highlighted with the appropriate language, if possible.
    - Codeblock title must reflect the contents of the codeblock.


### 1.7 Admonitions

You can write admonitions using the following format:

```md title="Basic Admonition" linenums="1"
!!! info "Admonition Title"

    Admonition content goes here.
    This can have multiple lines.
```

The `info` defines the type of admonition.
`note`, `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example` and `quote` are supported.

!!! info "Usage of Admonition Types"

    - Imporatnt information should be placed in an `info` admonition.
    - Any extra information should be added via a `tip` admonition.
    - Any warning should be put in a `warning` admonition.
    - Pages that are uncompleted should be marked with a `danger` admonition at the top.

### 1.8 Buttons

A button can be added simply by styling a link:

```md title="Basic Button"
[Primary Button](buttonurl){ .md-button .md-button--primary }
```

!!! info "Button Usage"

    Buttons should link to the next section of a tutorial.

    Relevant resources should be linked to with a link rather than a button.

### 1.9 MathJax

$\LaTeX$ equations can be inserted with MathJax using the following syntax:

```md title="MathJax Equations" linenums="1"
This is a simple inline equation: $1+1=2$

This is a simple block equation: $$1+1=2$$
```

!!! info "MathJax Usage"

    MathJax **must** be used when representing any equation.

### 1.10 Comments

You can add comment support to a page by adding the following to the top of your page:

```markdown title="Comment Support" linenums="1"
---
comments: true
---

Rest of the page goes here.
```

!!! info "Comments"

    Comments are applicable only in tutorial / guide pages.

## 2. Editing Configuration

When adding a page, please edit `mkdocs.yml` to add your pages to the tree. The structure is as follows:
```yaml title="Editing mkdocs.yml example:" linenums="1"
nav:
  - 1.19.x: # This is a tab.
      - 1.19.x/index.md # Tab root page.
      - Setup: #Sub Section
          - 1.19.x/setup/index.md # Section Root Page
          - Installation: # Sub-Sub Section
              - Installing Java: 1.19.x/setup/installation/java.md
              - Installing An IDE: 1.19.x/setup/installation/ide.md
              - Downloading Forge: 1.19.x/setup/installation/forge.md
```

!!! warning "Website Navigation"

    In order for your page to be navigable, please add it to the `mkdocs.yml` file.
    **All file paths must be lowercase.**

## 3. Submitting a PR

When submitting a pull request, it is important that your request meets the following conditions:

- [x] The PR is titled appropriately.
- [x] The description describes exactly what changes were made since the main branch.
- [x] Files are organised and clearly named.

Once the PR has been made, the changes will be reviewed to make sure that they comply with the formatting standards.

<br/>
<br/>
<div style="text-align:center">
    <strong>Happy Contributing!</strong>
</div>
