// Console version of the number guessing game

// Import the readline module
const readline = require('node:readline/promises');

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Create an interface to read input from the console. 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Create a function to guess the number
async function guessNumber() {
	let guessCount = 0;

	// Loop until the user guesses the number or runs out of guesses
	while (guessCount < 6) {
		// Ask the user for a guess
		let answer = await rl.question('Guess a number between 1 and 10: ');

		// Convert the answer to a number
		let guess = parseInt(answer);

		// increment the guess count
		guessCount++;

		// Check if the guess is correct
		if (isNaN(guess)) {
			console.log('Invalid input, please enter a number between 1 and 10');
		} else if (guess < secretNumber) {
			console.log('Too low!');
		} else if (guess > secretNumber) {
			console.log('Too high!');
		} else {
			console.log('Congratulations, you guessed the number!');
			return;
		}
	}

	console.log('Sorry, you ran out of guesses!', `The secret number was ${secretNumber}`);
	rl.close();
}

guessNumber();
