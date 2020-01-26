// set userName to an empty string
let userName = 'Krys';

// ternary express that decides what to do if the user enters a name or not. 
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello, stranger! Tell me your name!');

// variable for user question
let userQuestion = "'Is daily practice important?'";
console.log(`${userName} just asked ${userQuestion}`);

// created random number generator
randomNumber = Math.floor(Math.random() * 8);
// Math.random() * 8 returns a value between 0 and 7. To make sure we return only whole numbers we use Math.floor().

// Test random number generator
console.log(randomNumber);