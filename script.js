document.addEventListener('DOMContentLoaded', function () { // Had issues without making sure DOM content was loaded first.
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('.rpsButton');
    const resultsDiv = document.querySelector('.results');
    const resetButton = document.querySelector('.resetButton');
    const resultPara = document.createElement('p');
    const playerScorePara = document.createElement('p');
    const computerScorePara = document.createElement('p');

    // Clicking the rock, paper, scissors buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (playerScore < 5 && computerScore < 5) {
                const playerChoice = this.value;
                const computerChoice = getComputerChoice();
                console.log(computerChoice);

                playRound(playerChoice, computerChoice);
                console.log(playerScore);
                console.log(computerScore);

                playerScorePara.textContent = `Your score: ${playerScore}`;
                computerScorePara.textContent = `Computer score: ${computerScore}`;
                resultsDiv.appendChild(playerScorePara);
                resultsDiv.appendChild(computerScorePara);

            }

            if (playerScore === 5) {
                resultPara.textContent = "You won the game!";
                resultsDiv.appendChild(resultPara);
                disableButtons();
            } else if (computerScore === 5) {
                resultPara.textContent = "You lost.";
                resultsDiv.appendChild(resultPara);
                disableButtons();
            }
        });
    });

    //clicking the reset button
    resetButton.addEventListener('click', function () {
        playerScore = 0;
        computerScore = 0;
        resultPara.textContent = "";
        playerScorePara.textContent = "";
        computerScorePara.textContent = "";
        resultsDiv.removeChild(resultPara);
        enableButtons();
    });


    function getComputerChoice() {
        compChoice = ["Rock", "Paper", "Scissors"];
        randNum = Math.floor(Math.random() * 3);
        return compChoice[randNum];
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
            resultPara.textContent = "Tie";
        }
        else if (playerSelection.toUpperCase() == "ROCK") {
            if (computerSelection.toUpperCase() == "SCISSORS") {
                resultPara.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
                playerScore++;
            }
            else {
                resultPara.textContent = `You lost. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
                computerScore++;
            }
        }
        else if (playerSelection.toUpperCase() == "PAPER") {
            if (computerSelection.toUpperCase() == "ROCK") {
                resultPara.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
                playerScore++;
            }
            else {
                resultPara.textContent = `You lost. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
                computerScore++;
            }
        }
        else if (playerSelection.toUpperCase() == "SCISSORS") {
            if (computerSelection.toUpperCase() == "PAPER") {
                resultPara.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
                playerScore++;
            }
            else {
                resultPara.textContent = `You lost. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
                computerScore++;
            }
        }
        resultsDiv.appendChild(resultPara);
    }

    function disableButtons() {
        buttons.forEach(button => {
            button.disabled = true;
        });
    }

    function enableButtons() {
        buttons.forEach(button => {
            button.disabled = false;
        });
    }
});