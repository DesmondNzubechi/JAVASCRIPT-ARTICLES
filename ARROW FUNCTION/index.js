// Example 1: Traditional vs Arrow Function
// Traditional function expression
const add = function(a, b) {
    return a + b;
  };
  
  // Arrow function
  const addArrow = (a, b) => a + b;
  
  // Example 2: Implicit Return
  // Traditional function expression
  const square = function(x) {
    return x * x;
  };
  
  // Arrow function
  const squareArrow = x => x * x;
  
  // Example 3: Lexical Scope
  // Traditional function expression with this binding
  function Counter() {
    this.count = 0;
    setInterval(function() {
      this.count++; // 'this' refers to the global object or undefined in strict mode
      console.log(this.count);
    }, 1000);
  }
  
  // Arrow function with lexical scope
  function CounterArrow() {
    this.count = 0;
    setInterval(() => {
      this.count++; // 'this' refers to the CounterArrow instance
      console.log(this.count);
    }, 1000);
  }
  
  // Example 4: Single Parameter Parentheses
  // Traditional function expression
  const increment = function(x) {
    return x + 1;
  };
  
  // Arrow function with single parameter
  const incrementArrow = x => x + 1;
  