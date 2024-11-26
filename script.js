//SEQUENCE
function getCompChoice() {
    choices = ['rock', 'paper', 'scissor']; //Array of choices
    randNum = Math.floor(Math.random() * 3); //Generates a random number from 0 - 2
    choice = choices[randNum]; //selects one choice out of 3 from choices 
    console.log(randNum);
    console.log(choice);
    return choice;
}

let compChoice = getCompChoice(); //CALL getCompChoice to generate a computer choice and store in compChoice
console.log(compChoice);

//Creating a function where user can input his/her choice
function getHumanChoice() {
    choices = ['rock', 'paper', 'scissor']
    input = prompt("please enter your choice : 0:'rock' 1:'paper' 2:'scissor'");// Telling user to enter choice
    userChoice = choices[input];
    console.log(userChoice);
    //Checking if the user inputs the valid choice
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissor') {
        console.log(`You have choosed ${userChoice}`)
    }
    else {
        console.log("Please input a valid choice"); //If user inputs invalid choice inform them
    }
    return userChoice;
}
let humanChoice = getHumanChoice(); //CALL humanChoice to get user choice


//Creating variables to store scores

let compScore = 0;
let userScore = 0;

//IF-THEN-ELSE
function playRound(compChoice, humanChoice) {


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


playRound(compChoice, humanChoice);


// playGame();