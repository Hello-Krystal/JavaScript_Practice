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

// Create a switch - control flow statement that takes in a randomNumber and assigns the empty variable a reply for the Magic Eight Ball to return 
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

// prints Magic Eight Ball answer
console.log(eightBall);