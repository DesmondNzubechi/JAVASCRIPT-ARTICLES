//LOGICAL AND ('&&')
let x = true;
let y = false;
let resultAND = x && y;

//LOGICAL OR ('||')
let a = true;
let b = false;
let resultOR = a || b;

//LOGICAL NOT ('!')
let isTrue = true;
let isFalse = !isTrue;

//Combining Logical Operators
let c = true;
let combinedResult = (a && b) || (c && !b);

//APPLICATIONS

//Conditional Statements:
let age = 25;
if (age >= 18 && age <= 30) {
    console.log("You are eligible for the youth discount!");
} else {
    console.log("Sorry, you do not qualify for the youth discount.");
}


//Validation and Error Handling
let userInput = "example@email.com";
if (userInput.includes("@") && userInput.includes(".")) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}

//Toggling Boolean Values
let isLoggedIn = false;
isLoggedIn = !isLoggedIn;

let complexCondition = (a && b) || (c && !b);
