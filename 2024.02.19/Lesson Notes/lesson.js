//* How To Use Event handlers in Event Listeners
// button.addEventListener("click", () => {

// })

// button.addEventListener("click", eventHandler);

// function eventHandler () {}

//* Selecting Elements and Adding Event Listener Or Manipulating them
// const title = document.getElementById("title")
// const title2 = document.querySelector("#title")
const p = document.querySelector("p");
const button = document.querySelector("button");
const div = document.querySelector("div");

button.addEventListener("click", (e) => {
  p.classList.toggle("add");
  console.log(e);
});

//* Getting attribute
const attribute = button.getAttribute("type");
console.log(attribute);

//* Setting Attribute
// p.setAttribute("title", "paragraph");
// OR
p.title = "paragraph";

//* Removing Attribute
p.removeAttribute("title");

//* Removing Child Of Parent Element
// div.removeChild(p);

//* Removing Element itself.
// p.remove();

//* DOM terms
// DOM selection
// DOM Traversing
// DOM Manipulation

//* Selecting Parent Element of an Element
const parent = p.parentElement;
console.log(parent);

//* Selecting Children of an Element
const children = div.children;
console.log(children); //? HTML Collection

//? Using a for loop to loop through HTML Collection
// for (const element of children) {
//   element.style.fontSize = "10rem";
// }

//? Using forEach
// HTML Collection - You can't even use forEach
// NodeList - You can use forEach

//* Selecting all Elements with a specific tag
const allPs = document.querySelectorAll("p");
console.log(allPs);

//* Selecting next sibling of an element
const nextSibling = p.nextSibling;
console.log(nextSibling);

//* Selecting next element sibling of an element
const nextElementSibling = p.nextElementSibling;
console.log(nextElementSibling);

//* Selecting the closest ancestor with a specific selector of an element
const closest = p.closest("div");
console.log(closest);

//* Using "matches" to see if an element has a specific selector
if (div.matches(".parent")) {
  div.style.backgroundColor = "pink";
}
// const check = div.matches(".parent"); //? returns true or false
// console.log(check);

//* Using "DOMContentLoaded" event listener type on the Document
// document.addEventListener("DOMContentLoaded", () => {
//   document.body.style.backgroundColor = "black";
// });

//* Some Keyboard events
// Keyup
// Keydown

//* Types of modules
// Common JS
// ES6 modules

//* Export Default
// export default function2 () {
//   your code
// }
// export default function2

//* Import Default
// import function2 from "./pathOfFile.js"
