// Recursive countdown function
function countdown(n) {
    // Base case
    if (n <= 0) {
      console.log("Done!");                               
      return;
    }
  
    // Recursive case
    console.log(n);
    countdown(n - 1);
  }
  
  // Example usage
  countdown(5);
  