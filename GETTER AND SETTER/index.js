// Getter example
const personWithGetter = {
    _name: 'John',
  
    get name() {
      console.log('Getting name');
      return this._name;
    }
  };
  
  console.log(personWithGetter.name); // Output: Getting name, John
  
  // Setter example
  const personWithSetter = {
    _name: 'John',
  
    set name(newName) {
      console.log('Setting name');
      this._name = newName;
    }
  };
  
  personWithSetter.name = 'Jane'; // Output: Setting name
  console.log(personWithSetter._name); // Output: Jane
  
  // Encapsulation and Data Validation
  const personWithValidation = {
    _age: 25,
  
    get age() {
      console.log('Getting age');
      return this._age;
    },
  
    set age(newAge) {
      if (newAge >= 0 && newAge <= 120) {
        console.log('Setting age');
        this._age = newAge;
      } else {
        console.log('Invalid age');
      }
    }
  };
  
  personWithValidation.age = 30; // Output: Setting age
  console.log(personWithValidation.age); // Output: Getting age, 30
  
  personWithValidation.age = 150; // Output: Invalid age
  