document.addEventListener('DOMContentLoaded', function () { // Had issues without making sure DOM content was loaded first.
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('.rpsButton');
    const resultsDiv = document.querySelector('.results');
    const resetButton = document.querySelector('.resetButton');
    const resultPara = document.createElement('p');

    // let resetGame = false;
    
    // Clicking the rock, paper, scissors buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (playerScore < 5 && computerScore < 5) {
                const playerChoice = this.value;
                const computerChoice = getComputerChoice();
                console.log(computerChoice);

                const result = playRound(playerChoice, computerChoice);
                // playFiveRounds(playerChoice, computerChoice);
                console.log(playerScore);
                console.log(computerScore);
            }
            else if (playerScore === 5 || computerScore === 5) {
                if (playerScore === 5) {
                    resultPara.textContent = "You won the game!";
                }
                else {
                    resultPara.textContent = "You lost.";
                }
                resultsDiv.appendChild(resultPara);
            }
        });
    });

    //clicking the reset button
    resetButton.addEventListener('click', function () {
        playerScore = 0;
        computerScore = 0;
        resultPara.textContent = "";
        resultsDiv.removeChild(resultPara);
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
                playerScore ++;
            }
            else {
                resultPara.textContent = `You lost. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
                computerScore ++;
            }
        }
        else if (playerSelection.toUpperCase() == "PAPER") {
            if (computerSelection.toUpperCase() == "ROCK") {
                resultPara.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
                playerScore ++;
            }
            else {
                resultPara.textContent = `You lost. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
                computerScore ++;
            }
        }
        else if (playerSelection.toUpperCase() == "SCISSORS") {
            if (computerSelection.toUpperCase() == "PAPER") {
                resultPara.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
                playerScore ++;
            }
            else {
                resultPara.textContent = `You lost. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
                computerScore ++;
            }
        }
        resultsDiv.appendChild(resultPara);
    }

    // function reset() {
    //     resetGame = true;
    //     playerScore = 0;
    //     computerScore = 0;
    // }

    // function game(playerSelection, computerSelection) {
    //     let userSelection = prompt("Choose from Rock, Paper, & Scissors.");
    //     let compSelection = getComputerChoice();
    //     console.log("The computer chose: " + compSelection);
    //     console.log(playRound(userSelection, compSelection));
    // }

    // function playFiveRounds(playerSelection, computerSelection) {
    //     while (playerScore < 5 || computerScore < 5) {
    //         playRound(playerSelection, computerSelection);
    //     }
    // }

});