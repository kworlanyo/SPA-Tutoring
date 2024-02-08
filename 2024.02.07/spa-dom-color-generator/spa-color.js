//* Jamie's Solution
// ?All ".square" <div>s
// const squares = document.querySelectorAll(".square"); // nodeList
//? The "#color-display" <span>
// const colorDisplay = document.querySelector("#color-display");

//? Variable to hold the color the user needs to guess
// let colorToGuess;

// const getRandomNumber = () => {
//? Generate random number between 0 and 255
// let rgbColor = Math.floor(Math.random() * 256);
//? Return the random number
// return rgbColor;
// };

//? Function to generate a random RGB color
// const getRandomRGBColor = () => {
//   let red = getRandomNumber();
//   let green = getRandomNumber();
//   let blue = getRandomNumber();

//   let newColor = `rgb(${red}, ${green}, ${blue})`;
//   return newColor;
// };

//? Create an array containing the 6 colors we will use as background colors for the ".square" elements
// let randomColorsArray = [
//   getRandomRGBColor(),
//   getRandomRGBColor(),
//   getRandomRGBColor(),
//   getRandomRGBColor(),
//   getRandomRGBColor(),
//   getRandomRGBColor(),
// ];

//? Generate random number between 0 and 5
// let randomIndex = Math.floor(Math.random() * 6);

//? Use a "forEach" loop on the "squares" array
//? Each iteration will find a different ".square" element
//? Set that element's background color to one of the colors in the "randomColorsArray"
// squares.forEach((square, index) => (square.style.backgroundColor = randomColorsArray[index]));

//? Choose a random color in the "randomColorsArray" to be the one the user needs to guess
// colorToGuess = randomColorsArray[randomIndex];

//? Update the "color-display" span with this color
// colorDisplay.textContent = colorToGuess;

//? Create an event handler for when the user clicks a ".square" element
//? Using the event object...
//? ... check if the background color of the square the user clicked is the same as the color they need to guess
//? Respond with an alert to tell the user if they were correct or incorrect
// const respondToGuess = (e) => {
//   if (e.target.style.backgroundColor == colorToGuess) {
//     alert("Congratulations - you win!");
//   } else {
//     alert("Bad luck - try again!");
//   }
// };

//? Add an event listener to each ".square" element, to listen for a "click" event
//? Whenever a square is clicked, the "respondToGuess" event handler will be called
// squares.forEach((square) => {
//   square.addEventListener("click", respondToGuess);
// });

//* Worlanyo's Solution
// All ".square" <div>s
const squares = document.querySelectorAll(".square"); // nodeList
// The "#color-display" <span>
const colorDisplay = document.querySelector("#color-display");

// A function is created to generate random numbers between zero and whatever number will be put in as a maximum number argument.
function random(maxNum) {
  return Math.floor(Math.random() * (maxNum + 1));
}

// A function is created to create random rgb colors
function colorGen() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

// A function is created to generate a rgb color that will be assigned to a value later
function AnswerColorGen() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

// The function AnswerColorGen, is assigned to a variable after the function has been called.
const rightColor = AnswerColorGen();

// Update the "color-display" span with the value in the rightColor variable
colorDisplay.textContent = rightColor;

// This will generate random numbers between 0 and the length of the squares nodeList, which is 6. But 6 will not be included.
const randomBoxIndex = Math.floor(Math.random() * squares.length);

// A uniqueBox variable is created and value of a square is assigned to the variable based on the randomBoxIndex value
const uniqueBox = squares[randomBoxIndex];
uniqueBox.style.backgroundColor = rightColor; // The square in the uniqueBox variable is then given a background Color based on the rightColor value

// The squares nodeList will be looped through and each square will be worked on with the code in the loop
squares.forEach((square, index) => {
  // this checks that if the index in the forEach loop is not the same as the value in the randomBoxIndex variable
  if (index !== randomBoxIndex) {
    square.style.backgroundColor = colorGen(); // if they are not same, then a new background color is assigned to that square at that index in the forEach loop.
  }

  // all the squares are given event listeners
  square.addEventListener("click", (e) => {
    if (e.target.style.backgroundColor === rightColor) {
      // if the background colors are the same, we give an alert to congratulate the user
      alert("Congratulations, you win");
    } else {
      alert("Bad luck, try again"); // if the background colors are not the same, we give an alert to the user to try again.
    }
  });
});

//* Vladyslav's Solution (with BONUS TASK)
//? A function is created to generate random rgb colors
// function randomColor() {
//   let randomRed = Math.floor(Math.random() * 256);
//   let randomGreen = Math.floor(Math.random() * 256);
//   let randomBlue = Math.floor(Math.random() * 256);
//   return `rgb(${randomRed},${randomGreen},${randomBlue})`;
// }
// let count = 3; //? A count variable is created to check the number of attempts the user has to guess the right color

//? All ".square" <div>s
// const squares = document.querySelectorAll(".square");
//? All the squares are given different random rgb colors from the randomColor function
// squares.forEach((square) => (square.style.backgroundColor = randomColor()));

//? Random numbers between 0 and 5 are generated and assigned to the randomIndex variable
// const randomIndex = Math.floor(Math.random() * 6);
//? The value in the randomIndex variable is used to access the value of a square and a background color is given and then assigned to a color variable.
// let color = squares[randomIndex].style.backgroundColor;

// const span = document.querySelector("#color-display"); //? span element is selected
// span.textContent = color; //? the value in the color variable is assigned to the as the textContent of the span element.

// squares.forEach((square) =>
//? an event listener is added to each square and then a do while loop is created to let code run as long as the conditions in the do while loop are true.
//   square.addEventListener("click", (e) => {
//     do {
//       if (e.target.style.backgroundColor === span.textContent) {
//         alert("Congratulations - you win");
//       } else if (e.target.style.backgroundColor !== span.textContent && count > 1) {
//         alert(`Bad luck - try again. You have ${--count} attempts`);
//         break;
//       } else {
//         alert("You lost!");
//         break;
//       }
//     } while (e.target.style.backgroundColor !== span.textContent && count > 0);
//   })
// );

//? An html element is created and and given a styles and a text content
// const reset = document.createElement("button");
// reset.style.cssText = "width: 100px; height: 50px; border-radius: 5px; background-color: greenyellow; color: white; ";
// reset.textContent = "Reset";

//? The element is the appended to the body of the html file.
// document.body.appendChild(reset);

//? A function is created with code to reset the page.
// function resetPage() {
//   squares.forEach((square) => (square.style.backgroundColor = randomColor()));
//   color = squares[randomIndex].style.backgroundColor;
//   span.textContent = color;
//   count = 3;
// }

//? An event listener is added to the reset button so that when it is clicked, the resetPage function will be called to reset the page.
// reset.addEventListener("click", resetPage);

//* Ali's Solution
//? Random numbers between 0 and 5 are generated and assigned to the raIndex variable
// let raIndex = Math.floor(Math.random() * 6);

//? Elements are selected from html
// const allSquares = document.querySelectorAll(".square");
// const span = document.querySelector("#color-display");
// const body = document.querySelector("body");

//? Elements are created using the createElement method
// const alert = document.createElement("div");
// const pWin = document.createElement("p");
// const pTryAgain = document.createElement("p");
// const pLost = document.createElement("p");

//? A variable is created to check the number of attempts the user has to guess the right color
// let attempts = 3;

//? The alert variable is appended to the body
// body.appendChild(alert);
//? Other elements that have been created are also appended to the alert variable.
// alert.append(pWin, pTryAgain, pLost);

//? All p elements are selected from the html file and given styles
// const alertPara = document.querySelectorAll("p");
// alertPara.forEach((x) => {
//   x.style.cssText = "color: white; text-align: center;font-size: 2rem;display: none;";
// });

//? A function is created to generate random numbers between zero and whatever number will be put in as an argument.
// function random(num) {
//   return Math.floor(Math.random() * (num + 1));
// }

//? A function is created to create random rgb colors
// function randomRGB() {
//   return `rgb(${random(255)},${random(255)},${random(255)})`;
// }

//? Each square is assigned a random background color using the randomRGB function
// allSquares.forEach((x) => (x.style.backgroundColor = randomRGB()));
//? The value in the raIndex variable is used to access the value of a square and a background color is given and then assigned to a color variable.
// let color = allSquares[raIndex].style.backgroundColor;
//? the value in the color variable is assigned to the as the textContent of the span element.
// span.textContent = color;

// allSquares.forEach((x) => {
//? an event listener is added to each square and then a do while loop is created to let code run as long as the conditions in the do while loop are true.
//   x.addEventListener("click", (e) => {
//     do {
//       if (e.target.style.backgroundColor === color) {
//         pWin.textContent = "Congrats";
//         pWin.style.display = "block";
//         pTryAgain.style.display = "none";
//         pLost.style.display = "none";
//         break;
//       } else if (e.target.style.backgroundColor !== color && attempts > 1) {
//         attempts--;
//         pTryAgain.textContent = `Try again, u have ${attempts} ${attempts > 1 ? "attempts" : "attempt"} left`;
//         pTryAgain.style.display = "block";
//         pWin.style.display = "none";
//         pLost.style.display = "none";
//         break;
//       } else {
//         pLost.textContent = "You lost";
//         pLost.style.display = "block";
//         pWin.style.display = "none";
//         pTryAgain.style.display = "none";
//         break;
//       }
//     } while (e.target.style.backgroundColor !== color && attempts > 1);
//   });
// });
