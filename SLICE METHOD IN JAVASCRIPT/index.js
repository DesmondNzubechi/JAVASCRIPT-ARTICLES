// Understanding the Basics
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Extract elements from index 1 to 3 (exclusive)
let citrus = fruits.slice(1, 4);
console.log(citrus); // Output: ['banana', 'orange', 'grape']

// Omitting the 'end' parameter extracts from the start index to the end
let subset = fruits.slice(2);
console.log(subset); // Output: ['orange', 'grape', 'kiwi']

// Negative Indices
let colors = ['red', 'blue', 'green', 'yellow', 'purple'];

// Extract elements from the third-to-last to the second-to-last
let extractedColors = colors.slice(-3, -1);
console.log(extractedColors); // Output: ['green', 'yellow']

// Immutable Nature of slice()
let originalArray = [1, 2, 3, 4, 5];

// Extract elements without modifying the original array
let extractedArray = originalArray.slice(1, 4);

console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(extractedArray); // Output: [2, 3, 4]
