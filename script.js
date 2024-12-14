//SEQUENCE
function getCompChoice() {
    choices = ['rock', 'paper', 'scissor']; //Array of choices
    randNum = Math.floor(Math.random() * 3); //Generates a random number from 0 - 2
    choice = choices[randNum]; //selects one choice out of 3 from choices 
    console.log(randNum);
    console.log(choice);
    return choice;
}


//Selecting elements through querySelectors

let buttons = document.querySelectorAll("button");


//CALL humanChoice to get user choice


//Creating variables to store scores

let compScore = 0;
let userScore = 0;

//IF-THEN-ELSE
function playRound(e) {
    let compChoice = getCompChoice();
    let humanChoice = e.target.id;
    if (compChoice === humanChoice) {
        drawGame(compChoice, humanChoice, compScore, userScore);
    }
    else if ((compChoice === 'rock' && humanChoice === 'scissor') || (compChoice === 'paper' && humanChoice === 'rock') || (compChoice === 'scissor' && humanChoice === 'paper')) {
        compWin(compChoice, humanChoice, compScore, userScore);
    }
    else {
        userWin(compChoice, humanChoice, compScore, userScore);
    }

}

//result after drawGame
function drawGame(compChoice, humanChoice, compScore, userScore) {
    console.log(`It's a draw. Computer choose ${compChoice} and you choose ${humanChoice}`);
    compScore++;
    userScore++;
    console.log(`your score: ${userScore} Computer score: ${compScore} `)

}
//Results after computer win
function compWin(compChoice, humanChoice, compScore, userScore) {
    console.log(`Computer Wins. Computer choose ${compChoice} and you choose ${humanChoice}`);
    compScore++;
    console.log(`your score: ${userScore} Computer score: ${compScore} `)
}
//Results after user win
function userWin(compChoice, humanChoice, compScore, userScore) {
    console.log(`You Win. Computer choose ${compChoice} and you choose ${humanChoice}`);
    userScore++;
    console.log(`your score: ${userScore} Computer score: ${compScore} `)
}

buttons.forEach(button => button.addEventListener("click", playRound));


// playGame();