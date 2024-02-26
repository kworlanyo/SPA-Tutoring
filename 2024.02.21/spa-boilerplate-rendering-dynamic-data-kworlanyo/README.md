# Rendering from objects

This quick exercise is about practicing how to render data from an object in JSX.

In `App.jsx` you will find the following JavaScript object:

```js
const customer = {
    first_name: 'Bob',
    last_name: 'Dylan',
}
```

## Requirements

Open `App.jsx` and create the JSX code to make your file render the following output into the DOM, using the `customer` object. This means you should not write "Bob" or "Dylan" yourself.

```html
<div>
    <h1>My name is Bob</h1>
    <h2>My last name is Dylan</h2>
</div>
```

Now open the VS Code terminal and run `npm install`. Next, see if you can remember the command to start a development server. Check your page in the browser. Make sure you can see the words "Bob" and "Dylan".