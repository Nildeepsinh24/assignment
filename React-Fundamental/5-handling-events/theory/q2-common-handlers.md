# Q2: Common handlers: onClick, onChange, onSubmit

- `onClick`: used for button actions.
- `onChange`: used for capturing input changes.
- `onSubmit`: used for form submission.

Typical pattern in forms is to call `event.preventDefault()` inside `onSubmit` to avoid full page reload.
