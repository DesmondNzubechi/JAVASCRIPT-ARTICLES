// Example 1: Using Nullish Coalescing Operator for default value
let value = null;
let result = value ?? 'Default Value';
console.log(result); // Outputs: Default Value

// Example 2: Configuring Default Values
let userConfig = {
  username: null,
  theme: 'Light'
};
let username = userConfig.username ?? 'Guest';
let selectedTheme = userConfig.theme ?? 'Default';
console.log(username); // Outputs: Guest
console.log(selectedTheme); // Outputs: Light

// Example 3: Function Parameter Defaults
function greet(name, greeting) {
  name = name ?? 'Guest';
  greeting = greeting ?? 'Hello';
  console.log(`${greeting}, ${name}!`);
}

greet(); // Outputs: Hello, Guest!
greet('Desmond Nzubechukwu', 'Hi'); // Outputs: Hi, Desmond Nzubechukwu!
