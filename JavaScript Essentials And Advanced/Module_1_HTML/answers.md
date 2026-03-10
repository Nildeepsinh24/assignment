# Module (HTML) - 1

## Are the HTML tags and elements the same thing?
No, HTML tags and HTML elements are not the same thing, although the terms are often used interchangeably.
*   **HTML Tags:** These are the labels you use to mark up the beginning and end of an element. They are enclosed in angle brackets (e.g., `<p>` for a starting tag, and `</p>` for an closing tag).
*   **HTML Elements:** An element is the complete component, consisting of the opening tag, the content inside it, and the closing tag (e.g., `<p>This is a paragraph.</p>`). If a tag is self-closing (like `<img>`), the tag itself constitutes the entire element.

## What are tags and attributes in HTML?
*   **Tags:** Tags act as keywords or commands that tell the web browser how to format and display the content. They define the structure of the HTML document (e.g., `<h1>`, `<div>`, `<a>`).
*   **Attributes:** Attributes provide additional information or modifiers for an HTML element. They are always specified in the opening tag and usually come in name/value pairs like `name="value"`. For example, in `<a href="https://example.com">`, `href` is the attribute name and `"https://example.com"` is the value.

## What are void elements in HTML?
Void elements (also known as empty elements or self-closing elements) are HTML elements that cannot have any child nodes (i.e., they cannot contain text or other elements). They only have a start tag and no end tag. 
Common examples include:
*   `<br>` (line break)
*   `<hr>` (horizontal rule)
*   `<img>` (image)
*   `<input>` (input field)
*   `<meta>` (metadata)

## What are HTML Entities?
HTML entities are special character codes used to display reserved characters in HTML or characters that are not present on a standard keyboard. 
Since certain characters have special meaning in HTML (like `<` and `>`), you must use their corresponding entity references to display them as text instead of having the browser interpret them as code.
Examples:
*   `&lt;` represents `<` (less than)
*   `&gt;` represents `>` (greater than)
*   `&amp;` represents `&` (ampersand)
*   `&copy;` represents `©` (copyright symbol)

## What are different types of lists in HTML?
There are three main types of lists in HTML:
1.  **Unordered List (`<ul>`):** Used for items where the order doesn't matter. Items are typically marked with bullet points. List items are defined with `<li>`.
2.  **Ordered List (`<ol>`):** Used for items where the order is important (e.g., steps in a recipe). Items are automatically numbered or lettered. List items are defined with `<li>`.
3.  **Description List (`<dl>`):** Used for a list of terms and their corresponding descriptions (like a dictionary). Contains `<dt>` (description term) and `<dd>` (description details).

## What is the 'class' attribute in HTML?
The `class` attribute is used to specify one or more class names for an HTML element. It is primarily used to point to a class in a style sheet (CSS) so that specific styles can be applied to all elements sharing that class. It can also be used by JavaScript to access and manipulate elements. Multiple elements can share the same class name.

## What is the difference between the 'id' attribute and the 'class' attribute of HTML elements?
| Feature | `id` Attribute | `class` Attribute |
| :--- | :--- | :--- |
| **Uniqueness** | Must be unique within the entire HTML document. | Can be used by multiple elements in the document. |
| **Purpose** | To uniquely identify a single, specific element (e.g., for linking, unique styling, or finding via JS `getElementById`). | To group multiple elements together to apply the same styling or behavior. |
| **CSS Selector** | Uses a hash symbol (`#id-name`). | Uses a period (`.class-name`). |
| **Multiple Values**| An element can only have one `id`. | An element can have multiple classes (separated by spaces). |

## What are the various formatting tags in HTML?
Formatting tags are used to change the appearance of text for better meaning and visual presentation. Examples include:
*   `<b>` - Bold text
*   `<strong>` - Important text (usually rendered bold, implies semantic importance)
*   `<i>` - Italic text
*   `<em>` - Emphasized text (usually rendered italic, implies semantic emphasis)
*   `<mark>` - Marked/highlighted text
*   `<small>` - Smaller text
*   `<del>` - Deleted text (strikethrough)
*   `<ins>` - Inserted text (underlined)
*   `<sub>` - Subscript text
*   `<sup>` - Superscript text

## How is Cell Padding different from Cell Spacing?
*   **Cell Padding (`cellpadding` in older HTML, or `padding` in CSS):** The space *inside* a table cell, measured between the cell's content and its border.
*   **Cell Spacing (`cellspacing` in older HTML, or `border-spacing` in CSS):** The space *outside* the table cells, measured between the borders of adjacent cells.

## How can we club two or more rows or columns into a single row or column in an HTML table?
We use attributes within the `<td>` (table data) or `<th>` (table header) tags to merge cells:
*   **Merging Columns:** Use the `colspan` attribute. Example: `<td colspan="2">` merges the cell across two columns.
*   **Merging Rows:** Use the `rowspan` attribute. Example: `<td rowspan="3">` merges the cell down across three rows.

## What is the difference between a block-level element and an inline element?
| Feature | Block-level Elements | Inline Elements |
| :--- | :--- | :--- |
| **New Line** | Always starts on a new line. | Does not start on a new line; sits inline with text. |
| **Width** | Takes up the full width available (stretches left to right). | Takes up only as much width as necessary for its content. |
| **Containing** | Can contain other block-level elements and inline elements. | Can generally only contain other inline elements or text. |
| **Examples** | `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<table>` | `<span>`, `<a>`, `<img>`, `<strong>`, `<em>` |

## How to create a Hyperlink in HTML?
You construct a hyperlink using the `<a>` (anchor) tag and the `href` attribute, which specifies the destination URL.
**Syntax:** `<a href="url">Link Text</a>`
**Example:** `<a href="https://www.google.com">Visit Google</a>`

## What is the use of an iframe tag?
The `<iframe>` (inline frame) tag is used to embed another HTML document within the current HTML document. This is commonly used for incorporating external content like YouTube videos, Google Maps, or advertising banners into a webpage without having them take over the entire screen.
**Example:** `<iframe src="https://example.com" width="500" height="300"></iframe>`

## What is the use of a span tag? Explain with example?
The `<span>` tag is a generic inline container used to group smaller chunks of inline text or elements. It holds no inherent semantic meaning or visual styling by itself. Its primary use is to provide a "hook" to apply CSS styling or attach JavaScript events to a specific portion of text within a larger block.

**Example:**
```html
<p>My mother has <span style="color:blue; font-weight:bold;">blue</span> eyes.</p>
```
*In this example, the word "blue" will be styled differently from the rest of the paragraph, without causing a line break.*

## How to insert a picture into a background image of a web page?
While older HTML versions used the `background` attribute on the `<body>` tag, the modern and proper way is to use CSS with the `background-image` property.

**Example using inline CSS:**
```html
<body style="background-image: url('background.jpg');">
```
*(Best practice is to put this rule in an external or internal stylesheet rather than inline).*

## How are active links different from normal links?
*   **Normal (Unvisited) Link:** The default state of a hyperlink that the user has not yet clicked or visited. By default, browsers usually display these as blue and underlined. Represented in CSS by the `:link` pseudo-class.
*   **Active Link:** A transient state representing the exact moment a link is being clicked (when the mouse button is pressed down but not yet released). By default, browsers often display these as red. Represented in CSS by the `:active` pseudo-class.

## What are the different tags to separate sections of text?
Several tags exist to divide and separate text, conveying different meanings:
*   `<p>`: Defines a paragraph. It automatically adds space before and after the text.
*   `<br>`: Inserts a single line break. It does not start a new paragraph but forces the text to the next line.
*   `<hr>`: Interpreted semantically as a thematic break (a shift in topic), historically and visually rendered as a horizontal line.
*   `<div>`: A generic block-level container used to group sections of content together, primarily for styling and layout purposes using CSS.
*   `<section>`/`<article>`: HTML5 semantic tags used to define major thematic sections or independent pieces of content within a document.

## What is SVG?
SVG stands for **Scalable Vector Graphics**. It is an XML-based markup language for describing two-dimensional vector graphics. Unlike raster images (like JPEG or PNG) which are made of pixels, SVGs are built using mathematical formulas (lines, curves, shapes).
**Key Advantage:** SVGs are infinitely scalable without losing quality or becoming pixelated, making them perfect for logos, icons, and illustrations on responsive websites.

## What is difference between HTML and XHTML?
| Feature | HTML (HyperText Markup Language) | XHTML (eXtensible HyperText Markup Language) |
| :--- | :--- | :--- |
| **Basis** | Based on SGML. | Based on XML. |
| **Strictness** | Very forgiving. Browsers will try to display poorly formatted HTML. | Extremely strict. Code must be perfectly well-formed XML. |
| **Tags/Attributes**| Case-insensitive (e.g., `<BODY>` is fine). | Must be lowercase (e.g., `<body>` only). |
| **Closing Tags** | Some tags don't require closing (e.g., `<p>`, `<li>`). | All tags must be closed explicitly (e.g., `<p>...</p>`, `<br />`). |
| **Attribute Values**| Quotes around values are sometimes optional. | Quotes around attribute values are mandatory. |

## What are logical and physical tags in HTML?
*   **Physical Tags:** These tags tell the browser exactly *how* to visually display the text (its physical appearance), regardless of its meaning. Examples: `<b>` (bold), `<i>` (italic), `<u>` (underline).
*   **Logical (Semantic) Tags:** These tags describe the *meaning* or importance of the enclosed text, rather than dictating a specific visual presentation. They allow browsers, screen readers, and search engines to interpret the content intelligently. Examples: `<strong>` (strong importance), `<em>` (emphasis), `<cite>` (citation). *Note: While a browser might render `<strong>` as bold by default, visually impaired users hear it spoken with emphasis.*
