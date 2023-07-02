document.addEventListener('DOMContentLoaded', function () { // Had issues without making sure DOM content was loaded first.

    const buttons = document.querySelectorAll('button');

    // Clicking the buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const playerChoice = this.value;
            const computerChoice = getComputerChoice();
            console.log(computerChoice);

            const result = playRound(playerChoice, computerChoice);
            console.log(result);
        });
    });


    function getComputerChoice() {
        compChoice = ["Rock", "Paper", "Scissors"];
        randNum = Math.floor(Math.random() * 3);
        return compChoice[randNum];
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
            return "Tie";
        }
        else if (playerSelection.toUpperCase() == "ROCK") {
            if (computerSelection.toUpperCase() == "SCISSORS") {
                return "You won! Rock beats Scissors.";
            }
            else {
                return "You lost. Paper beats Rock.";
            }
        }
        else if (playerSelection.toUpperCase() == "PAPER") {
            if (computerSelection.toUpperCase() == "ROCK") {
                return "You won! Paper beats Rock.";
            }
            else {
                return "You lost. Scissors beat Paper.";
            }
        }
        else if (playerSelection.toUpperCase() == "SCISSORS") {
            if (computerSelection.toUpperCase() == "PAPER") {
                return "You won! Scissors beat Paper.";
            }
            else {
                return "You lost. Rock beats Scissors.";
            }
        }
    }

    function game() {
        let userSelection = prompt("Choose from Rock, Paper, & Scissors.");
        let compSelection = getComputerChoice();
        console.log("The computer chose: " + compSelection);
        console.log(playRound(userSelection, compSelection));
    }

});