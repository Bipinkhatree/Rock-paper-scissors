function getCompChoice() {
    choices = ['rock', 'paper', 'scissor'];
    randNum = Math.floor(Math.random() * 3);
    compChoice = choices[randNum];
    console.log(randNum);
    console.log(compChoice);
}

getCompChoice();