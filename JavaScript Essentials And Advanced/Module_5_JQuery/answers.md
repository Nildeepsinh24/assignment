# Module (JQuery Basic, Effects & Advanced) - 5

## What is jQuery?
**jQuery** is a fast, small, and feature-rich JavaScript library. It was created by John Resig in 2006 to simplify client-side HTML scripting. Its defining feature is its ease of use; it makes things like HTML document traversal and manipulation (the DOM), event handling, animating, and Ajax operations much simpler with an easy-to-use API that works consistently across a multitude of browsers. Its famous motto is *"Write less, do more."*

## How to Apply CSS Using JQuery?
You can apply single or multiple CSS properties to selected elements using the `.css()` method in jQuery.

*   To check an existing CSS property: `$("div").css("background-color");`
*   To set a single CSS property: `$("div").css("background-color", "yellow");`
*   To set multiple CSS properties (using an object):
```javascript
$("div").css({
  "background-color": "yellow",
  "font-weight": "bolder",
  "margin-top": "20px"
});
```

## How to Add Class and Remove Class in Jquery?
jQuery provides straightforward methods to manipulate element classes:

*   **Add Class (`.addClass()`):** Appends the specified class(es) to the matched elements.
    *   `$("#myElement").addClass("highlight");`
*   **Remove Class (`.removeClass()`):** Removes a single class, multiple classes, or all classes from each element.
    *   `$("#myElement").removeClass("highlight");`
*   **Toggle Class (`.toggleClass()`):** Adds the class if it is not present, and removes the class if it is present. This is extremely useful for buttons and interactive menus.
    *   `$("#myElement").toggleClass("active");`

## JQuery Animation?
jQuery provides built-in methods for standard, simple animations as well as a powerful custom animation method:
*   **Fading Methods:** `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`, `.fadeTo()`
    *   `$("#box").fadeOut(1000); // fades out over 1 second`
*   **Sliding Methods:** `.slideDown()`, `.slideUp()`, `.slideToggle()`
    *   `$("#panel").slideDown("slow");`
*   **Custom Animation (`.animate()`):** Allows you to create completely custom animations by smoothly transitioning CSS properties over a set duration.
    *   `$("#box").animate({ left: '250px', opacity: '0.5' }, 1500);`

## How to create slider with animation?
*Please refer to `slider.html` in this directory. I have built a fully functional, animated image slider using jQuery to demonstrate this capability.*
