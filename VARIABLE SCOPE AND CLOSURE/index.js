// Variable Scope Examples

// Global Scope
let globalVariable = "I am global";

function exampleFunction() {
  console.log(globalVariable); // Accessible within the function
}

exampleFunction();
console.log(globalVariable); // Accessible outside the function

// Local Scope
function exampleFunction() {
  let localVariable = "I am local";
  console.log(localVariable); // Accessible within the function
}

exampleFunction();
// console.log(localVariable); // Error! localVariable is not defined outside the function


// Closures Examples

// Example 1: Private Variables
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2

// Example 2: Event Handling
function setupEventListener() {
  let count = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    count++;
    console.log(`Button clicked ${count} times`);
  });
}

setupEventListener();
