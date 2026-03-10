# Module (HTML5) - 3

## What are the new tags added in HTML5?
HTML5 introduced numerous new tags designed to provide better structure, specialized functionality, and rich media support without needing third-party plugins. Some of the most notable new tags include:

**Semantic/Structural Tags:**
*   `<header>`: Defines a header for a document or section.
*   `<footer>`: Defines a footer for a document or section.
*   `<nav>`: Defines navigation links.
*   `<article>`: Defines independent, self-contained content.
*   `<section>`: Defines a major section in a document.
*   `<aside>`: Defines content aside from the main page content (like a sidebar).
*   `<main>`: Specifies the main content of a document.
*   `<figure>` & `<figcaption>`: Used to group graphic content and its caption.

**Multimedia Tags:**
*   `<audio>`: Used to embed sound content.
*   `<video>`: Used to embed video content.
*   `<source>`: Specifies multiple media resources for `<video>` and `<audio>`.
*   `<track>`: Specifies text tracks (like subtitles) for `<video>` and `<audio>`.

**Graphics Tags:**
*   `<canvas>`: Used to draw graphics on the fly via JavaScript.
*   `<svg>`: Used to embed Scalable Vector Graphics directly.

**New Form Elements:**
*   `<datalist>`: Specifies a list of pre-defined options for input controls.
*   `<output>`: Represents the result of a calculation.

## How to embed audio and video in a webpage?
HTML5 made embedding multimedia drastically simpler by introducing the native `<audio>` and `<video>` tags. You use the `src` attribute (or nested `<source>` tags) to link the media file, and attributes like `controls`, `autoplay`, and `loop` to manage playback.

**Embed Audio Example:**
```html
<audio controls>
  <!-- Provide multiple formats for browser compatibility -->
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

**Embed Video Example:**
```html
<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video element.
</video>
```

## Semantic elements in HTML5?
A semantic element clearly describes its meaning to both the browser and the developer (and assistive technologies like screen readers). 
Before HTML5, developers relied heavily on `<div>` tags with class or ID names (e.g., `<div id="footer">`) to structure pages. While humans could interpret these names, machines could not natively understand the page's architecture.

HTML5 semantic elements fixed this.
*   **Non-semantic elements:** `<div>` and `<span>` (Tells nothing about its content).
*   **Semantic elements:** `<form>`, `<table>`, and `<article>` (Clearly defines its content).

**Key HTML5 Semantic Elements:**
*   `<header>`: Introduces a section or page (often contains logos and main headings).
*   `<nav>`: A block of navigation links.
*   `<main>`: The dominant content of the `<body>`.
*   `<article>`: A self-contained composition (like a blog post or news story) that makes sense independently.
*   `<section>`: A thematic grouping of content, typically with a heading.
*   `<aside>`: Content tangentially related to the content around it (e.g., sidebars, call-out boxes).
*   `<footer>`: The closing section containing authorship, copyright, and secondary links.
*   `<time>`: Represents a specific period in time or a date.

## Canvas and SVG tags

Both `<canvas>` and `<svg>` are incredibly powerful HTML5 tools for rendering graphics on the web, but they work fundamentally differently.

**1. `<canvas>`**
*   **What it is:** The `<canvas>` element provides a blank drawing area (a bitmap) on the page. It has no drawing abilities of its own; all drawing (lines, shapes, text, images) must be done using a JavaScript API.
*   **How it works:** It draws pixels directly to the screen. Once a shape is drawn, the browser forgets about it. If its position needs to change, the entire scene must be redrawn.
*   **Best Use Cases:** High-performance, pixel-manipulation tasks like dynamic 2D/3D browser games, complex data visualizations (rendering thousands of interactive data points), and real-time image processing.
*   **Example:** `<canvas id="myCanvas" width="200" height="100"></canvas>`

**2. `<svg>` (Scalable Vector Graphics)**
*   **What it is:** SVG is a language for describing 2D graphics in XML. Every drawn shape is considered an actual object (an element) in the HTML Document Object Model (DOM).
*   **How it works:** Because every line or circle in an SVG is a DOM element, you can attach standard CSS styling and JavaScript event handlers (like `onclick`) directly to the shapes themselves. Being vector-based, they scale infinitely with zero quality loss.
*   **Best Use Cases:** Resolution-independent graphics like logos, user interface icons, simple animations, and interactive maps.
*   **Example:**
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
