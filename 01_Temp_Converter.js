// This sets the original forecast
const kelvin = 293;
console.log(`The initial temperature is ${kelvin} kelvin.\n`);

// Converts Kevlin to Celsius by subtracting 273 from the kevlin variable
const celsius = kelvin - 273;
console.log(`If today's temperature is ${kelvin} Kelvin then today's temperature in Celsius is ${celsius} degrees Celsius.\n`);

// This calculates Fahrenheit and rounds down the fahrenheit temperature.
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`If today's temperature is ${celsius} Celsius, then today's temperature in Fahrenheit would be ${fahrenheit} degrees Fahrenheit.\n`);

// Extra Practice - Converts celsius to the Newton scale
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`If the temperature today is ${celsius} degrees Celsius then the temperature on the Newton scale would be ${newton} Newton.`);