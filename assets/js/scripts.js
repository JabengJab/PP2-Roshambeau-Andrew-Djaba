function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        if ((playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
            (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
            (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
            (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
            (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))) {
            result = "YOU WIN!";
        } else {
            result = "YOU LOSE!";
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
}
