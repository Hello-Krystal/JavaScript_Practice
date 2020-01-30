// The goal of this project is to practice arrays and methods 
// it'll transform 'secretMessage' into a quote about coding.

// original message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// saves the original length of the array
let length = secretMessage.length;


// removes the last string of the array 'JavaScript'
secretMessage.pop();

console.log('The new length of the array is now ' + (length - secretMessage.length) + ' shorter.')

// add the words 'to' and 'program' to the end of the array
secretMessage.push('to', 'program');
console.log(secretMessage);

// changes the word 'easily' to 'right'
secretMessage[7] = 'right';
console.log(secretMessage);

// removes the first string of the array 'Learning'
secretMessage.shift();
console.log(secretMessage);

// Makes the first string of the array 'Programming'
secretMessage.unshift('Programming')
console.log(secretMessage);