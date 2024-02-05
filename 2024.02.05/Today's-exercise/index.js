// Task 1
const tomislav = document.querySelectorAll(".vulcan");

tomislav.forEach((element) => {
  element.style.border = "3px ridge orange";
  element.style.borderRadius = "5px";
});

// Task 2
// DOM SELECTION
const captains = document.querySelector(".captains");

// DOM MANIPULATION
captains.style.border = "1px solid slategray";

// DOM Traversing
// Using Method way
const captainsChildren = captains.querySelectorAll("p");
captainsChildren.forEach(({ style }) => (style.backgroundColor = "palegoldenrod"));

// Using property way
// const children = captains.children;
// for (let item of children) {
//   item.style.backgroundColor = "palegoldenrod";
// }

// Task 3
const klingons = document.querySelector(".klingons");
klingons.style.backgroundColor = "skyblue";

// Task 4
const janeway = document.getElementById("janeway");
janeway.style.cssText = "font-family: Arial; font-size: 1.5rem; border: 2px dotted firebrick;";

// Task 5
// DOM SELECTION
const spock = document.querySelector(".spock");
// DOM TRAVERSING
const closestSpockDiv = spock.closest("div");
// DOM MANIPULATION
closestSpockDiv.style.border = "5px solid fuchsia";

// const vulcans = document.querySelector(".vulcans");
// vulcans.style.border = "5px solid fuchsia";

// Task 6
const others = document.querySelector(".others");
const othersChildren = others.querySelectorAll(".other");

othersChildren.forEach((element) => {
  if (element.matches(".seven")) {
    element.style.border = "2px dashed tomato";
  } else {
    element.style.color = "darkgreen";
    element.style.fontStyle = "italic";
  }
});

// Task 7
const borgQueen = document.createElement("p");
borgQueen.classList.add("other", "borgQueen");
borgQueen.textContent = "Borg Queen";

others.appendChild(borgQueen);

borgQueen.style.cssText = "font-family: monospace; font-weight: bold; text-decoration: underline; color: maroon;";

const sevenOfNine = document.querySelector(".seven");
others.removeChild(sevenOfNine);
