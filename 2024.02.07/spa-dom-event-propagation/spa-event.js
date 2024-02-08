// Event Propagation
// Event bubbling
// Event Capturing

const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const button = document.querySelector("#button");

button.addEventListener(
  "click",
  (e) => {
    alert("The button was clicked!");
    // document.body.style.backgroundColor = "black";
    // e.stopPropagation();
  },
  true
);

parent.addEventListener(
  "click",
  (e) => {
    alert("The button's PARENT was clicked!");
    // e.stopPropagation();
  },
  true
);

grandParent.addEventListener(
  "click",
  (e) => {
    alert("The button's GRANDPARENT was clicked!");
    // e.stopPropagation();
  },
  true
);
