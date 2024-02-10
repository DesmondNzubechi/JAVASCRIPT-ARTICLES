// String Conversion
let number = 42;
let strToNum = String(num);
console.log(strNum); // Output: "42"

let bool = true;
let strBool = "The value of bool is: " + bool;
console.log(strBool); // Output: "The value of bool is: true"

// Numeric Conversion
let strNum = "42";
let num = parseInt(strNum);
console.log(num); // Output: 42

let result = "10" * 2;
console.log(result); // Output: 20

// Boolean Conversion
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false
console.log(Boolean(false)); // Output: false

console.log(Boolean(42)); // Output: true
console.log(Boolean("Hello")); // Output: true
console.log(Boolean([])); // Output: true (an empty array is truthy)
console.log(Boolean({})); // Output: true (an empty object is truthy)
console.log(Boolean(true)); // Output: true
