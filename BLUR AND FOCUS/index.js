// Example: Show additional options on focus

// Get the password input element by its ID
const passwordInput = document.getElementById('password');

// Get the additional options element by its ID
const additionalOptions = document.getElementById('additionalOptions');

// Add a focus event listener to the password input
passwordInput.addEventListener('focus', () => {
  // When the password input gains focus, display the additional options
  additionalOptions.style.display = 'block';
});

// Add a blur event listener to the password input
passwordInput.addEventListener('blur', () => {
  // When the password input loses focus, hide the additional options
  additionalOptions.style.display = 'none';
});
