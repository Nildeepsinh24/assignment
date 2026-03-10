# Module (JAVASCRIPT BASIC & DOM) - 4

## What is JavaScript?
JavaScript (JS) is a lightweight, interpreted, object-oriented programming language with first-class functions. While it is most well-known as the scripting language for Web pages (allowing you to implement complex features like interactive maps, 2D/3D graphics, or dynamic content updates), it is also used in many non-browser environments (like Node.js, Apache CouchDB, and Adobe Acrobat). It is one of the core technologies of the World Wide Web, alongside HTML and CSS.

## What is the use of isNaN function?
The `isNaN()` function determines whether a value is an illegal number (Not-a-Number).
It returns `true` if the given value evaluates to `NaN` (e.g., trying to divide a string by a number). Otherwise, it returns `false`. This function is necessary because you cannot reliably test for `NaN` using equality operators (`NaN == NaN` inexplicably evaluates to `false`).

## What is negative Infinity?
`Negative Infinity` (represented in JS as `-Infinity`) is a special numeric value representing a mathematical negativity that is beyond any computable negative number. It can occur as the result of a calculation, such as dividing a negative number by zero (e.g., `-1 / 0`).

## Which company developed JavaScript?
JavaScript was developed by Brendan Eich in 1995 while he was working at **Netscape Communications Corporation** (the company behind the popular Netscape Navigator web browser). It was originally named Mocha, then LiveScript, before finally being named JavaScript.

## What are undeclared and undefined variables?
*   **Undeclared Variables:** These are variables that do not exist in a program and are not declared. If a program attempts to read an undeclared variable, a runtime error (ReferenceError) is thrown. If you assign a value to an undeclared variable in non-strict mode, it implicitly becomes a global variable (which is bad practice).
*   **Undefined Variables:** These are variables that have been formally declared in the code (using `var`, `let`, or `const`), but have not yet been assigned a specific value.

## Write the code for adding new elements dynamically?
You can dynamically create, configure, and inject new HTML elements into the DOM using JavaScript methods like `document.createElement()` and `appendChild()`.

```javascript
// 1. Create a brand new <p> element
const newParagraph = document.createElement("p");

// 2. Add some text content to the new element
newParagraph.textContent = "This paragraph was dynamically added by JavaScript!";

// 3. (Optional) Add a class for styling
newParagraph.className = "dynamic-text";

// 4. Find an existing element in the DOM where you want to place the new one
const containerBox = document.getElementById("myContainer");

// 5. Append the newly created paragraph as a child inside the container
containerBox.appendChild(newParagraph);
```

## What is the difference between ViewState and SessionState?
*(Note: These concepts belong primarily to ASP.NET framework development, not pure client-side JavaScript, but answer provided for context).*
*   **ViewState:** Used to store page-specific data across round trips (postbacks) for a *single page*. The data is serialized into a hidden field sent back and forth between the client and server. It is lost when the user navigates to a new page.
*   **SessionState:** Used to store user-specific data that is persistent across *multiple pages* during a user's visit. The data is securely stored on the server memory, and only a session ID is tracked on the client (usually via a cookie).

## What is === operator?
The `===` operator is the **strict equality operator** in JavaScript. It compares two values for equality *without* attempting any type conversion. Therefore, for `===` to return true, the two values being compared must be of the exactly identical data type AND have the exact same value (e.g., `5 === 5` is true, but `5 === "5"` is false).

## How can the style/class of an element be changed?
You can change an element's style or class using the DOM API:

**Changing Inline Style:** Access the `style` object of the element directly.
```javascript
const myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = "blue"; 
myDiv.style.fontSize = "20px";
```

**Changing the Class:** Use `className` (overwrites existing classes) or the modern `classList` (adds/removes specific classes safely).
```javascript
// Overwrite all classes
myDiv.className = "highlight empty-box";

// Safely modify class list (Best Practice)
myDiv.classList.add("highlight");
myDiv.classList.remove("empty-box");
myDiv.classList.toggle("active");
```

## How to read and write a file using JavaScript?
Standard client-side JavaScript running in a web browser **cannot directly read or write arbitrary files on the user's hard drive** due to strict security sandboxing.
*   **Reading (Client-side):** To read a file, the user must explicitly select it via an `<input type="file">` element. JS can then use the `FileReader` API to read its contents into memory.
*   **Writing (Client-side):** JavaScript cannot forcefully save a file. It can use the `Blob` API to construct file data in memory, and then trigger a browser "download" prompt for the user to select where to save it.
*   **Reading/Writing (Server-side/Node.js):** Node.js *can* access the filesystem using the built-in `fs` (File System) module (e.g., `fs.readFile()` and `fs.writeFile()`).

## What are all the looping structures in JavaScript?
JavaScript provides several loop mechanisms to repeat code:
1.  **`for` loop:** Standard explicit loop (`for (let i = 0; i < 5; i++)`).
2.  **`while` loop:** Runs as long as a condition is true (`while (i < 5)`).
3.  **`do...while` loop:** Executes the block once before checking the condition.
4.  **`for...in` loop:** Iterates over the enumerable string properties (keys) of an Object.
5.  **`for...of` loop:** Iterates directly over the iterable values (like Arrays, Maps, Sets).

## How can you convert the string of any base to an integer in JavaScript?
You use the built-in `parseInt(string, radix)` function. The `string` argument is the text to parse, and the `radix` (base) argument specifies the mathematical numeral system (from 2 to 36).
```javascript
// Convert a binary string (base 2) to base 10 integer:
let binStr = parseInt("1010", 2); // Result: 10

// Convert a hexadecimal string (base 16) to base 10 integer:
let hexStr = parseInt("FF", 16);  // Result: 255
```

## What is the function of the delete operator?
The `delete` operator is exclusively used to remove a specific property from an object. If the deletion is successful (or if the property didn't exist in the first place), it returns `true`.
*Important:* However, `delete` cannot delete normal variables declared with `var`, `let`, or `const`, and it does not free up memory directly (garbage collection handles that).
```javascript
const person = { name: "John", age: 30 };
delete person.age; // The 'age' property is removed from the object
```

## What are all the types of Pop up boxes available in JavaScript?
JavaScript has three built-in dialog popup boxes:
1.  **Alert Box (`alert('message')`):** Displays a simple message and an "OK" button. Used to provide information.
2.  **Confirm Box (`confirm('Are you sure?')`):** Displays a message with "OK" and "Cancel" buttons. Returns `true` if OK is clicked, `false` otherwise. Used for user verification.
3.  **Prompt Box (`prompt('Enter name:', 'John')`):** Displays a message, a text input field (with an optional default value), and OK/Cancel buttons. Returns the inputted text string.

## What is the use of Void (0)?
`void` is a JavaScript operator that evaluates a given expression and then explicitly returns `undefined`. The syntax `void(0)` or `void 0` evaluates the literal `0` and returns `undefined`.
Historically, it was primarily used in HTML links to execute JavaScript without causing the browser to navigate away or refresh the page: `<a href="javascript:void(0);" onclick="myFunc()">Click Me</a>`. Today, this pattern is less common and discouraged in favor of button elements.

## How can a page be forced to load another page in JavaScript?
You can navigate the browser to a new URL using the native `window.location` object:
1.  **`window.location.href = 'new_url.html';`** (Standard redirection, adds the current page to the browser's session history so the back button works).
2.  **`window.location.replace('new_url.html');`** (Redirects, but *replaces* the current item in the history state. The user cannot click "back" to return to the redirecting page).
3.  **`window.location.assign('new_url.html');`** (Operationally identical to setting `.href`).

## What are the disadvantages of using innerHTML in JavaScript?
While `innerHTML` is a quick way to update DOM content, it has significant drawbacks:
*   **Security Risk (XSS):** If you use `innerHTML` to set content based on user input without strict sanitization, malicious users can inject harmful `<script>` tags, leading to Cross-Site Scripting attacks.
*   **Performance Hit:** Unlike DOM manipulation methods that surgically append nodes (like `appendChild`), when you update `innerHTML`, the browser must completely obliterate and re-parse all existing DOM nodes inside that element, breaking any attached event listeners and taking up processing power.
*   **Breaks Event Listeners:** As mentioned above, replacing `innerHTML` destroys elements and replaces them with new clones. Any JavaScript `addEventListener` attached to the old inner elements is permanently lost.
