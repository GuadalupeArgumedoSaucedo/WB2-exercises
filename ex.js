"us strict"

//let people = 20;
//let pizzA = 8;

//let total = people/pizzA;

//console.log(Math.ceil(total));


//let lownum = Math.min(5, 23, 12, 43, 23, 4, 2)
//console.log(lownum);


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let number = Math.round(Math.random() * 10);


rl.question('Guess a number between 1 and 100: ', (userInput) => {
  let userGuess = parseInt(userInput);

  if(isNaN(userGuess)) {
    console.log("Invalid input. Please enter a valid number.");
  } else if(userGuess > myNumber) {
    console.log('Your number is too high. Try again lower.');
  } else if(userGuess < myNumber) {
    console.log('Your number is too low. Try again higher.');
  } else {
    console.log('Congratulations! You guessed the number correctly.');
  }

  rl.close();
});