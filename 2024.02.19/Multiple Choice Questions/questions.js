export const questions = [
  {
    question: "What does the DOM stand for in JavaScript?",
    options: ["Document Object Model", "Data Object Model", "Document Order Model", "Dynamic Object Model"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of the addEventListener method in JavaScript?",
    options: [
      "To add a new HTML element to the document",
      "To change the style of an element",
      "To attach an event handler function to an HTML element",
      "To create a new JavaScript variable",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the `document.getElementById('IDName')` method in JavaScript?",
    options: [
      "Selects all elements with a specific class",
      "Selects the first element with a specific id",
      "Returns a NodeList of elements with a specific tag name",
      "Adds a new element to the document",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which method is used to dynamically add a class to an HTML element in JavaScript?",
    options: [
      "classList.toggle('nameOfClass')",
      "classList.remove('nameOfClass')",
      "classList.replace('currentClass', 'newClass')",
      "classList.add('nameOfClass')",
    ],
    correctAnswer: 3,
  },
  {
    question: "How can you add an HTML element as the last child of a parent element in JavaScript?",
    options: [
      "parentElement.prepend(childElement)",
      "parentElement.append(childElement)",
      "targetElement.insertAdjacentElement('beforebegin', elementToInsert)",
      "parentElement.removeChild(childElement)",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the `getAttribute()` method in JavaScript?",
    options: [
      "Adds a new attribute to an element",
      "Removes a specific attribute from an element",
      "Retrieves the value of a specific attribute from an element",
      "Sets the content of a specific attribute in an element",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which method is used to remove an attribute from an HTML element in JavaScript?",
    options: [
      "element.setAttribute('class', 'value')",
      "element.getAttribute('nameOfAttribute')",
      "element.nameOfAttribute = 'newValue'",
      "element.removeAttribute('nameOfAttribute')",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of the `removeChild()` method in JavaScript?",
    options: [
      "Removes an attribute from an HTML element",
      "Removes the element itself from the document",
      "Removes a selected child element of a parent element",
      "Removes all child elements from a parent element",
    ],
    correctAnswer: 2,
  },
  {
    question: "How can you select all elements of a particular type in JavaScript?",
    options: [
      "document.querySelector('.nameOfClass')",
      "document.getElementById('nameOfId')",
      "document.querySelectorAll('li')",
      "document.querySelector('#nameOfId')",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the `createElement()` method in JavaScript?",
    options: [
      "Adds a new attribute to an element",
      "Creates a new HTML element with the specified tag name",
      "Selects the first element with a specific id",
      "Returns a NodeList of elements with a specific tag name",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does the `classList.toggle()` method do in JavaScript?",
    options: [
      "Toggles between adding and removing a class from an element",
      "Replaces a class with a new class on an element",
      "Adds a new class to an element",
      "Removes a specific class from an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which method is used to remove an element itself from the document in JavaScript?",
    options: ["element.removeChild(childElement)", "element.remove()", "element.removeElement()", "element.delete(childElement)"],
    correctAnswer: 1,
  },
  {
    question: "What property is used to get the parent element of an element in JavaScript?",
    options: ["parentNode", "parentElement", "parent", "getElementParent"],
    correctAnswer: 1,
  },
  {
    question: "Which property returns an HTML array collection of all the children elements of an element?",
    options: ["children", "childNodes", "childElements", "getElementChildren"],
    correctAnswer: 0,
  },
  {
    question: "What property returns a node list-like array of all the nodes inside an element?",
    options: ["nodes", "elementNodes", "childNodes", "elementChildNodes"],
    correctAnswer: 2,
  },
  {
    question: "Which property returns the next node sibling of an element, including empty spaces?",
    options: ["nextSibling", "nextElementSibling", "siblingNode", "elementSibling"],
    correctAnswer: 0,
  },
  {
    question: "What property returns the next element sibling of an element, excluding empty spaces?",
    options: ["nextSibling", "nextElementSibling", "siblingElement", "elementSibling"],
    correctAnswer: 1,
  },
  {
    question: "Which property returns the previous node sibling of an element, including empty spaces?",
    options: ["previousSibling", "prevNodeSibling", "elementPrevSibling", "prevSibling"],
    correctAnswer: 0,
  },
  {
    question: "What property returns the previous element sibling of an element, excluding empty spaces?",
    options: ["previousSibling", "prevElementSibling", "elementPrevSibling", "prevSibling"],
    correctAnswer: 1,
  },
  {
    question: "Which method is used to find the closest ancestor of an element based on the selector passed into it?",
    options: ["closestAncestor", "findClosest", "findAncestor", "closest"],
    correctAnswer: 3,
  },
  {
    question: "Which event occurs when the page is refreshed, and it is used on the document object?",
    options: ["DOMContentLoaded", "LoadPage", "RefreshPage", "PageReady"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'matches' method in JavaScript?",
    options: [
      "To match elements based on a selector",
      "To match regular expressions",
      "To compare strings",
      "To check if a function matches a callback function",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which event occurs when a key on the keyboard is pressed and released?",
    options: ["keydown", "keyup", "keypress", "keyrelease"],
    correctAnswer: 1,
  },
  {
    question: "What is the Event Object used for in JavaScript?",
    options: [
      "To store event-related data",
      "To prevent the default behavior of an event",
      "To implement the event interface with useful properties and methods",
      "To stop event propagation",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does Event Bubbling refer to in JavaScript?",
    options: [
      "An event is passed down the DOM - from grandparent to parent to target element",
      "An event is passed up the DOM - from target element to parent to grandparent",
      "It refers to events related to bubbles",
      "It is related to the shape of elements",
    ],
    correctAnswer: 1,
  },
  {
    question: "How can you stop event propagation during event bubbling?",
    options: [
      "Use event.preventDefault()",
      "Set useCapture to true",
      "Call event.stopPropagation() inside the event listener of target element",
      "Remove the event listener",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which event occurs when there is a change in an input element?",
    options: ["input", "change", "update", "modify"],
    correctAnswer: 1,
  },
  {
    question: "In Common JS, how do you export multiple functions or variables?",
    options: [
      "exports.default = { function1, function2, variable }",
      "module.exports = { function1, function2, variable }",
      "export { function1, function2, variable }",
      "export.default = { function1, function2, variable }",
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you export a function or variable as a default export in ES6 Modules?",
    options: [
      "exports.default = functionName;",
      "export default functionName;",
      "module.default = functionName;",
      "export { functionName as default };",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which attribute needs to be added to the script tag to use ES6 Modules in Node?",
    options: ["type", "module", "es6", "export"],
    correctAnswer: 0,
  },
  {
    question: "How do you import a default export in ES6 Modules?",
    options: [
      "import functionName from 'pathToFile.js';",
      "import { functionName } from 'pathToFile.js';",
      "import * as myFunctions from 'pathToFile.js';",
      "import { functionName as default } from 'pathToFile.js';",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'defer' attribute in a script tag?",
    options: [
      "To defer the execution of the script until HTML parsing is complete",
      "To execute the script while HTML parsing continues",
      "To defer the download of the script until it's explicitly called",
      "To delay the execution of the script until the 'DOMContentLoaded' event",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is a Promise used for in JavaScript?",
    options: [
      "To store synchronous data",
      "To handle asynchronous operations",
      "To create event listeners",
      "To define variables with deferred values",
    ],
    correctAnswer: 1,
  },
  {
    question: "What are the possible states of a Promise?",
    options: ["Pending, Rejected, Finished", "Loading, Success, Failure", "Start, Stop, Finish", "Pending, Resolved, Rejected"],
    correctAnswer: 3,
  },
  {
    question: "Which Promise method is used to specify what to do after the current Promise is resolved?",
    options: ["finally()", "catch()", "reject()", "then()"],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of the 'parentElement' property in DOM traversing?",
    options: [
      "To get the next sibling of an element",
      "To get the previous sibling of an element",
      "To get the parent element of an element",
      "To get the first child of an element",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the 'finally()' method in Promises?",
    options: [
      "To specify what to do after the current Promise is resolved",
      "To specify what to do after the current Promise is rejected",
      "To specify what to do when the original Promise is finally settled",
      "To specify what to do when an asynchronous operation is successful",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the fetch() method in JavaScript?",
    options: [
      "To add a new HTML element to the document",
      "To change the style of an element",
      "To make HTTP requests to a server and handle the server's response",
      "To create a new JavaScript variable",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does the 'ok' property in the response object indicate?",
    options: [
      "The request is made using the 'options' method",
      "The request is successful",
      "The request is made asynchronously",
      "The request is made using the 'defer' attribute",
    ],
    correctAnswer: 1,
  },
  {
    question: "How can you go straight to the 'catch()' method in a fetch request?",
    options: [
      "By using the 'async/await' syntax",
      "By returning a string from the 'then()' function",
      "By throwing an Error",
      "By using the 'finally()' method",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the 'async' keyword when using 'async/await' with fetch?",
    options: [
      "To indicate that the fetch request is asynchronous",
      "To handle errors with 'try-catch'",
      "To define a new asynchronous function",
      "To wait for the fetch task to complete",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which method is used to convert a JavaScript variable to JSON?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "variable.toJSON()"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'localStorage' object in web development?",
    options: [
      "To store data that survives a page refresh or new tab",
      "To store data that exists only within the current browser tab",
      "To store sensitive data sent by the server",
      "To store temporary data during a session",
    ],
    correctAnswer: 0,
  },
  {
    question: "How can you get all the keys stored in 'localStorage'?",
    options: ["Using a 'for...in' loop", "Using 'Object.keys()'", "Using 'localStorage.keys()'", "Using 'localStorage.forEach()'"],
    correctAnswer: 1,
  },
  {
    question: "What is the key difference between 'localStorage' and 'sessionStorage'?",
    options: [
      "localStorage is the same as sessionStorage",
      "localStorage exists only within the current browser tab",
      "sessionStorage data survives a page refresh or new tab",
      "localStorage data survives a page refresh or new tab",
    ],
    correctAnswer: 3,
  },
  {
    question: "What does the 'GET' method represent in the context of HTTP requests?",
    options: ["Sending data to a server", "Requesting data from a server", "Updating data on a server", "Deleting data from a server"],
    correctAnswer: 1,
  },
  {
    question: "How is the 'fetch' method related to Promises in JavaScript?",
    options: [
      "It replaces the use of Promises",
      "It internally uses Promises for handling asynchronous operations",
      "It has no relation to Promises",
      "It delays the execution of Promises",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the 'try-catch' block when using 'async/await'?",
    options: ["To define asynchronous functions", "To handle errors in asynchronous code", "To create asynchronous loops", "To avoid using Promises"],
    correctAnswer: 1,
  },
  {
    question: "When using 'localStorage', what must the keys and values be?",
    options: [
      "Keys and values must be numbers",
      "Keys and values must be strings",
      "Keys must be strings, values can be any data type",
      "Keys and values must be booleans",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which method is used to remove all key-value pairs from 'localStorage'?",
    options: ["localStorage.removeAll()", "localStorage.deleteAll()", "localStorage.clear()", "localStorage.removeItems()"],
    correctAnswer: 2,
  },
  {
    question: "In the context of 'fetch', what does the 'response.json()' method do?",
    options: [
      "It converts the response to a JSON string",
      "It converts the response to a JavaScript object",
      "It converts the request data to JSON",
      "It converts the request data to a JavaScript object",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the 'await' keyword in 'async/await' functions?",
    options: [
      "To delay the function execution",
      "To make the function asynchronous",
      "To handle errors asynchronously",
      "To wait for asynchronous tasks to complete",
    ],
    correctAnswer: 3,
  },
  {
    question: "How can you handle errors in the 'catch' block of a 'fetch' request?",
    options: ["By using 'catchError()'", "By throwing a string", "By throwing an Error", "By using 'try-catch'"],
    correctAnswer: 2,
  },
  {
    question: "When using 'localStorage', why is it important to use 'JSON.stringify()'?",
    options: ["To encrypt the data", "To convert data to a JSON string", "To prevent data corruption", "To enhance data retrieval speed"],
    correctAnswer: 1,
  },
];
