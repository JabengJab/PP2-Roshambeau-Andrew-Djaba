const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let rounds = 5; // Number of rounds in a game

function playGame(playerChoice) {
    if (rounds <= 0) {
        alert("Game over! Please reset the game.");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors" || computerChoice === "lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock" || computerChoice === "spock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper" || computerChoice === "lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "lizard":
                result = (computerChoice === "spock" || computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "spock":
                result = (computerChoice === "rock" || computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("whiteText", "redText");

    if (result === "YOU WIN!") {
        resultDisplay.classList.add("whiteText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "YOU LOSE!") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    rounds--;
    document.getElementById('duelRounds').textContent = `Rounds left: ${rounds}`;

    if (rounds <= 0) {
        alert("Game over! Please reset the game.");
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 5;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    document.getElementById('duelRounds').textContent = `Rounds left: ${rounds}`;
    playerDisplay.textContent = 'PLAYER:';
    computerDisplay.textContent = 'COMPUTER:';
    resultDisplay.textContent = '';
    resultDisplay.classList.remove("whiteText", "redText");
}
