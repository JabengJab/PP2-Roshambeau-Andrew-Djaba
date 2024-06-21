// Rock Paper Scissors Spock

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() *5)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors", "lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;
                case "paper":
                result = (computerChoice === "rock", "spock") ? "YOU WIN!" : "YOU LOSE!";
                break;
                case "scissors":
                result = (computerChoice === "paper", "lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;
                case "lizard":
                result = (computerChoice === "spock", "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
                case "spock":
                result = (computerChoice === "rock", "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("whiteText", "redText");

    switch(result){
        case "YOU WIN!": 
                resultDisplay.classList.add("whiteText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;
        case "YOU LOSE!": 
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;        

    }

}