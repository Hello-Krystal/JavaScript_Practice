// The goal of this project is to practice arrays and methods 
// it'll transform 'secretMessage' into a quote about coding.

// original message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// saves the original length of the array
let length = secretMessage.length;

// removes the last string of the array 'JavaScript'
secretMessage.pop();

// add the words 'to' and 'program' to the end of the array
secretMessage.push('to', 'program');

// changes the word 'easily' to 'right'
secretMessage[7] = 'right';

// removes the first string of the array 'Learning'
secretMessage.shift();

// Makes the first string of the array 'Programming'
secretMessage.unshift('Programming')

// removes strrings 'get', 'right', 'the', 'first', 'time' and replace them with the word 'know'
secretMessage.splice(6, 5, 'know');

// makes the message print as a single sentence
console.log(secretMessage.join(' '));

const newLength = secretMessage.length;

console.log('The original Secret Message was ' + length + ' words. The new length of the Secret Message is ' + newLength + ' words.');