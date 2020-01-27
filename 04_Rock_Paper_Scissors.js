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
  
  // create a new function to generate the computer choice
  const getComputerChoice = () => {
    
    // generates random number between 0-2
    const randomNumber = Math.floor(Math.random() * 3);
  
    // returns selection based on random number
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
  
  const determineWinner = (userChoice, computerChoice) => {
      
    // comparing userChoice vs computerChoice to determine the winner
    
    // create in case of tie
    if (userChoice === computerChoice) {
      return "It's a tie!"
    } 
    
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You Lose!';
      } else {
        return 'Congrats, You Won!';
      }
    }
    
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'You Lose!';
      } else {
        return 'Congrats, You Won!';
      }
    }
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'You Lose!';
      } else {
        return 'Congrats, You Won!';
      }
    }
  } 
  
  // Test cases to check determineWinner function
  
  // should return the user winning
  console.log(determineWinner('rock', 'scissors'));
  
  // should return a draw
  console.log(determineWinner('rock', 'rock'));
  
  // should return the user losing 
  console.log(determineWinner('paper', 'scissors'));  