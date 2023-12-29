// Create a new Date object representing the current date and time
const currentDate = new Date();

// Create a Date object for a specific date and time
const specificDate = new Date('2023-01-01T12:00:00');

// Create a Date object with individual components
const customDate = new Date(2023, 0, 1, 12, 0, 0);

// Getting information from Date objects
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // 0-based index
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getMilliseconds();

// Formatting dates using Intl.DateTimeFormat
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

// Manipulating Dates
currentDate.setDate(currentDate.getDate() + 3); // Adding 3 days
currentDate.setMonth(currentDate.getMonth() - 1); // Subtracting 1 month

// Working with Time Intervals - setTimeout
setTimeout(() => {
  console.log('This code will run after 2000 milliseconds (2 seconds)');
}, 2000);

// Working with Time Intervals - setInterval
setInterval(() => {
  console.log('This code will run every 3000 milliseconds (3 seconds)');
}, 3000);
