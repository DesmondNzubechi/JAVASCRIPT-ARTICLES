// Example 1: Multiple Conditions
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Wednesday":
    console.log("We're halfway through!");
    break;
  case "Friday":
    console.log("Weekend is approaching!");
    break;
  default:
    console.log("It's not a significant day.");
}

// Example 2: Enumerations
let month = 5; // May

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  // ... other months ...
  default:
    console.log("Invalid month");
}

// Example 3: Fall-through
let grade = "B";

switch (grade) {
  case "A":
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("You can do better.");
    break;
  default:
    console.log("Keep working hard.");
}
