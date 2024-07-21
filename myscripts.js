const choices = ["rock", "paper", "scissors"];
const winningScore = 5
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');
const humanScoreDiv = document.getElementById('humanScore');
const computerScoreDiv = document.getElementById('computerScore');
const gameResultDiv = document.getElementById('gameResult');

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

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


    humanScoreDiv.textContent = `Your Score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

    if (humanScore === winningScore || computerScore === winningScore) {
        if (humanScore > computerScore) {
            gameResultDiv.textContent = "Congratulations! You win the game! Refresh to play again";
        } else {
            gameResultDiv.textContent = "Computer wins the game. Better luck next time! Refresh to play again";
        }
        buttons.forEach(button => button.removeEventListener('click', handleClick));
    }
}


function handleClick(event) {
    const playerChoice = event.target.id;
    playRound(playerChoice);
}


buttons.forEach(button => button.addEventListener('click', handleClick));
