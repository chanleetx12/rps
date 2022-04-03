function computerPlay() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let randomInt = Math.floor(Math.random() * 3);
    return (options[randomInt]);
}

function playerSelection(){
    let playerChoice = prompt("Choose ROCK, PAPER, or SCISSORS: ").toUpperCase();
    const eligibleResults = ["ROCK" , "PAPER", "SCISSORS"];
    if (eligibleResults.includes(playerChoice.toUpperCase())){
        return(playerChoice);
    }
    else{
        return("Player input error; try again")
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie! Try again";
    }
    else if
        (
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER" ||
        playerSelection === "ROCK" && computerSelection === "SCISSORS"
    ){
        return(`${playerSelection} beats ${computerSelection}; You win!`);
    }
    else if
    (
        computerSelection === "PAPER" && playerSelection === "ROCK" ||
        computerSelection === "SCISSORS" && playerSelection === "PAPER" ||
        computerSelection === "ROCK" && playerSelection === "SCISSORS"
    ){
        return(`${computerSelection} beats ${playerSelection}; You lose!`);
    }
    else{
        return(playerSelection);
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        alert(playRound(playerSelection(), computerPlay()));
    }
}

game();