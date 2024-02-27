class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} barks`);
    }
  }
  
  // Creating instances
  const myAnimal = new Animal("Generic Animal");
  const myDog = new Dog("Buddy");
  
  // Using inherited methods
  myAnimal.speak();  // Output: Generic Animal makes a sound
  myDog.speak();     // Output: Buddy makes a sound
  myDog.bark();      // Output: Buddy barks
  