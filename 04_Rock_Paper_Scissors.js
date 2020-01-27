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
  
  // // Test cases #1
  // // should return 'The user has selected rock'
  // console.log(getUserChoice('rock'));
  
  // // should return 'The user has selected paper'
  // console.log(getUserChoice('paper'));
  
  // // should return 'Error: You must select either Rock, Paper, or Scissors!'
  // console.log(getUserChoice('krystal'))
  
  
  
  // create a new function to generate the computer choice
  const getComputerChoice = () => {
    
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
    
  };
  
  // Test cases #2
  // prints random computer choice selection
  console.log(getComputerChoice());  