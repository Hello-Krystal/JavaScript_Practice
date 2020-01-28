// As a athlete, one of your favorite activities is running. 
// Below is an imaginary service called Training Days 
// it sends you a message for the event you signed up for and the days you have left to train

// create global scope variable(s)
const name = 'Hello-Krystal';

// creates a event generator function
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return '3k Race';
    } else if (random === 1) {
        return '5k Race';
    } else if (random === 2) {
        return 'Marathon';
    }
};

// created getTrainingDays function to pull in an event and count the amount of days it takes to train
const getTrainingDays = event => {
    
    // created empty days varialble
    let days;

    // if statement of getRandEvent. If event is x then train y days
    if (event === '3k Race') {
        days = 50;
    } else if (event === '5k Race') {
        days = 100;
    } else if (event === 'Marathon') {
        days = 200;
    }
    return days;
};

const logEvent = (name, event) => {
    console.log(`Congratulations ${name}, you've successfully registered for the following event: ${event}!`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is ${days} days.`);
};


// Create event variable that will be used as a parameter for logEvent
const event = getRandEvent();

// create a variable for getTrainingDays to save days as parameter for logTime
const days = getTrainingDays(event);


logEvent(name, event);
logTime(name, days);