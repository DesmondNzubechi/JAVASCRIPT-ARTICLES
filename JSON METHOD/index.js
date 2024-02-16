// JSON.parse(): Decoding JSON
const jsonString = '{"name": "Alice", "age": 30}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: Alice
console.log(jsonObject.age);  // Output: 30

// JSON.stringify(): Encoding JSON
const person = { name: "Bob", age: 25 };
const jsonStringEncoded = JSON.stringify(person);

console.log(jsonStringEncoded); // Output: {"name":"Bob","age":25}

// Customizing Serialization with toJSON
const customObject = {
  name: 'John',
  age: 25,
  toJSON: function () {
    return {
      customName: this.name,
      customAge: this.age
    };
  }
};

const jsonStringCustom = JSON.stringify(customObject);
console.log(jsonStringCustom);

// Reviver Function in JSON.parse()
const jsonStringReviver = '{"name":"Sam","age":28}';
const reviverFunction = (key, value) => (key === 'age' ? value * 2 : value);
const modifiedObject = JSON.parse(jsonStringReviver, reviverFunction);

console.log(modifiedObject.age); // Output: 56
