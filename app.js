let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const resultDisplay = document.querySelector('#result');
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');


const genComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    //math generates random number between 0-2
    const computerChoice = Math.floor(Math.random() *3);
    return option[computerChoice];
}

// const drawGame = () =>{

// }
const showWinner =(userWin,userChoice, computerChoice) =>{
    if(userWin){
        //console.log("You win!");
        userScore++;
        userScoreDisplay.innerText = userScore;
        resultDisplay.innerText =  `You win! Your ${userChoice} beats ${computerChoice}`;
        resultDisplay.style.color = "#03381f";
    }else{
       // console.log("You lose!");
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
        resultDisplay.innerText =      `You lose! ${computerChoice} beats ${userChoice}`;
        resultDisplay.style.color = "black";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    //Genrate computer choice
    const computerChoice = genComputerChoice();
    console.log("computer choice =", computerChoice);

    if(userChoice === computerChoice) {
        console.log("It's a tie!");
        resultDisplay.innerText = `It's a tie!` ;
       // document.getElementById("result").innerText = "It's a tie!";
       resultDisplay.style.color = "#fff"
    } else{
        let userWin = true;
        if(userChoice === "rock" && computerChoice === "paper") {
            userWin = false;
        } else if(userChoice === "paper" && computerChoice === "scissors") {
            userWin = false;
        } else if(userChoice === "scissors" && computerChoice === "rock") {
            userWin = false;
        }
        showWinner(userWin,userChoice, computerChoice);
    }

}


choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       /// console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });

});
