// create function getUserChoice that takes in user choice of rock, paper, or scissors
const getUserChoice = userInput => {
  
    // users can pass in a parameter with different capitalizations
    userInput = userInput.toLowerCase();
    
    // if statement of userInput
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
       return `The user has selected ${userInput}`;
    } else {
      return 'Error: You must select either Rock, Paper, or Scissors!'
    }
    
  };
  
  // Test cases
  // should return 'The user has selected rock'
  console.log(getUserChoice('rock'));
  
  // should return 'The user has selected paper'
  console.log(getUserChoice('paper'));
  
  // should return 'Error: You must select either Rock, Paper, or Scissors!'
  console.log(getUserChoice('krystal'));