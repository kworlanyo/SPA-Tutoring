# SPA - React Band - Part 4

In this repo you will find a version of the "Band" app (using only props - no Context).

Your job is to refactor this project so it uses `useReducer` instead of `useState`.

When you are done, the app should not use `useState` anywhere, and should still work correctly.

## Requirements

### State

Once you have imported `useReducer`, the state variables in the current project:

- `users` (in `App.jsx`)
- `loggedInUserId` (in `App.jsx`)
- `formError` (in `App.jsx`)
- `loginDetails` (in `Login.jsx`)

Should become a single `state` object in `App.jsx`, containing the following properties:

- `users` (initial value: `[]`)
- `loggedInUserId` (initial value: `null`),
- `formError` (initial value: `false`),
- `loginDetails` (initial value: `{ username: "", password: "" }`)

### Event Handlers

The current event handlers:

- `handleLoginSubmit` (in `App.jsx`)
- `handleLogout` (in `App.jsx`)
- `handleLoginChange` (in `Login.jsx`)
- `handleSubmitButtonClicked` (in `Login.jsx`)

Will become four event handlers in `App.jsx`:

- `handleLoginSubmit`
- `handleLogout`
- `handleLoginChange`
- `handleUpdateUsers` (**new**)

Each of these event handlers should **dispatch** a relevant action to the reducer function. All action objects will have a `type` property - some may also send some data via a `payload` property.

---

## Notes 

### Note 1

When you are done, you should no longer need the `handleSubmitButtonClicked` event handler. Instead, try to work out which event handler in `App.jsx` to call (via a prop) when the `button` in `Login.jsx` is clicked.

### Note 2

The new `handleUpdateUsers` event handler can be used to update your `state` with the new users sent by JSONPlaceholder. Don't forget to send an action to the reducer function to achieve this!

---

## Hint

The browser console will be a big help with debugging! Check it out if your app isn't working as expected.

---

Good luck, and have fun. :smile: