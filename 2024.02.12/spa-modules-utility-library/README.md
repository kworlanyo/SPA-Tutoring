# Building a Utility Library

Create a collection of JavaScript utility functions to perform simple tasks. You'll learn to organize your codebase using ES6 modules in Node.js, allowing for efficient code organization, reusability, and maintainability.

## What You Will Be Doing

In this assignment, you will be developing a simple utility library comprised of several ES6 modules. Each module will contain a single function, and these functions will be brought together into a single, exported object in a central `index.js` file.

## Tasks

### Task 1: Initializing npm

Initialize npm in the root of the project.

Make sure you get a `package.json` file, and that you use it to configure your project to use ES6 modules (**hint:** use (`"type": "module"` in the right place!).

### Task 2: Creating the Modules

Create a `utilityLibrary` directory and inside it, create several JavaScript files, each representing a different utility function. Here are examples of the modules you could create:

- `capitalize.js`: Export a function that takes a string and returns it with the first character capitalized.

- `reverseString.js`: Export a function that takes a string and returns it reversed.

- `range.js`: Export a function that takes two numbers, start and end, and returns an array of numbers from start up to (and including) end.

- Feel free to make up some more of your own modules - this could be a good chance to practice your JavaScript skills!

### Task 3: Create the Library Index

Create an `index.js` file in the utilityLibrary folder. In this file, import all the utility functions created in Task 2, and export them as an object. This will serve as the entry point to your utility library.

### Task 4: Using the Library

Create a `main.js` file, in the root of the project, import your utility library and test out each of its functions using Node.js. Make sure each utility function behaves as expected.

Expected Output:

**main.js**
```js
import utils from "./utilityLibrary/index.js";

console.log(utils.capitalize('hello')); // Outputs: 'Hello'
console.log(utils.reverseString('hello')); // Outputs: 'olleh'
console.log(utils.range(1, 5)); // Outputs: [1, 2, 3, 4, 5]
```

Remember to take one step at a time and check your work often.

### Happy coding!