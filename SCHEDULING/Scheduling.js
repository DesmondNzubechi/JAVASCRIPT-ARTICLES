// Example: setTimeout and setInterval

// setTimeout example
const timeoutId = setTimeout(() => {
    console.log('Delayed execution after 2000 milliseconds.');
  }, 2000);
  
  // Clear the timeout before it executes
  clearTimeout(timeoutId); // The timeout is cleared, and the function won't be executed.
  
  // setInterval example
  const intervalId = setInterval(() => {
    console.log('Repeated execution every 1000 milliseconds.');
  }, 1000);
  
  // Clear the interval after 5000 milliseconds (5 seconds)
  setTimeout(() => {
    clearInterval(intervalId); // The interval is cleared, and the function won't be executed anymore.
  }, 5000);
  