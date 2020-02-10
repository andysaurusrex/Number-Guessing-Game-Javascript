let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Create a generateTarget function
const generateTarget = () => Math.floor(Math.random() * 10);
console.log(generateTarget());

// Create a compareGuesses function in which it will be called each round to determine which guess is cloest to the target number
// Add parameters for human, computer, and target numbers
const compareGuesses = (human, computer, target) => {
    // Create humanGuess and computerGuess, use Math.abs to use absolute values
    const humanGuess = Math.abs(target - human)
    const computerGuess = Math.abs(target - computer) 
    // Usage of ternerary operator here for if/else
    return humanGuess <= computerGuess 
}; 

// Create update score function to increase winner's score each round
const updateScore = winner => {
    // If winner is human then humanScore gains 1 point
    if (winner === 'human') {
        humanScore++;
    // If winner is computer then computerScore gains 1 point
    } else if (winner === 'computer'){
        computerScore++;
    };
};

// Create advance round function to update round number after each round
const advanceRound = () => currentRoundNumber++;
