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

### 1.2 Rich Text Formatting

You can use text formatting to add the following rich text features:

```markdown title="Rich Text Features" linenums="1"
**This text is bold!**
_This text is italic!_
^^This text is underlined!^^
~​~This text has strikethrough!~~
`This is code.`
```

### 1.3 Key Strokes

You can describe key strokes such as ++enter++ and ++alt+f4++ with the following syntax:

```markdown title="Key Strokes" linenums="1"
++enter++
++alt+f4++
++ctrl+shift+win+alt+h++
```

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

### 1.5 Links

Links can be created with the following syntax:

```markdown title="Links" linenums="1"
[External Link](https://example.com)
[Internal Text](/wiki/path/to/page)
```

### 1.6 Codeblocks

A basic codeblock can be created as such:

````markdown title="Basic Codeblock" linenums="1"
```java
System.out.println("Test Output");
```
````

Here, `java` defines the language to use when highlighting the code. A list of available lexers can be found [here](https://pygments.org/docs/lexers/).

You can also add a title, and line numbers:

````markdown title="Codeblock With Title and Line Numbers" linenums="1"
```java title="Title Goes Here" linenums="1"
System.out.println("Test Output");
```
````

### 1.7 Admonitions

You can write admonitions using the following format:

```md title="Basic Admonition" linenums="1"
!!! info "Admonition Title"

    Admonition content goes here.
    This can have multiple lines.
```

The `info` defines the type of admonition.
`note`, `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example` and `quote` are supported.

### 1.8 Buttons

A button can be added simply by styling a link:

```md title="Basic Button"
[Primary Button](buttonurl){ .md-button .md-button--primary }
```

### 1.9 MathJax

$\LaTeX$ equations can be inserted with MathJax using the following syntax:

```md title="MathJax Equations" linenums="1"
This is a simple inline equation: $1+1=2$

This is a simple block equation: $$1+1=2$$
```

## 2. Submitting a PR

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
