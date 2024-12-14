//SEQUENCE
function getCompChoice() {
    choices = ['rock', 'paper', 'scissor']; //Array of choices
    randNum = Math.floor(Math.random() * 3); //Generates a random number from 0 - 2
    choice = choices[randNum]; //selects one choice out of 3 from choices 
    return choice;
}


//Selecting elements through querySelectors

let buttons = document.querySelectorAll("button");

let winner = document.querySelector("#winner");

let score = document.querySelector("#score");



//Creating variables to store scores

let compScore = 0;
let userScore = 0;

//IF-THEN-ELSE
function playRound(e) {
    winner.textContent = "";

    score.textContent = "";

    let compChoice = getCompChoice(); //getting computerChoice through the getCompChoice() function

    let humanChoice = e.target.id;  //getting humanchoice through the eventlistner


    if (compChoice === humanChoice) {
        drawGame(compChoice, humanChoice, compScore, userScore);
    }


    else if ((compChoice === 'rock' && humanChoice === 'scissor') || (compChoice === 'paper' && humanChoice === 'rock') || (compChoice === 'scissor' && humanChoice === 'paper')) {
        compWin(compChoice, humanChoice, compScore, userScore);
    }


    else {
        userWin(compChoice, humanChoice, compScore, userScore);
    }

    //check if any player has reached 5 points

    if (compScore >= 5 || userScore >= 5) {
        buttons.forEach(button => button.removeEventListener("click", playRound)); //stop the game
        winner.textContent = compScore >= 5 ? "Computer wins the game" : "You win the game!";
    }

}


//result after drawGame
function drawGame(compChoice, humanChoice) {
    winner.textContent += `It's a draw. Computer choose ${compChoice} and you choose ${humanChoice}`;
    compScore++;
    userScore++;
    score.textContent += `your score: ${userScore} Computer score: ${compScore} `;

}
//Results after computer win
function compWin(compChoice, humanChoice) {
    winner.textContent += `Computer Wins.Computer choose ${compChoice} and you choose ${humanChoice}`;
    compScore++;
    score.textContent += `your score: ${userScore} Computer score: ${compScore}`;
}
//Results after user win
function userWin(compChoice, humanChoice) {
    winner.textContent += `You Win.Computer choose ${compChoice} and you choose ${humanChoice}`;
    userScore++;
    score.textContent += `your score: ${userScore} Computer score: ${compScore} `;
}


// playGame();

if (compScore < 5 || userScore < 5) {
    buttons.forEach(button => button.addEventListener("click", playRound));
}




