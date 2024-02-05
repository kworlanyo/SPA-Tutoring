//* DOM SELECTION OR QUERYING
// 1. document.querySelector()
// 2. document.querySelectorAll() ==> returns a nodeList
// 3. document.getElementById()
// 4. document.getElementsByClassName() ==> returns a html collection

const element1 = document.querySelector("p");

//* DOM MANIPULATION
//? Properties
// 1. style
element1.style.backgroundColor = "red";

// 2. innerText
element1.innerText = "I am a text"; // <p>I am a text</p>

// 3. textContent
element1.textContent = "I am a text part2"; // <p>I am text part 2</p>

// 4. innerHTML
element1.innerHTML = "<a href='www.google.com'>This is the link to the website</a>"; // <p><a href='www.google.com'>This is the link to the website</a></p>

//* NB: Note that when using innerText, textContent or InnerHTML on an element, and the element had content inside, the content will be overwritten. To prevent the content from being overwritten, you can use the += operation
// eg
element1.innerText += "I am a text";
element1.textContent += "I am a text part2";
element1.innerHTML += "<a href='www.google.com'>This is the link to the website</a>";

// 5. classList
element1.classList.add(); // You can add as many classes as possible using classList.add()
element1.classList.remove(); // This removes a class from an element.

//? Methods
//  1. createElement()
const newElement = document.createElement("h1");
const newElement2 = document.createElement("div");

// appendChild()
element1.appendChild(newElement); // You can only append one element at a time using appendChild()

// append()
element1.append(newElement, newElement2); // You can append as many element as possible  using append()

// removeChild()
element1.removeChild(newElement2); // This is used on a parent element to remove a child element specified in the parenthesis.

// remove()
newElement2.remove(); // this is used on the element itself to remove it from the html DOM tree

//* DOM TRAVERSING
//? Properties
// 1. parentElement
element1.parentElement; // returns the parent element.

// 2. children
element1.children; //==> returns a html collection

// 3. childNodes
element1.childNodes; // ==> returns a nodeList

// 4. nextSibling
element1.nextSibling; // ==> can select anything, including new line and empty space nodes

// 5. nextElementSibling
element1.nextElementSibling; // ==> selects only html elements

// 6. previousSibling
element1.previousSibling; // ==> can select anything, including new line and empty space nodes

// 7. previousElementSibling
element1.previousElementSibling; // ==> selects only html elements

//? Methods
// 1. querySelector()
element1.querySelector();

// 2. querySelectorAll()
element1.querySelectorAll();

// 3. closest()
element1.closest("div"); // This is used on an element to select its nearest parent element specified inside the parenthesis.

// 4. matches
element1.matches(); // This returns a boolean. It checks whether the element matches any selector that is passed in the parenthesis.
