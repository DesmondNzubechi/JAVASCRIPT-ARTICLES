// Define the Animal class
class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  // Create instances of the Animal class
  const cat = new Animal('Cat', 'Meow');
  const dog = new Animal('Dog', 'Woof');
  
  // Call the makeSound method on instances
  cat.makeSound(); // Output: Cat says Meow
  dog.makeSound(); // Output: Dog says Woof
  
  // Define the Bird class that extends Animal
  class Bird extends Animal {
    constructor(name, sound, wingspan) {
      super(name, sound);
      this.wingspan = wingspan;
    }
  
    fly() {
      console.log(`${this.name} is flying with a wingspan of ${this.wingspan} meters`);
    }
  }
  
  // Create an instance of the Bird class
  const eagle = new Bird('Eagle', 'Screech', 2);
  
  // Call methods on the Bird instance
  eagle.makeSound(); // Output: Eagle says Screech
  eagle.fly(); // Output: Eagle is flying with a wingspan of 2 meters
  
  // Define the MathOperations class with a static method
  class MathOperations {
    static square(x) {
      return x * x;
    }
  }
  
  // Call the static method without creating an instance
  const result = MathOperations.square(5);
  console.log(result); // Output: 25
  
  // Define the Rectangle class with getter and setter methods
  class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
  
    get area() {
      return this._width * this._height;
    }
  
    set width(newWidth) {
      if (newWidth > 0) {
        this._width = newWidth;
      } else {
        console.error('Width must be greater than 0');
      }
    }
  }
  
  // Create an instance of the Rectangle class
  const rectangle = new Rectangle(5, 10);
  
  // Use the getter to retrieve the area
  console.log(rectangle.area); // Output: 50
  
  // Use the setter to update the width and recalculate the area
  rectangle.width = 8;
  console.log(rectangle.area); // Output: 80
  