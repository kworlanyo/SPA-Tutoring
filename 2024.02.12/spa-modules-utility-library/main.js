//* Ways of using named imports
// import * as utils from "./utilityLibrary/index.js"; // named export
import { capitalize, reverseString, range } from "./utilityLibrary/index.js";

console.log(capitalize("hello")); // Outputs: 'Hello'
console.log(reverseString("hello")); // Outputs: 'olleh'
console.log(range(1, 5)); // Outputs: [1, 2, 3, 4, 5]

//* Using default export
// import utils from "./utilityLibrary/index.js"; // default export
// utils becomes an object with methods inside

// console.log(utils.capitalize("hello")); // Outputs: 'Hello'
// console.log(utils.reverseString("hello")); // Outputs: 'olleh'
// console.log(utils.range(1, 5)); // Outputs: [1, 2, 3, 4, 5]
