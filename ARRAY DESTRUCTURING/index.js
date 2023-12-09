// Array Destructuring:

// Basic Array Destructuring
const [first, second, third] = [1, 2, 3];
console.log(first, second, third);  // Output: 1 2 3

// Skipping Elements
const [a, , b] = [4, 5, 6];
console.log(a, b); // Output: 4 6

// Rest Operator
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head, tail); // Output: 1 [2, 3, 4, 5]

// Object Destructuring:

// Basic Object Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30

// Assigning to Different Variable Names
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // Output: John 30

// Default Values
const { city = 'Unknown' } = person;
console.log(city); // Output: Unknown

// Destructuring in Function Parameters:

// Object Destructuring in Function Parameters
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const anotherPerson = { name: 'Alice', age: 25 };
printPerson(anotherPerson); // Output: Name: Alice, Age: 25

// Array Destructuring in Function Parameters
function printNumbers([num1, num2]) {
  console.log(`Number 1: ${num1}, Number 2: ${num2}`);
}

const numbers = [7, 11];
printNumbers(numbers); // Output: Number 1: 7, Number 2: 11
