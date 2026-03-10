# Module 7) React - Applying Redux

## What is Redux?
Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. 
Instead of passing state down through multiple layers of components (prop drilling), Redux provides a single, centralized "Store". Any component in the application can connect directly to this store to read data or trigger actions to update the data. It enforces a strict unidirectional data flow (Action -> Reducer -> Store -> UI).

## What is Redux Thunk used for?
Redux itself is strictly synchronous; it expects an action to be dispatched and immediately processed by a reducer to update the state.
**Redux Thunk** is a middleware that allows you to write action creators that return a *function* instead of an action object. This is essential for handling **asynchronous logic** like making API calls (e.g., fetching data from a database), delaying the dispatch of an action, or dispatching multiple actions based on certain conditions over time.

## What is Pure Component? When to use Pure Component over Component?
*   **Component:** A standard React Class Component (`React.Component`). Whenever its parent re-renders, or its `setState()` is called, it will *always* trigger a re-render by default, even if the new state/props are identical to the old ones.
*   **Pure Component:** (`React.PureComponent`) is essentially the same, but it implements the `shouldComponentUpdate()` lifecycle method under the hood with a **shallow prop and state comparison**. If the previous props/state are strictly equal (`===`) to the next props/state, it skips the re-render.

**When to use Pure Component:**
Use it to optimize performance when a component receives complex props but frequently receives the *exact same* props across multiple parent renders. 
*Note:* Do not use it if your state or props contain deeply nested mutating objects (like arrays where you push items instead of copying), as the shallow comparison will fail to detect the change and the UI won't update. (In modern functional React, `React.memo` is the equivalent of a Pure Component).

## What is the second argument that can optionally be passed to setState and what is its purpose?
In a React Class Component, `this.setState(updater, [callback])` accepts an optional second argument: a **callback function**.
Because `setState()` acts asynchronously (React batches state updates for performance), reading `this.state` immediately after calling `setState()` will usually return the *old* value, not the updated one. 
The purpose of the callback function is to guarantee that logic is executed **only after** the state has been successfully updated and the component has fully re-rendered.

```javascript
// Example
this.setState({ count: 5 }, () => {
    console.log("State is guaranteed to be updated here:", this.state.count);
});
```

## Create a Table and Search data from table using React Js? & Create Login registration with CRUD Application using API (Redux)
*A practical implementation combining both of these requirements (A comprehensive Redux CRUD app with User Login, Product Table, and Search filtering) has been built in the `redux-crud-app` folder using Redux Toolkit.*
