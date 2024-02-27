// Example using var
function exampleVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // Outputs 10
  }
  
  // Example illustrating hoisting with var
  console.log(y); // Outputs undefined
  var y = 5;
  console.log(y); // Outputs 5
  
  // Example using let
  function exampleLet() {
    if (true) {
      let z = 20;
    }
    // console.log(z); // ReferenceError: z is not defined
  }
  
  // Example illustrating temporal dead zone with let
  // console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 30;
  console.log(a); // Outputs 30
  