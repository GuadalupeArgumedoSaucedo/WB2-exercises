"us strict"

//let people = 20;
//let pizzA = 8;

//let total = people/pizzA;

//console.log(Math.ceil(total));


//let lownum = Math.min(5, 23, 12, 43, 23, 4, 2)
//console.log(lownum);



let myNumber = Math.round(Math.random() * 10); // Generate a random number between 1 and 100

console.log('The number to guess is:', myNumber);


// Function to check the user's guess
function checkGuess(userGuess) {
    if(isNaN(userGuess)) {
        console.log("Invalid input. Please enter a valid number.");
    } else if(userGuess > myNumber) {
        console.log('Your number is too high. Try again lower.');
    } else if(userGuess < myNumber) {
        console.log('Your number is too low. Try again higher.');
    } else {
        console.log('Congratulations! You guessed the number ' + myNumber + ' correctly.');
    }
}

// Test with some guesses
checkGuess(50); // Too high
checkGuess(30); // Too low
checkGuess(myNumber); // Correct guess



