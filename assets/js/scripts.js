// Rock Paper Scissors Spock

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() *3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
                case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
                case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
                case "lizard":
                result = (computerChoice === "spock") ? "YOU WIN!" : "YOU LOSE!";
                break;
                case "spock":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
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
                break;
        case "YOU LOSE!": 
                resultDisplay.classList.add("redText");
                break;        

    }

}