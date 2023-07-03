document.addEventListener('DOMContentLoaded', function () { // Had issues without making sure DOM content was loaded first.

    const buttons = document.querySelectorAll('button');

    const resultsDiv = document.querySelector('.results');

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

        const resultPara = document.createElement('p');


        if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
            resultPara.textContent = "Tie";
            resultsDiv.appendChild(resultPara);
        }
        else if (playerSelection.toUpperCase() == "ROCK") {
            if (computerSelection.toUpperCase() == "SCISSORS") {
                resultPara.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
                resultsDiv.appendChild(resultPara); 
            }
            else {
                resultPara.textContent = `You lost. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
                resultsDiv.appendChild(resultPara);
            }
        }
        else if (playerSelection.toUpperCase() == "PAPER") {
            if (computerSelection.toUpperCase() == "ROCK") {
                resultPara.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
                resultsDiv.appendChild(resultPara);
            }
            else {
                resultPara.textContent = `You lost. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
                resultsDiv.appendChild(resultPara);
            }
        }
        else if (playerSelection.toUpperCase() == "SCISSORS") {
            if (computerSelection.toUpperCase() == "PAPER") {
                resultPara.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
                resultsDiv.appendChild(resultPara);
            }
            else {
                resultPara.textContent = `You lost. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
                resultsDiv.appendChild(resultPara);
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