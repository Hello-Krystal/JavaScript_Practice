// How much sleep do I get each week?

// returns any given nights number of hours of rest
// hours are generated randomly
const getSleepHours = day => {

    let generate = Math.floor(Math.random() * 9);

    if (day === 'monday') {
        return generate;
    } else if (day === 'tuesday') {
        return generate;
    } else if (day === 'wednesday') {
        return generate;
    } else if (day === 'thursday') {
        return generate;
    } else if (day === 'friday') {
        return generate;
    } else if (day === 'saturday') {
        return generate;
    } else if (day === 'sunday') {
        return generate;
    } else {
        return 'Errror! Please enter a day of the week.'
    }
};

// Test cases - printing random days of the week
console.log(getSleepHours('monday'));
console.log(getSleepHours('tuesday'));
console.log(getSleepHours('saturday'));


// Objective: 
// get the total sleep hours I actually slept (getActualSleepHours)
// get the ideal sleep hours I should have slept(getIdealSleepHours)
// calculate the number of sleep debt I've accumulated throughout the week

const getActualSleepHours = () => {

    // instead of adding each day of the week individually
    // I created a week variable that generates a random sum for each day of the week
    // variable:: (a) = days of week 
    // variable:: (b) = hours of sleep 
    // note: (because Math.random() * 8 would max at 7 hours return 9 for 8 hours max)
    // formula:: (a) = 7 (b) = 9 ==> 7 * 9  = 63
    let week = Math.floor(Math.random() * 63);

    return week;

};

const getIdealSleepHours = () => {

    // the ideal hours of sleep you should get each night is 8 hours
    let idealHours = 8;

    // multiplied the ideal number of hours of sleep by each day of the week (7)
    return idealHours * 7;

}; 

// Test cases 
console.log(getActualSleepHours());
console.log(getIdealSleepHours());