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