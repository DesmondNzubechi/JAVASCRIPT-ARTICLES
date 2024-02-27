// Types of Errors
// a. Syntax Errors
var x = 10;
console.log(x) // Syntax error: missing semicolon

// b. Runtime Errors
function divide(a, b) {
  return a / b;
}
console.log(divide(10, 0)); // Runtime error: division by zero

// c. Logic Errors
function calculateArea(radius) {
  return 2 * Math.PI * radius; // Logic error: incorrect formula
}
console.log(calculateArea(5));

// The try-catch statement
try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("An error occurred:", error.message);
}

// The finally block
try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Cleanup or final operations");
}

// The throw statement
function validateInput(value) {
  if (typeof value !== 'number') {
    throw new Error("Input must be a number");
  }
  return value;
}

try {
  console.log(validateInput("not a number"));
} catch (error) {
  console.error("An error occurred:", error.message);
}

// Error Object
try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("An error occurred:", error.message);
  console.error("Stack trace:", error.stack);
}

// Global Error Handling
window.onerror = function (message, source, lineno, colno, error) {
  console.error("Global error handler:", message, source, lineno, colno, error);
  return true; // Prevent default browser error handling
};
