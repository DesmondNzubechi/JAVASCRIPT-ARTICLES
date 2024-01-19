// Retrieving Property Descriptors
const obj = { prop: 42 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(descriptor);
// Output: { value: 42, writable: true, enumerable: true, configurable: true }

// Setting Property Descriptors
const newObj = {};
Object.defineProperty(newObj, 'newProp', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(newObj.newProp); // Output: 42
newObj.newProp = 100; // No error, but the value won't change
delete newObj.newProp; // No error, but the property won't be deleted

// Property Flags in ECMAScript 2015 (ES6) and Later
const objWithFlags = {
  prop: 42,
  writable: false,
  enumerable: true,
  configurable: false
};

// Property Flags in ECMAScript 5
const flags = {
  writable: Object.getOwnPropertyDescriptor(objWithFlags, 'prop').writable,
  enumerable: Object.getOwnPropertyDescriptor(objWithFlags, 'prop').enumerable,
  configurable: Object.getOwnPropertyDescriptor(objWithFlags, 'prop').configurable
};

console.log(flags);
// Output: { writable: false, enumerable: true, configurable: false }
