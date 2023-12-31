// Global variable and function in both environments
var globalVariable = "I'm a global variable";

function globalFunction() {
  console.log("I'm a global function");
}

// Browser environment
if (typeof window !== "undefined") {
  console.log(window.globalVariable); // Accessing a global variable in the browser
  window.globalFunction(); // Invoking a global function in the browser
}

// Node.js environment
if (typeof global !== "undefined") {
  console.log(global.globalVariable); // Accessing a global variable in Node.js
  global.globalFunction(); // Invoking a global function in Node.js
}

// Implicit global variable (avoid this pattern)
function createImplicitGlobal() {
  implicitGlobal = "I'm a global variable"; // Implicitly becomes global
}

createImplicitGlobal();
console.log(window.implicitGlobal); // Accessing the implicit global variable in the browser

// Using global functions
var numString = "42";
var parsedNumber = parseInt(numString);

console.log(parsedNumber); // Output: 42

setTimeout(function() {
  console.log("Delayed execution");
}, 1000);
