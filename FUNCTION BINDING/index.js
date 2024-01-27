// Implicit Binding
const person = {
    name: 'Alice',
    greet: function() {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
  
  person.greet(); // Output: Hi, I'm Alice
  
  // Explicit Binding with call() and apply()
  function introduce(lang1, lang2) {
    console.log(`Hello, I'm ${this.name} and I know ${lang1} and ${lang2}.`);
  }
  
  const person1 = { name: 'Bob' };
  const person2 = { name: 'Sara' };
  
  introduce.call(person1, 'JavaScript', 'Python');
  introduce.apply(person2, ['Java', 'C++']);
  
  // Explicit Binding with bind()
  const person3 = { name: 'Charlie' };
  const introFunc = introduce.bind(person3, 'Ruby', 'TypeScript');
  introFunc(); // Output: Hello, I'm Charlie and I know Ruby and TypeScript.
  
  // Arrow Functions
  function regularFunction() {
    setTimeout(function() {
      console.log(`Regular Function: ${this.name}`);
    }, 1000);
  }
  
  const arrowFunction = () => {
    setTimeout(() => {
      console.log(`Arrow Function: ${this.name}`);
    }, 1000);
  };
  
  const person4 = { name: 'David' };
  
  regularFunction.call(person4); // Output: Regular Function: undefined
  arrowFunction.call(person4);   // Output: Arrow Function: David
  