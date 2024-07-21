// Constants
const choices = ["rock", "paper", "scissors"];
const winningScore = 5;

// Variables
let humanScore = 0;
let computerScore = 0;

// DOM Elements
const buttons = document.querySelectorAll('button[id^=""]');
const resultsDiv = document.getElementById('results');
const humanScoreDiv = document.getElementById('humanScore');
const computerScoreDiv = document.getElementById('computerScore');
const gameResultDiv = document.getElementById('gameResult');

// Function to get computer's choice
function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

// Function to play a round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    if (!choices.includes(playerChoice)) {
        resultsDiv.textContent = "Invalid choice. Please select again.";
        return;
    }

    resultsDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}.`;

    if (playerChoice === computerChoice) {
        resultsDiv.textContent += " It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultsDiv.textContent += ` You win! ${playerChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultsDiv.textContent += ` Computer wins! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    // Update scores in DOM
    humanScoreDiv.textContent = `Your Score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

    // Check if game is over
    if (humanScore === winningScore || computerScore === winningScore) {
        if (humanScore > computerScore) {
            gameResultDiv.textContent = "Congratulations! You win the game!";
        } else {
            gameResultDiv.textContent = "Computer wins the game. Better luck next time!";
        }
        // Disable buttons to end the game
        buttons.forEach(button => button.removeEventListener('click', handleClick));
    }
}

// Event listener function for button clicks
function handleClick(event) {
    const playerChoice = event.target.id;
    playRound(playerChoice);
}

// Add event listeners to buttons
buttons.forEach(button => button.addEventListener('click', handleClick));
