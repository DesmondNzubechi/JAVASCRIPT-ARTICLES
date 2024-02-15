// Define an object with nested properties
const user = {
    name: 'Desmond',
    address: {
      city: 'Enugu Nigeria',
      zipcode: 12345,
      street: '123 Main St'
    },
    getFullName() {
      return this.name;
    }
  };
  
  // Safe property access with Optional Chaining
  const street = user.address?.street;
  
  // Method invocation with Optional Chaining
  const fullName = user.getFullName?.();
  
  // Chaining multiple optional chains
  const nonExistentValue = user.address?.location?.coordinates?.x;
  
  // Combining with Nullish Coalescing
  const fallbackValue = user.address?.zipcode ?? 'Unknown';
  
  // Output the results
  console.log("Street:", street); // Output: 123 Main St
  console.log("Full Name:", fullName); // Output: Desmond
  console.log("Non-Existent Value:", nonExistentValue); // Output: undefined
  console.log("Fallback Value:", fallbackValue); // Output: 12345
  