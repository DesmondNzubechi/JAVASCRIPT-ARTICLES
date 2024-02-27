// Strict Equality (===) vs. Loose Equality (==)
let num = 5;
let strNum = "5";

console.log(num === strNum); // false (strict equality)
console.log(num == strNum);  // true (loose equality, type coercion)

// Inequality Operators (<, >, <=, >=)
let x = 10;
let y = "5";

console.log(x > y);  // true (y is coerced to a number)

// Equality with Type Conversion (Object.is())
let a = NaN;
let b = NaN;

console.log(Object.is(a, b));  // true (NaN is considered equal in Object.is())
console.log(a === b);          // false (strict equality treats NaN as not equal)

// Ternary Operator (Conditional Operator)
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";

console.log(status);  // "Adult"

// Comparing Objects and Arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2);  // false (different references)
