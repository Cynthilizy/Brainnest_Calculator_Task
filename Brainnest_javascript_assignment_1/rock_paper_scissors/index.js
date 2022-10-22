"use strict";
let userScore = document.getElementById('playerScore');
let machineScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.container button')
let userIcon = document.querySelector('.show i');
let machineIcon = document.querySelector('.computer i');
let computerScore = 0;
let playerScore = 0;
const rockImage = "fas fa-hand-rock";
const paperImage = "fas fa-hand-paper";
const scissorsImage = "fas fa-hand-scissors";
let imageArray = [rockImage, paperImage, scissorsImage];
let text = document.getElementById('textOne');
let text2 = document.getElementById('textTwo');
let tie = () => {
    text.innerHTML = "IT'S A TIE ! ";
    text.style.color = 'rgb(13,255,0)';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'rgb(13,255,0)';
}
let lose = () => {
    text.innerHTML = "YOU LOSE ! ";
    text.style.color = 'black';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'black';
    if (computerScore === 5) {
        text.innerHTML = "GAME OVER! COMPUTER WIN BY " + Number(computerScore - playerScore) + " POINTS";
        text2.innerHTML = "CHOOSE ANY IMAGE TO PLAY AGAIN!!";
        playerScore = 0;
        computerScore = 0;
    }
}
let win = () => {
    text.innerHTML = "IT'S A WIN ! ";
    text.style.color = 'white';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'white';
    if (playerScore === 5) {
        text.innerHTML = "GAME OVER! YOU WIN COMPUTER BY " + Number(playerScore - computerScore) + " POINTS";
        text2.innerHTML = "CHOOSE ANY IMAGE TO PLAY AGAIN!!";
        playerScore = 0;
        computerScore = 0;
    }
}
let game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let clickedBtn = e.target.className;
            userIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * imageArray.length);
            machineIcon.className = imageArray[randomNum];
            console.log("player chose " + clickedBtn + " :computer chose " + machineIcon.className);
            if (userIcon.className === machineIcon.className) {
                userScore.innerHTML = playerScore;
                machineScore.innerHTML = computerScore;
                tie();
            }
            else if ((userIcon.className === rockImage && machineIcon.className === scissorsImage) ||
                (userIcon.className === paperImage && machineIcon.className === rockImage) ||
                (userIcon.className === scissorsImage && machineIcon.className === paperImage)) {
                playerScore++;
                userScore.innerHTML = playerScore;
                machineScore.innerHTML = computerScore;
                win();
            } else if ((userIcon.className === rockImage && machineIcon.className === paperImage) ||
                (userIcon.className === paperImage && machineIcon.className === scissorsImage) ||
                (userIcon.className === scissorsImage && machineIcon.className === rockImage)) {
                computerScore++;
                userScore.innerHTML = playerScore;
                machineScore.innerHTML = computerScore;
                lose();
            }
        }
        )
    }
    )
}
game();