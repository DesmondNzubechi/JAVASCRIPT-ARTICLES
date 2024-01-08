// WeakMap example

let weakMap = new WeakMap();

let obj1 = {};
let obj2 = {};

weakMap.set(obj1, "Value for obj1");
weakMap.set(obj2, "Value for obj2");

console.log(weakMap.get(obj1)); // Output: Value for obj1

// If obj1 is no longer referenced elsewhere, its entry in the WeakMap will
// be automatically cleared during garbage collection.

// WeakSet example
let weakSet = new WeakSet();

let obj3 = {};
let obj4 = {};

weakSet.add(obj3);
weakSet.add(obj4);

console.log(weakSet.has(obj3)); // Output: true


//CODE WRITTEN BY DESMOND NZUBECHUKWU