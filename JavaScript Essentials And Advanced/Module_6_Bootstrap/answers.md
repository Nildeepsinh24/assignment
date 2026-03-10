# Module (Bootstrap Basic & Advanced) - 6

## What are the advantages of Bootstrap?
*   **Rapid Development:** Bootstrap provides numerous pre-styled components (buttons, navbars, cards, modals) and a powerful grid system, saving hours of manual CSS coding.
*   **Responsiveness:** Its mobile-first architecture ensures that websites look great on smartphones, tablets, and desktops out-of-the-box.
*   **Cross-Browser Compatibility:** Bootstrap components are rigorously tested to work consistently across all modern browsers (Chrome, Firefox, Safari, Edge).
*   **Customizable:** You can easily customize it by changing SASS variables, choosing which components to download, or simply overriding its CSS with your own.
*   **Large Community:** Being the most popular front-end framework means infinite resources, templates, and solutions for common problems are available online.

## What is a Bootstrap Container, and how does it work?
Containers are the most fundamental layout element in Bootstrap. They are meant to pad, center, and sometimes uniformly restrict the maximum width of the content they contain.
*   `.container`: Sets a `max-width` at each responsive breakpoint (creating "jumps" as you resize the screen).
*   `.container-fluid`: Spans 100% width of the viewport across all device sizes seamlessly.

## What are the default Bootstrap text settings?
Bootstrap 5 sets basic global display typography and styling:
*   **Default `font-family`:** It uses a "native font stack" that selects the best font for each OS for optimum text rendering (e.g., San Francisco for Apple, Segoe UI for Windows, Roboto for Android).
*   **Default `font-size`:** Usually `1rem` (which translates to 16px by default).
*   **Default `line-height`:** Set to `1.5`.
*   **Default `color`:** Dark gray (`#212529`) applied to the `<body>`.
*   **Background Color:** The `<body>` has a default `background-color` of white (`#fff`).

## What do you know about the Bootstrap Grid System?
Bootstrap's grid system is built with flexbox and allows up to 12 columns across the page. It's fully responsive, using tiers of classes based on screen widths (breakpoints).
*   It requires a specific hierarchy: Container > Row > Column (`.container` > `.row` > `.col-*`).
*   The 12 columns can be grouped in various ways (e.g., three `.col-4` divs will create an equally spaced 3-column layout).
*   It has six responsive tiers natively in v5: `xs`, `sm`, `md`, `lg`, `xl`, and `xxl`.

## What is the difference between Bootstrap 4 and Bootstrap 5?
*   **JQuery:** The largest change. Bootstrap 5 completely dropped jQuery as a dependency, rewriting all JavaScript plugins in vanilla JS.
*   **Internet Explorer:** Bootstrap 5 dropped support for IE10 and IE11.
*   **CSS Custom Properties:** Bootstrap 5 utilizes native CSS variables much more heavily instead of relying strictly on Sass compilation.
*   **Icons:** Bootstrap 5 introduced its own robust, open-source SVG icon library (Bootstrap Icons). Bootstrap 4 relied on third parties like FontAwesome.
*   **Utility API:** V5 introduced an extensible utility API allowing developers to easily generate custom utility classes.

## What is a Button Group, and what is the class for a basic Button Group?
A button group simply groups a series of buttons together on a single line with attached (flush) edges.
*   The basic class wrapper to create it is `.btn-group`.
*   You simply place standard `.btn` elements inside this wrapper.
```html
<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
```

## How can you use Bootstrap to make thumbnails?
You can quickly create image thumbnails using the `.img-thumbnail` class. This gives the image a rounded 1px border appearance. You also usually combine it with `.img-fluid` so it scales well.
```html
<img src="picture.jpg" class="img-thumbnail img-fluid" alt="...">
```

## In Bootstrap 4, what is flexbox?
Flexbox (Flexible Box Layout Module) is a CSS3 web layout model used heavily inside Bootstrap starting natively from version 4. It provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic. Bootstrap exposes this power through numerous utility classes (e.g., `.d-flex`, `.justify-content-center`, `.align-items-start`).

## How can one create an alert in Bootstrap?
An alert is a pre-styled message box to provide contextual feedback messages. You create it by adding `.alert` and one of the contextual modifier classes (like `.alert-success` or `.alert-danger`) to a basic `<div>`.
```html
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
```

## What is a bootstrap card and how would you create one?
A Bootstrap card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content (like images, text, list groups), contextual background colors, and powerful display options.
To create a standard card, use `.card`, and nest `.card-body`, `.card-title`, and `.card-text` inside.

*Please refer to `bootstrap_card.html` in this directory. I have built the specific profile card requested in the assignment image using standard Bootstrap card classes.*
