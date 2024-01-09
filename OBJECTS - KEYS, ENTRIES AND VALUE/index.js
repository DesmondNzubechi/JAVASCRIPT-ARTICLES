// Object for demonstration
const person = { name: 'John', age: 30, job: 'Developer' };

// Using Object.keys()
const keys = Object.keys(person);
console.log("Object.keys():", keys);
// Output: ['name', 'age', 'job']

// Using Object.values()
const values = Object.values(person);
console.log("Object.values():", values);
// Output: ['John', 30, 'Developer']

// Using Object.entries()
const entries = Object.entries(person);
console.log("Object.entries():", entries);
// Output: [['name', 'John'], ['age', 30], ['job', 'Developer']]

// Use cases:
// Iterating over properties
for (const key of keys) {
  console.log(`${key}: ${person[key]}`);
}

// Checking property existence
const propertyToCheck = 'age';
if (keys.includes(propertyToCheck)) {
  console.log(`${propertyToCheck} exists in the object.`);
}

// Transforming object properties
const uppercasedValues = values.map(value => value.toUpperCase());
console.log("Transformed values:", uppercasedValues);
// Output: ['JOHN', '30', 'DEVELOPER']

// Destructuring entries
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: John
// age: 30
// job: Developer




//CODE WRITTEN BY DESMOND NZUBECHUKWU