function getComputerChoice(){
    let choice = ["rock","paper","scissors"];
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function getHumanChoice(){
    let move = prompt("Enter the move: ")
    move = move.toLowerCase();
    return move;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {

        if (humanChoice === computerChoice) {
            console.log("It's a tie! Go again");
            playRound();
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose "+computerChoice+" beats "+humanChoice);
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose "+computerChoice+" beats "+humanChoice);
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose "+computerChoice+" beats "+humanChoice);
            computerScore++;
        }else {
            console.log("You win "+humanChoice+" beats "+computerChoice);
            humanScore++;
        }
    }else {
        console.log("Bad Inputs");
        playRound();
    }
}



