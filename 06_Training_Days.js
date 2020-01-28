// As a athlete, one of your favorite activities is running. 
// Below is an imaginary service called Training Days 
// it sends you a message for the event you signed up for and the days you have left to train

// create global scope variable(s)
const name = 'Hello-Krystal';


// creates a event generator function
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return '3k Race!';
    } else if (random === 1) {
        return '5k Race';
    } else if (random === 2) {
        return 'Marathon';
    }
};

// Test case
console.log(getRandEvent());