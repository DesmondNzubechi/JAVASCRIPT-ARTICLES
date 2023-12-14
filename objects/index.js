// Creating Objects
let car = { brand: 'Toyota', model: 'Camry', year: 2022, color: 'Blue' };
let person = { name: 'John', age: 30, gender: 'Male' };

// Accessing Object Properties
console.log(car.brand); // Output: Toyota
console.log(person['name']); // Output: John

// Object Methods
let student = { name: 'Alice', age: 22, sayHello() { console.log(`Hello, my name is ${this.name}`); } };
student.sayHello(); // Output: Hello, my name is Alice

let teacher = {
    name: 'Mr. Smith',
    age: 40,
    sayHello() { console.log(`Hello, I am ${this.name}`); }
};
teacher.sayHello(); // Output: Hello, I am Mr. Smith

// Iterating Through Object Properties
for (let key in car) console.log(`${key}: ${car[key]}`);

// Object Inheritance
let animal = { eat() { console.log('Eating...'); } };
let dog = Object.create(animal);
dog.bark = function() { console.log('Woof!'); };
dog.eat(); // Output: Eating...
dog.bark(); // Output: Woof!

// JSON and Objects
let carJSON = '{"brand":"Toyota","model":"Camry","year":2022,"color":"Blue"}';
let carFromJSON = JSON.parse(carJSON);
console.log(carFromJSON.brand); // Output: Toyota
let carBackToJSON = JSON.stringify(carFromJSON);
console.log(carBackToJSON); // Output: {"brand":"Toyota","model":"Camry","year":2022,"color":"Blue"}
