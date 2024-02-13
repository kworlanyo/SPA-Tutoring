//* Shinhee's solution
// Your code goes here!
// import { modulo, percentage, percentageOf, difference } from "./percentage.js"; //? named imports
// import { calculateAspectRatio } from "./aspect-ratio.js"; //? named imports

// const moduloForm = document.getElementById("modulo-form");
// moduloForm.addEventListener("change", (e) => {
//   const result = document.getElementById("modulo_result");
//   const input = [document.getElementById("modulo_1"), document.getElementById("modulo_2")]; //? inputs are selected and put in an array
//   switch (e.target.id) { //? switch statement is used to check that e.target.id for both inputs with modulo_1 & modulo_2 is true
//     case "modulo_1":
//     case "modulo_2":
//       result.value = modulo(Number(input[0].value), Number(input[1].value));
//   }
// });

// const percentageForm = document.getElementById("percentage-form");
// percentageForm.addEventListener("change", (e) => {
//   const result = document.getElementById("percentage_result");
//   const input = [document.getElementById("percentage_1"), document.getElementById("percentage_2")]; //? inputs are selected and put in an array
//   switch (e.target.id) {
//     case "percentage_1":
//     case "percentage_2":
//       result.value = percentage(Number(input[0].value), Number(input[1].value));
//   }
// });

// const percentageOfForm = document.getElementById("percentageOf-form");
// percentageOfForm.addEventListener("change", (e) => {
//   const result = document.getElementById("percentageOf_result");
//   const input = [document.getElementById("percentageOf_1"), document.getElementById("percentageOf_2")]; //? inputs are selected and put in an array
//   switch (e.target.id) {
//     case "percentageOf_1":
//     case "percentageOf_2":
//       result.value = percentageOf(Number(input[0].value), Number(input[1].value));
//   }
// });

// const differenceForm = document.getElementById("difference-form");
// differenceForm.addEventListener("change", (e) => {
//   const result = document.getElementById("difference_result");
//   const input = [document.getElementById("difference_1"), document.getElementById("difference_2")]; //? inputs are selected and put in an array
//   switch (e.target.id) {
//     case "difference_1":
//     case "difference_2":
//       result.value = difference(Number(input[0].value), Number(input[1].value));
//   }
// });

// const aspectForm = document.getElementById("aspect-form");
// const newWidth = document.getElementById("ratio_result-width");
// const newHeight = document.getElementById("ratio_result-height");
// aspectForm.addEventListener("change", (e) => {
//   let result;
//   const input = [document.getElementById("ratio_1"), document.getElementById("ratio_2")]; //? inputs are selected and put in an array
//   switch (e.target.id) {
//     case "ratio_result-width":  //? if e.target.id === ratio_result-width, the code below should run
//       result = newHeight;
//       result.value = calculateAspectRatio(Number(input[0].value), Number(input[1].value), newWidth.value, "w");
//     case "ratio_result-height": //? if e.target.id === ratio_result-height, the code below should run
//       result = newWidth;
//       result.value = calculateAspectRatio(Number(input[0].value), Number(input[1].value), newHeight.value, "h");
//   }
// });

//* Worlanyo's Solution
import { modulo, percentage, percentageOf, difference } from "./percentage.js"; // named import
import { calculateAspectRatio } from "./aspect-ratio.js"; // named import

//? Selection of elements
const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");

const percentage1 = document.querySelector("#percentage_1");
const percentage2 = document.querySelector("#percentage_2");
const percentageResult = document.querySelector("#percentage_result");

const percentageOf1 = document.querySelector("#percentageOf_1");
const percentageOf2 = document.querySelector("#percentageOf_2");
const percentageOfResult = document.querySelector("#percentageOf_result");

const difference1 = document.querySelector("#difference_1");
const difference2 = document.querySelector("#difference_2");
const differenceResult = document.querySelector("#difference_result");

const ratio1 = document.querySelector("#ratio_1");
const ratio2 = document.querySelector("#ratio_2");
const ratioResultWidth = document.querySelector("#ratio_result-width");
const ratioResultHeight = document.querySelector("#ratio_result-height");

//? Adding event listeners
//? All event listeners follow the same pattern
//? The event listeners are added to the last input elements before the result input element in each form so that when there is change in them, then the result input element will populate depending on the form you are on.
modulo2.addEventListener("change", () => {
  moduloResult.value = modulo(parseFloat(modulo1.value), parseFloat(modulo2.value));
});

percentage2.addEventListener("change", () => {
  percentageResult.value = percentage(parseFloat(percentage1.value), parseFloat(percentage2.value));
});

percentageOf2.addEventListener("change", () => {
  percentageOfResult.value = percentageOf(parseFloat(percentageOf1.value), parseFloat(percentageOf2.value));
});

difference2.addEventListener("change", () => {
  differenceResult.value = difference(parseFloat(difference1.value), parseFloat(difference2.value));
});

ratioResultWidth.addEventListener("change", () => {
  ratioResultHeight.value = calculateAspectRatio(parseFloat(ratio1.value), parseFloat(ratio2.value), parseFloat(ratioResultWidth.value));
});
