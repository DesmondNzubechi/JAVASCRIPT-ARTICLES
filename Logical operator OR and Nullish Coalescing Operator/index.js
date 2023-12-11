// Nullish Coalescing Operator (??) Example
const someValue = null;
const defaultValue = someValue ?? 'Default';
// If someValue is null or undefined, defaultValue will be 'Default'.
const userPreference = getUserPreference() ?? 'DefaultPreference';
// If getUserPreference() returns null or undefined, use 'DefaultPreference'.

// Logical OR Operator (||) Example
const defaultValueOR = someValue || 'Default';
// If someValue is falsy (not just null or undefined), defaultValueOR will be 'Default'.
const userPreferenceOR = getUserPreference() || 'DefaultPreference';
// If getUserPreference() returns a falsy value, use 'DefaultPreference'.

// Examples
console.log('Nullish Coalescing Operator:');
console.log(`defaultValue: ${defaultValue}`); // Output: 'Default'
console.log(`userPreference: ${userPreference}`); // Output: 'DefaultPreference'

console.log('\nLogical OR Operator:');
console.log(`defaultValueOR: ${defaultValueOR}`); // Output: 'Default'
console.log(`userPreferenceOR: ${userPreferenceOR}`); // Output: 'DefaultPreference'
