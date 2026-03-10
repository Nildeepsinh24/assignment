# Module - 2 Advance JavaScript

## What is JavaScript Output method?
JavaScript does not have any built-in print or output functions native to the core language itself. Instead, it relies on the environment it is running in (specifically the Web Browser's API or Node.js environment) to provide methods for outputting or displaying data. These methods are used for displaying information to users or for debugging code.

## How to used JavaScript Output method?
In a web browser environment, there are four primary methods used to "output" data using JavaScript:

**1. Writing into an HTML element (`innerHTML`)**
This is the most common way to display data on a webpage. You access an HTML element using `document.getElementById(id)` and change its exact content.
```javascript
document.getElementById("myLabel").innerHTML = "Hello World!";
```

**2. Writing directly into the HTML output (`document.write()`)**
This writes content directly to the HTML document stream. 
*Warning:* If you use `document.write()` after an HTML document has fully loaded, it will delete all existing HTML completely and replace it with your newly written string. Thus, it is primarily used for testing purposes, not in production apps.
```javascript
document.write("Testing output...");
```

**3. Writing into an alert box (`window.alert()`)**
This pops up a dialog box over the browser window containing the specific string of text. The user must click "OK" to dismiss it and continue using the page.
```javascript
window.alert("Your form was submitted successfully!");
// You can also just write alert("...") without the window prefix.
```

**4. Writing into the browser console (`console.log()`)**
This is entirely for developers. It logs data (objects, arrays, variables) invisibly to the user in the browser's developer tools console. Ideal for debugging.
```javascript
console.log("The current value of X is: " + x);
```

## How to used JavaScript Events to do all examples?
HTML events are "things" that happen to HTML elements (like a user clicking a button, hovering over text, or finishing typing in an input field). JavaScript can react to these events using Event Handlers or Event Listeners.

**Example 1: Using `innerHTML` triggered by a Click Event**
```html
<p id="demo">Original text</p>
<button onclick="changeText()">Click to Output Text</button>

<script>
function changeText() {
  // Outputs data to the paragraph
  document.getElementById("demo").innerHTML = "Text changed via JS Output!";
}
</script>
```

**Example 2: Using `window.alert()` triggered by an Input Change Event**
```html
<input type="text" id="myInput" onchange="showAlert()">

<script>
function showAlert() {
  // Outputs an alert when the input loses focus after changing
  alert("Input value changed!");
}
</script>
```

**Modern Event Listener Approach (Best Practice):**
Instead of inline HTML attributes (`onclick=".."`), modern JS uses event listeners directly in the script file.
```html
<button id="myButton">Log to Console</button>

<script>
const btn = document.getElementById("myButton");

btn.addEventListener("click", function() {
    // Outputs to developer tools on click
    console.log("Button clicked!");
});
</script>
```
