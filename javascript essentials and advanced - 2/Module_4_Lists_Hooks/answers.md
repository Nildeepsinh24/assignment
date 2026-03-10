# Module 4 - Lists and Hooks

## Explain Life cycle in Class Component and functional component with Hooks

In React, components go through a "Lifecycle" of three main phases: **Mounting** (being created and inserted into the DOM), **Updating** (being re-rendered due to changes in state or props), and **Unmounting** (being removed from the DOM). 

How you interact with these phases depends heavily on whether you are using traditional Class Components or modern Functional Components.

### 1. The Class Component Lifecycle
Class components have specific, named lifecycle methods (functions) that React calls automatically at different points during the component's life.

*   **Mounting Phase:**
    1.  `constructor()`: The very first method called. Used to initialize `this.state` and bind event handlers.
    2.  `render()`: Required. Returns the actual JSX (HTML) to be drawn on screen.
    3.  `componentDidMount()`: Called immediately *after* the component is inserted into the DOM. This is the perfect place to make API calls, set up subscriptions, or initialize third-party DOM libraries.

*   **Updating Phase:** (Triggered by `setState` or new props)
    1.  `render()`: Called again to calculate the new UI.
    2.  `componentDidUpdate(prevProps, prevState)`: Called immediately after the update occurs. Good for performing DOM operations or network requests that depend on the changed state.

*   **Unmounting Phase:**
    1.  `componentWillUnmount()`: Called right before the component is destroyed. You MUST use this to clean up anything you started in `componentDidMount` (like clearing `setInterval` timers, canceling network requests, or removing manual event listeners) to prevent memory leaks.

### 2. The Functional Component Lifecycle (Using Hooks)
Modern React (v16.8+) introduced Hooks, which allow functional components to "hook into" state and lifecycle features without needing classes. The primary hook for lifecycle management is `useEffect()`.

The beauty of `useEffect` is that it combines `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` into a single, cohesive API. It runs *after* every render by default, but you control when it executes using a **dependency array**.

*   **Mounting (equivalent to `componentDidMount`):**
    Pass an *empty array* `[]` as the second argument. The effect will only run exactly once after the initial render.
    ```javascript
    useEffect(() => {
        console.log("Component mounted! Time to fetch data.");
    }, []); 
    ```

*   **Updating (equivalent to `componentDidUpdate`):**
    Pass specific state variables or props in the dependency array. The effect will only run when those specific values change.
    ```javascript
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // Only runs if 'count' changes
    ```

*   **Unmounting (equivalent to `componentWillUnmount`):**
    Return a "cleanup" function from inside the `useEffect`. React will call this cleanup function right before the component unmounts (or before running the effect again on the next render).
    ```javascript
    useEffect(() => {
        const timer = setInterval(() => console.log('Tick'), 1000);

        // Cleanup function
        return () => {
            clearInterval(timer);
            console.log("Component unmounting, timer cleared.");
        };
    }, []);
    ```

### Summary Comparison

| Phase | Class Component Method | Functional Component Hook |
| :--- | :--- | :--- |
| **State Initialization**| `constructor()` | `useState()` hook |
| **Mounting** | `componentDidMount()` | `useEffect(..., [])` (Empty dependency array) |
| **Updating** | `componentDidUpdate()` | `useEffect(..., [deps])` (With specific dependencies)|
| **Unmounting** | `componentWillUnmount()`| Return function inside `useEffect()` |
