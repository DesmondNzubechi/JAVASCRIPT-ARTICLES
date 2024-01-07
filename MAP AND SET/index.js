// JavaScript Map
let userMap = new Map();
userMap.set("John", { age: 30, role: "Developer" });
userMap.set("Jane", { age: 25, role: "Designer" });

console.log(userMap.get("John")); // Output: { age: 30, role: "Developer" }
console.log(userMap.size); // Output: 2

// JavaScript Set
let uniqueNumbers = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(10); // Ignored, as 10 is already in the set

console.log(uniqueNumbers.size); // Output: 2
console.log(uniqueNumbers.has(20)); // Output: true



//CODE WRITTEN BY DESMOND NZUBECHUKWU