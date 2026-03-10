# Module 3 - ReactJs

## What is React Js?
React Js (often just "React") is a free, open-source front-end JavaScript library. It is used for building fast, interactive user interfaces primarily for single-page applications (SPAs). It was created by Jordan Walke, a software engineer at Facebook (Meta), and first deployed on Facebook's newsfeed in 2011. React is declarative, highly efficient, and heavily utilizes a component-based architecture.

## What is NPM in React Js?
**NPM** stands for Node Package Manager. It is the default package manager for the JavaScript runtime environment Node.js. 
In the context of React, NPM is essential. You use it to install structural tools like Vite or Create React App, install third-party libraries (like React Router, Redux, Axios, styling frameworks), and easily share and run custom scripts (e.g., `npm run dev` to start your local dev server or `npm run build` to compile the app for production).

## What is Role of Node Js in react Js?
React is a client-side (browser) UI library and *can* technically run without Node.js just by importing it via CDN tags in an HTML file. However, in modern web development, Node.js plays a critical role behind the scenes:
1.  **Development Environment:** Node.js allows NPM to work, giving you access to the massive ecosystem of web tools.
2.  **Compilation/Bundling:** Browsers do not understand the JSX syntax or modern module imports used in React out-of-the-box. Node.js powers tools like Babel and Webpack (or Vite) to transpile and bundle your React code into standard JS that browsers can read.
3.  **Local Server:** Node.js spins up the fast local development server with Hot Module Replacement (HMR).
4.  *(Optional)* **Server-Side Rendering (SSR):** With frameworks like Next.js, Node.js can render React components on the server before sending HTML to the client for better SEO and perceived performance.

## What is CLI command In React Js?
**CLI** stands for Command Line Interface. It is a text-based interface used to run programs, manage computer files, and interact with the computer.
In React development, you use a terminal CLI (like Command Prompt, PowerShell, Terminal, Git Bash) to execute commands. Common React CLI commands include:
*   `npm create vite@latest my-app -- --template react` (Creates a new fast React project)
*   `npx create-react-app my-app` (Creates a legacy React project)
*   `npm install` (Downloads dependencies listed in package.json)
*   `npm run dev` (Starts the development server)

## What is Components in React Js?
Components are the independent, reusable building blocks of a React application. They let you split the UI into isolated pieces and think about each piece in isolation. Think of them like custom HTML tags or JavaScript functions.
Components accept arbitrary inputs (called "props") and return React elements detailing what should appear on the screen. There are two main types: Functional Components (modern standard) and Class Components (older standard).

## What is Header and Content Components in React Js?
These are not native, built-in structural tags of React. They are common naming conventions used by developers to logically separate a page design:
*   `<Header />` Component: A custom component built by a developer that typically contains the navigation bar, logo, and user profile links. Usually placed at the top of the root `App.js` so it renders on every page.
*   `<Content />` Component: A custom component representing the main body area where dynamic information is displayed based on the current route or state.

## How to install React Js on Windows, linux Operating System? How to install NPM and How to check version of NPM?

*   **Step 1: Install Node.js & NPM (Both Windows and Linux)**
    NPM comes bundled automatically inside Node.js. You cannot install NPM by itself.
    *   **Windows:** Go to the official [Node.js website](https://nodejs.org/) and download the Windows Installer (.msi). Run it and follow the standard installation wizard.
    *   **Linux (Ubuntu/Debian):** Open terminal and run:
        ```bash
        sudo apt update
        sudo apt install nodejs npm
        ```
*   **Step 2: Check Version**
    Open your terminal/command prompt and run:
    *   To check Node version: `node -v`
    *   To check NPM version: `npm -v`
*   **Step 3: Create a React App**
    Once Node is installed, navigate to the folder where you want your project, and run the Vite scaffolding CLI command:
    ```bash
    npm create vite@latest my-react-app -- --template react
    cd my-react-app
    npm install
    npm run dev
    ```

## How to check version of React Js?
You can check the version of React currently installed in an existing project in a few ways:
1.  **Check `package.json`:** Open the `package.json` file in the root of your project folder. Look under the `"dependencies"` object. You will see lines like `"react": "^18.2.0"`.
2.  **Via CLI:** Open the terminal in your project directory and run `npm view react version` to see the latest stable version available online, or run `npm ls react` to see the exact version installed locally in your tree.

## How to change in components of React Js?
You "change" what a component displays or how it behaves primarily using **State** and **Props**:
*   **Props (Properties):** Changes passed down from a parent component. When a parent re-renders and passes new props, the child component automatically re-evaluates and updates its UI based on the new data.
*   **State:** Local, internal data managed within the component itself (using the `useState` hook). If you call the state setter function (e.g., `setCount(count + 1)`), React acknowledges a change occurred and automatically re-renders that specific component to reflect the new state.

*Example of a state change triggering a UI update on button click:*
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state

  // When button clicked, state changes. React automatically updates the <h1>
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## How to Create a List View in React Js?
*(Note: A practical example of this is implemented in the `counter-app`.)*
The "React Way" to render lists is to take an array of data and use the JavaScript `Array.map()` function to iterate over it, returning a new array of JSX elements.
**Crucial Rule:** You must give every item rendered from an array a unique `key` prop so React can efficiently track insertions, deletions, and updates without re-rendering the entire list. Avoid using the array index as the key if the list items can be reordered or deleted.

```javascript
const groceries = [
  { id: 101, name: 'Milk' },
  { id: 102, name: 'Eggs' },
  { id: 103, name: 'Bread' }
];

function GroceryList() {
  return (
    <ul>
      {groceries.map((item) => (
        // Providing a unique key from the data object
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```
