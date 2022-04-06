function computerPlay() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let randomInt = Math.floor(Math.random() * 3);
    return (options[randomInt]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie! Try again";
    } else if (
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER" ||
        playerSelection === "ROCK" && computerSelection === "SCISSORS"
    ) {
        playerScore += 1;
        return (`${playerSelection} beats ${computerSelection}; You win!`);
    } else if (
        computerSelection === "PAPER" && playerSelection === "ROCK" ||
        computerSelection === "SCISSORS" && playerSelection === "PAPER" ||
        computerSelection === "ROCK" && playerSelection === "SCISSORS"
    ) {
        computerScore += 1;
        return (`${computerSelection} beats ${playerSelection}; You lose!`);
    } else {
        return (playerSelection);
    }
}

const btn = document.querySelectorAll('.option');
const body = document.querySelector('body');
const displayDiv = document.createElement('div');

let results;
let playerScore = 0;
let computerScore = 0;

btn.forEach(btn => {
    btn.addEventListener('click', () => {
        results = playRound(btn.innerHTML.toUpperCase(), computerPlay());
        displayDiv.textContent = results;
        body.appendChild(displayDiv);
        document.querySelector('.playerScore').textContent = `Your Score: ${playerScore}`
        document.querySelector('.computerScore').textContent = `Computer Score: ${computerScore}`
    })
})