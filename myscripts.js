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

