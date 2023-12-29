"use strict";

// Example 1: Error prevention with undeclared variable
x = 10; // This would throw an error in strict mode

// Example 2: Preventing 'this' coercion
function strictFunction() {
  console.log(this); // 'this' is undefined in strict mode
}

// Example 3: Assignment to read-only properties
var objStrict = {};
Object.defineProperty(objStrict, "x", { value: 42, writable: false });
// objStrict.x = 10; // This would throw a TypeError in strict mode

// Example 4: Eliminating 'with' statement
// with (objStrict) {
//   console.log(x); // This would throw a SyntaxError in strict mode
// }
