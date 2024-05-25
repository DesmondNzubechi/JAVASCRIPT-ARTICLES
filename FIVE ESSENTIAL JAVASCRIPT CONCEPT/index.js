// ES6+ Syntax and Features

// Arrow Functions
const add = (a, b) => a + b;

// Destructuring
const user = { name: "John", age: 30 };
const { name, age } = user;

// Spread and Rest Operators
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
const [first, ...rest] = arr1; // first = 1, rest = [2, 3]

// Template Literals
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!

// Understanding the DOM and Event Handling

// Selecting and Manipulating Elements
const element = document.getElementById("myElement");
element.textContent = "Hello World";

// Event Handling
element.addEventListener("click", () => {
  alert("Element clicked!");
});

// Functional Programming

// Pure Functions
const multiply = (a, b) => a * b;

// Higher-Order Functions
const withLogging = (fn) => (...args) => {
  console.log("Arguments:", args);
  return fn(...args);
};
const loggedAdd = withLogging(add);
console.log(loggedAdd(2, 3)); // Arguments: [2, 3] \n 5

// Array Methods
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]
console.log(doubled);

// Asynchronous JavaScript

// Promises
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();

// JavaScript Modules and Imports

// Exporting and Importing Modules
// In utils.js
export const subtract = (a, b) => a - b;

// In main.js
import { subtract } from './utils.js';
console.log(subtract(5, 3)); // 2

// Default Exports
// In utils.js
const divide = (a, b) => a / b;
export default divide;

// In main.js
import divide from './utils.js';
console.log(divide(10, 2)); // 5
