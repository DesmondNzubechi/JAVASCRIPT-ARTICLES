// Object References:

// Creating an object
const originalObject = { key: 'value' };

// Assigning the object to a new variable
const referenceObject = originalObject;

// Modifying the reference object
referenceObject.key = 'modified value';

// Accessing the original object
console.log(originalObject.key); // Output: 'modified value'

// Object Copying:

// Shallow copy using Object.assign()
const shallowOriginalObject = { key: 'value', nested: { innerKey: 'innerValue' } };
const shallowCopy = Object.assign({}, shallowOriginalObject);

// Modifying the shallow copy
shallowCopy.key = 'modified value';
shallowCopy.nested.innerKey = 'modified inner value';

// Original object remains unchanged
console.log(shallowOriginalObject.key); // Output: 'value'
console.log(shallowOriginalObject.nested.innerKey); // Output: 'modified inner value'

// Deep copy using JSON.parse() and JSON.stringify()
const deepOriginalObject = { key: 'value', nested: { innerKey: 'innerValue' } };
const deepCopy = JSON.parse(JSON.stringify(deepOriginalObject));

// Modifying the deep copy
deepCopy.key = 'modified value';
deepCopy.nested.innerKey = 'modified inner value';

// Original object remains unchanged
console.log(deepOriginalObject.key); // Output: 'value'
console.log(deepOriginalObject.nested.innerKey); // Output: 'innerValue'
