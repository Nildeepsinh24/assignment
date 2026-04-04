# Q3: Why is this.setState() used in class components?

In class components, `this.setState()` is the correct way to update state.

React tracks these updates and triggers re-rendering. Direct mutation like `this.state.count = 1` is not recommended because it bypasses React update flow.
