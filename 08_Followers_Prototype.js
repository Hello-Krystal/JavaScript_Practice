// Imagine I'm a big-wig programmer for a social media platform! I have been tasked with building a prototype for a mutual followers program. 

// created an array to list my followers
const myFollowers = ['Jamie', 'Linda', 'Matthew', 'Gloria', 'Gary', 'Alex'];

// create an array to list your followers
const yourFollowers = ['Linda', 'Jacob', 'Louise', 'Alex', 'Mark', 'Bob'];

// created an empty array to store our shared followers
let mutualFollowers = [];

// created a nested loop to iterate through my followers and your followers
// if our followers are the same then stores that string into mutualFollowers
for (let i = 0; i < myFollowers.length; i++) {
  for (let j = 0; j < yourFollowers.length; j++) {
    if (myFollowers[i] === yourFollowers[j]) {
      mutualFollowers.push(yourFollowers[j]);
    }
  }
};

// created a loop to print each shared follower
for (let k = 0; k < mutualFollowers.length; k++) {
    console.log(mutualFollowers[k] + ' is a mutual friend');
  };