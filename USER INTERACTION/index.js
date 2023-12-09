// 1. alert(): Displaying Information to Users
alert('Welcome to our website!');

// 2. prompt(): Gathering User Input
const userName = prompt('Please enter your name:', 'Guest');
alert(`Hello, ${userName}!`);

// 3. confirm(): Seeking User Confirmation
const userConfirmed = confirm('Are you sure you want to delete this item?');

// Act based on the user's choice
if (userConfirmed) {
  alert('Item deleted successfully.');
} else {
  alert('Deletion canceled.');
}
