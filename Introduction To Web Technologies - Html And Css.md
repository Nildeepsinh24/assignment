
## Module 16: CSS Selectors & Styling

### Question 1: What is a CSS selector? Provide examples of element, class, and ID selectors.

A CSS selector is a pattern used to target HTML elements for styling.

**Types:**
- **Element Selector:** Targets all instances of an element
  ```css
  p { color: blue; }
  ```

- **Class Selector:** Targets elements with a specific class (`.classname`)
  ```css
  .highlight { background-color: yellow; }
  ```

- **ID Selector:** Targets a unique element with an ID (`#idname`)
  ```css
  #header { background-color: navy; }
  ```

**Key Difference:** Element selectors apply to all matching elements, class selectors to multiple elements with that class, and ID selectors to one unique element.


### Question 2: Explain the concept of CSS specificity. How do conflicts between multiple styles get resolved?

CSS specificity determines which style applies when multiple rules target the same element.

**Priority Order:**
- Inline styles (highest): `style="color: red;"`
- ID selectors: `#id { }`
- Class selectors: `.class { }`
- Element selectors (lowest): `p { }`

**Example:**
```css
p { color: blue; }           /* Lowest specificity */
.highlight { color: red; }   /* Medium specificity - Wins */
#special { color: green; }   /* Highest specificity - Wins */
```

**Resolution:** Higher specificity wins. If equal, the last rule in CSS file applies. `!important` overrides all (use sparingly).


### Question 3: What is the difference between internal, external, and inline CSS? Discuss advantages and disadvantages.

**Inline CSS:** Applied directly to elements via `style` attribute
```html
<p style="color: blue;">Text</p>
```
✓ Quick to apply | ✗ Not reusable, clutters HTML

**Internal CSS:** Defined in `<style>` tag in `<head>`
```html
<head><style>p { color: blue; }</style></head>
```
✓ Separate from HTML | ✗ Only works for one page

**External CSS:** Separate `.css` file linked in HTML
```html
<link rel="stylesheet" href="styles.css">
```
✓ Reusable across pages, organized, cached | ✗ Extra HTTP request

**Best Practice:** Use external CSS for production websites.

---

## Module 5: CSS Box Model

### Question 1: Explain the CSS box model and its components. How does each affect the size?

The box model describes how elements are sized. Components (inside to outside):

1. **Content:** The actual content - defined by width/height
2. **Padding:** Space inside the border (inside the element)
3. **Border:** Line around the padding
4. **Margin:** Space outside the border (between elements)

**How Each Affects Size (with default `box-sizing: content-box`):**
- **Total Width** = width + padding-left + padding-right + border-left + border-right
- **Total Height** = height + padding-top + padding-bottom + border-top + border-bottom
- **Margin** adds space outside but doesn't change element size

**Example:**
```css
.box { width: 300px; padding: 20px; border: 5px solid; }
/* Actual size: 350px (300+20+20+5+5) */
```


### Question 2: What is the difference between border-box and content-box box-sizing?

**`content-box` (DEFAULT):**
Width/height apply only to content. Padding and border are added.
```css
.box { width: 300px; padding: 20px; border: 5px; }
/* Actual size: 350px (300+20+20+5+5) */
```

**`border-box`:**
Width/height include content, padding, and border.
```css
.box { box-sizing: border-box; width: 300px; padding: 20px; border: 5px; }
/* Actual size: 300px (total) */
```

| Property | content-box | border-box |
|----------|-------------|-----------|
| Width includes | Content only | Content + padding + border |
| Predictable size | ✗ No | ✓ Yes |
| Responsive-friendly | ✗ Hard | ✓ Easy |

**Recommendation:** Use `border-box` globally:
```css
* { box-sizing: border-box; }
```

---

## Module 6: CSS Flexbox

### Question 1: What is CSS Flexbox? Explain flex-container and flex-item.

Flexbox is a one-dimensional layout model for organizing elements along a row or column with automatic space distribution.

**Flex Container:** Parent element with `display: flex` - manages layout of its children
**Flex Items:** Direct children of flex container - automatically become flexible

**Advantages:**
- Responsive layouts without floats
- Easy vertical/horizontal alignment
- Automatic space distribution
- Mobile-friendly

**Common Use Cases:** Navigation bars, centered content, equal-width columns, component layouts


### Question 2: Describe justify-content, align-items, and flex-direction.

**`justify-content`** - Controls items along main axis (horizontal by default)
```css
justify-content: flex-start;   /* Default: items at start */
justify-content: center;       /* Center items */
justify-content: space-between; /* Space items equally */
justify-content: space-around;  /* Equal space around items */
```

**`align-items`** - Controls items along cross axis (vertical by default)
```css
align-items: stretch;    /* Default: stretch to fill */
align-items: center;     /* Center vertically */
align-items: flex-start;  /* Align to top */
align-items: flex-end;   /* Align to bottom */
```

**`flex-direction`** - Defines main axis direction
```css
flex-direction: row;            /* Default: horizontal left-to-right */
flex-direction: row-reverse;    /* Horizontal right-to-left */
flex-direction: column;         /* Vertical top-to-bottom */
flex-direction: column-reverse;  /* Vertical bottom-to-top */
```

---

## Module 7: CSS Grid

### Question 1: Explain CSS Grid and how it differs from Flexbox. When use Grid over Flexbox?

CSS Grid is a 2D layout system using rows and columns for precise element placement.

**Flexbox vs Grid:**

| Aspect | Flexbox | Grid |
|--------|---------|------|
| Dimensions | 1D (row/column) | 2D (rows + columns) |
| Placement | Automatic | Precise positioning |
| Best for | Simple layouts, components | Complex page layouts |

**When to Use Grid:** Page layouts, product grids, magazine-style layouts, complex designs
**When to Use Flexbox:** Navigation bars, single row/column layouts, component alignment

**Best Practice:** Use Grid for page layout, Flexbox for components.


### Question 2: Describe grid-template-columns, grid-template-rows, and grid-gap.

**`grid-template-columns`** - Defines column sizes
```css
grid-template-columns: 200px 1fr 200px;      /* Fixed and flexible */
grid-template-columns: repeat(3, 1fr);       /* 3 equal columns */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */
```

**`grid-template-rows`** - Defines row sizes
```css
grid-template-rows: 60px 1fr 60px;  /* Header, content, footer */
grid-template-rows: repeat(3, 1fr); /* 3 equal rows */
```

**`grid-gap`** - Spacing between grid items
```css
gap: 20px;           /* 20px gap everywhere */
gap: 10px 20px;      /* 10px row gap, 20px column gap */
row-gap: 10px;       /* Only between rows */
column-gap: 20px;    /* Only between columns */
```

**Quick Example:**
```css
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

---

## Module 8: Responsive Web Design with Media Queries

### Question 1: What are media queries in CSS, and why are they important for responsive design?

Media queries apply different CSS styles based on device characteristics (screen size, orientation, resolution).

**Basic Syntax:**
```css
@media (max-width: 768px) { /* Styles for screens ≤ 768px */ }
@media (min-width: 1024px) { /* Styles for screens ≥ 1024px */ }
```

**Why Important:**
- ✓ Adapts website to different devices
- ✓ Improves user experience
- ✓ Better SEO ranking
- ✓ Single codebase for multi-device
- ✓ Maintains functionality on all screens

**Common Breakpoints:**
```css
@media (max-width: 480px) { }   /* Mobile */
@media (max-width: 768px) { }   /* Tablet */
@media (min-width: 1024px) { }  /* Desktop */
```


### Question 2: Write a media query that adjusts font size for screens smaller than 600px.

```css
/* Default font sizes */
body { font-size: 18px; }
h1 { font-size: 32px; }
h2 { font-size: 24px; }

/* Media query for screens < 600px */
@media (max-width: 599px) {
  body { font-size: 14px; padding: 10px; }
  h1 { font-size: 24px; margin: 10px 0; }
  h2 { font-size: 18px; }
  .columns { grid-template-columns: 1fr; gap: 10px; }
  button { width: 100%; padding: 12px; font-size: 16px; }
}
```

---

## Module 9: Typography and Web Fonts

### Question 1: Difference between web-safe fonts and custom web fonts. Why use web-safe?

**Web-Safe Fonts:** Pre-installed fonts (Arial, Georgia, Verdana) - instant load, no download needed
**Custom Web Fonts:** Font files hosted online - consistent across all devices

| Aspect | Web-Safe | Custom |
|--------|----------|--------|
| Load time | Instant | Slower |
| Consistency | Varies | Consistent |
| File size | None | 10-100KB |
| Browser support | 100% | 95%+ |

**Use Web-Safe When:**
- Performance is critical (mobile-first apps)
- Limited bandwidth
- Want guaranteed fallback

**Use Custom When:**
- Brand consistency needed
- Design uniqueness important
- Modern/special fonts required

**Recommendation:** Use custom font with web-safe fallback:
```css
body { font-family: 'CustomFont', Arial, sans-serif; }
```


### Question 2: What is font-family? How to apply custom Google Font?

**`font-family` Property:** Specifies which font to use. Browser tries fonts left-to-right, using first available.

```css
body { font-family: Arial, Helvetica, sans-serif; }
/* Try Arial → Helvetica → any sans-serif */
```

**Always Include Generic Family at End:**
```css
.heading { font-family: Georgia, 'Times New Roman', serif; }
.code { font-family: 'Courier New', Courier, monospace; }
```

---

**How to Apply Google Font:**

**Step 1: Add Link in HTML `<head>`**
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

**Step 2: Use in CSS**
```css
body { font-family: 'Roboto', sans-serif; }
h1 { font-weight: 700; }
```

**Better Performance (add preconnect):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

**Tips:**
- Only load needed font weights
- Use `display=swap` for better performance
- Always provide fallback fonts

---

