// create function getUserChoice that takes in user choice of rock, paper, or scissors
const getUserChoice = userInput => {
  
    // users can pass in a parameter with different capitalizations
    userInput = userInput.toLowerCase();
    
    // if statement of userInput
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      console.log(`The user has selected ${userInput}`);
    } else {
      console.log('Error: You must select either Rock, Paper, or Scissors!')
    }
    
  };