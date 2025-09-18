let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let playAgainBtn = document.querySelector("#play-again");

let turnX = true; // true for X's turn, false for O's turn 

let count = 0;

const winningPatterns =[[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true; // disable the box after it's clicked

        count++;
        let isWinner = checkWin();
        if(count === 9 && !isWinner){
            checkDraw(); // check for a draw if all boxes are filled
        }   

    });
});


//enableboses
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false; // enable the boxes
        box.innerText = ""; // clear the text

    }
}

const disableAllBoxes = () => {
    for(let box of boxes){
        box.disabled = true; // disable the boxes
    }
}

const resetGame = () => {
    turnX = true;
    count =0;
    isWinner = false;
    enableBoxes();
    msgContainer.classList.add("hide");
};


const showWinner = (winner) => {
    msg.innerText ="Congratulations! " + winner + " has won the game!";
    msgContainer.classList.remove("hide");
    disableAllBoxes(); // disable all boxes when a winner is found
};

const checkWin = () => {
    for(let pattern of winningPatterns){


        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        

        if(pos1 !== "" && pos2 !== "" && pos3 !== "" && pos1 === pos2 && pos2 === pos3){
            // A winner is found
            showWinner(pos1);
        }
    }
};

let isWinner = checkWin();

const checkDraw =() =>{
    
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableAllBoxes();

};



resetBtn.addEventListener("click", resetGame);
playAgainBtn.addEventListener("click", resetGame);

