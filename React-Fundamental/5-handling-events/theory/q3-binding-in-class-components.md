# Q3: Why bind event handlers in class components?

Class methods are not bound to the class instance by default.

If not bound, `this` inside the handler may be `undefined`. Binding in constructor (or using arrow methods) keeps the correct `this` context.
