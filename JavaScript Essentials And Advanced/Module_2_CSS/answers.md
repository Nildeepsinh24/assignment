# Module (CSS and CSS 3) - 2

## What are the benefits of using CSS?
*   **Separation of Content and Presentation:** HTML defines structure (the "bones"), while CSS defines the look (the "skin"). This makes sites easier to manage.
*   **Consistency:** A single CSS file can control the layout of thousands of pages, ensuring a uniform look and feel across an entire website.
*   **Faster Page Loading:** CSS files are downloaded once and cached by the browser, reducing bandwidth and speeding up subsequent page loads.
*   **Easier Maintenance:** To change a site's colors or layout, you only need to update the central CSS file instead of every single HTML page.
*   **Device Responsiveness:** CSS enables media queries, allowing developers to create designs that adapt seamlessly to different screen sizes (mobile, tablet, desktop).

## What are the disadvantages of CSS?
*   **Browser Compatibility Issues:** Older browsers (like IE) or different rendering engines may interpret CSS rules differently, leading to inconsistent appearances.
*   **Complexity:** As websites grow, managing complex stylesheets with thousands of rules, cascading conflicts, and specificity issues can become challenging without preprocessors (like SASS/LESS).
*   **Security Risks:** While CSS itself isn't a programming language with logic, it can theoretically be used in complex ways (like CSS-based UI redressing or tracking) to capture user data, although this is rare and heavily mitigated by modern browsers.

## What is the difference between CSS2 and CSS3?
*   **Modules:** CSS3 is split into completely independent modules (e.g., Selectors, Box Model, Backgrounds, Animations), making it easier to update individual parts. CSS2 was a single, large specification.
*   **New Design Features:** CSS3 introduced modern visual elements like rounded corners (`border-radius`), gradients, drop shadows (`box-shadow`), opacity, and RGBA colors.
*   **Animations and Transitions:** CSS3 added native support for animating elements and transitioning styles smoothly over time without needing JavaScript or Flash.
*   **Web Fonts:** CSS3 allows developers to use custom fonts (`@font-face`) downloaded from the web, rather than relying only on fonts installed on the user's computer.
*   **Flexbox and Grid:** CSS3 introduced advanced, robust layout systems (Flexbox for 1D, Grid for 2D) that revolutionized page building.

## Name a few CSS style components
A complete CSS rule consists of several components:
1.  **Selector:** Points to the HTML element(s) you want to style (e.g., `h1`, `.btn`, `#header`).
2.  **Declaration Block:** The curly braces `{ ... }` containing one or more declarations.
3.  **Declaration:** A combination of a property and a value (e.g., `color: blue;`).
4.  **Property:** The specific styling attribute you want to change (e.g., `font-size`, `margin`, `background`).
5.  **Value:** The setting applied to the property (e.g., `16px`, `auto`, `red`).

## What do you understand by CSS opacity?
The `opacity` property in CSS defines the transparency level of an element. It takes a value between `0.0` (completely transparent/invisible) and `1.0` (completely opaque/solid).
*Example:* `opacity: 0.5;` makes an element exactly 50% see-through. Note that applying opacity to a parent element also makes all its child elements transparent.

## How can the background color of an element be changed?
You change the background color using the `background-color` property. You can specify the color using a color name, Hex code, RGB, or HSL value.
```css
div {
    background-color: #ff0000; /* Red */
}
```

## How can image repetition of the backup be controlled?
If a background image is smaller than its container, it repeats by default. You control this using the `background-repeat` property:
*   `repeat` (default): Repeats both horizontally and vertically.
*   `repeat-x`: Repeats horizontally only.
*   `repeat-y`: Repeats vertically only.
*   `no-repeat`: Displays the image only once without repeating.

## What is the use of the background-position property?
The `background-position` property defines the starting position of a background image within its container.
It can take keywords (like `top`, `bottom`, `left`, `right`, `center`), percentages (e.g., `50% 50%`), or exact measurements (e.g., `10px 20px`).
```css
body {
    background-image: url('logo.png');
    background-position: top right;
}
```

## Which property controls the image scroll in the background?
The `background-attachment` property determines whether a background image scrolls with the rest of the page or remains fixed in the viewport.
*   `scroll` (default): The background scrolls along with the page.
*   `fixed`: The background is fixed relative to the viewport; it doesn't move when scrolling.
*   `local`: The background scrolls along with the element's inner contents.

## Why should background and color be used as separate properties?
While there is a shorthand `background` property that combines them, using `background-image` and `background-color` separately offers better control, readability, and fallbacks. 
Crucially, if a user's browser fails to load the background image (due to a broken link or slow connection), the `background-color` will display in its place, ensuring the text remains legible against the intended background shade.

## How to center block elements using CSS1?
The classic way to center a block-level element (like a `<div>`) horizontally within its parent is to give it a specific `width` and set the left and right margins to `auto`.
```css
.centered-div {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    /* Shorthand: margin: 0 auto; */
}
```

## How to maintain the CSS specifications?
Maintaining CSS involves following structured conventions and methodologies (like BEM, SMACSS, or OOCSS). It also means organizing stylesheets logically, using comments, avoiding overly specific selectors, utilizing preprocessors like SASS (for variables and nesting), and frequently refactoring unused code to keep the file sizes small and readable.

## What are the ways to integrate CSS as a web page?
There are three primary ways to integrate CSS into HTML:
1.  **Inline CSS:** Using the `style` attribute directly on an HTML element.
2.  **Internal (Embedded) CSS:** Using the `<style>` tag within the HTML `<head>` section.
3.  **External CSS:** Linking to a separate `.css` file using the `<link>` tag in the `<head>` section.

## What is embedded style sheets?
Embedded style sheets (or Internal CSS) refer to CSS rules defined directly inside a single HTML document. They are positioned within a `<style>` block located inside the `<head>` element. They only affect the document they are written in.
```html
<head>
    <style>
        body { background-color: lightblue; }
    </style>
</head>
```

## What are the external style sheets?
External style sheets are independent files containing only CSS rules (usually saved with a `.css` extension, like `styles.css`). They are linked to an HTML document using the `<link>` tag. This is the most efficient method for styling websites because one file can control the look of multiple pages.
```html
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

## What are the advantages and disadvantages of using external style sheets?
*   **Advantages:**
    *   One file controls the layout of many documents.
    *   Significantly easier maintenance and updates.
    *   Improves page loading speed (the `.css` file is cached).
    *   Cleaner HTML code (separation of concerns).
*   **Disadvantages:**
    *   Requires an extra HTTP request to fetch the `.css` file, slightly delaying initial render time.
    *   If the path to the file is incorrect, the page will load without styling, breaking the layout completely.

## What is the meaning of the CSS selector?
A CSS selector is the part of a CSS rule set that tells the browser *which* HTML element(s) the styling should be applied to. It acts as a pattern matching engine. Examples include selecting element types (`h1`), classes (`.my-box`), IDs (`#header`), or complex combinations (`div.container > p:first-child`).

## What are the media types allowed by CSS?
CSS allows you to tailor layouts for different physical media or devices using `@media` rules. Common media types include:
*   `all`: Used for all media type devices (default).
*   `print`: Used for printers (e.g., removing background colors and hiding navigation menus when a user prints the page).
*   `screen`: Used for computer screens, tablets, smartphones, etc.
*   `speech`: Used for screen readers that "read" the page out loud.

## What is the rule set?
A rule set (or simply a "rule") is the basic building block of CSS. It consists of a **selector** followed by a **declaration block**. The selector dictates what is being styled, and the declaration block dictates how it should look.
```css
/* This entire block is one rule set */
h1 { 
    color: blue; 
    font-size: 24px; 
}
```

## Create Layouts
*Please refer to `layouts.html` to view the implementation of the complex Thumbnail Grid layout shown in the assignment image.*
