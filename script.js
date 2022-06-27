// selections
let playerSelection;
let computerSelection;
let playerScoreCount = 0;
let computerScoreCount = 0;
let tieCount = 0;
let winner = '';


// select all id using document.selectElementById()
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const compRockBtn = document.getElementById('compRockBtn');
const compPaperBtn = document.getElementById('compPaperBtn');
const compScissorsBtn = document.getElementById('compScissorsBtn');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore')
const message = document.getElementById('message');
const whyMessage = document.getElementById('whyMessage');
const resultPlayerImg = document.querySelector('.resultPlayerImg');
const resultComputerImg = document.querySelector('.resultComputerImg');
const colorPlayerImage = document.querySelector('.result-img-player');
const colorComputerImage = document.querySelector('.result-img-computer');
const main = document.getElementById('main');
const ending = document.querySelector('.ending');
const fancyText = document.querySelector('.fancy');
const playAgainBtn = document.querySelector('.playAgainBtn');
const laserSound = document.getElementById('laseSound');
const missionPassed = document.getElementById('misisonPassed');
const missionFailed = document.getElementById('youDied');


// randomise choice for computer
let computerOptions = ["Rock", "Paper", "Scissors"];

let mathRandom = () => {
    return Math.floor(Math.random() * 3);
  }
  
let computerPlay = () => {
    return computerOptions[mathRandom()];
}


// now write a function to listen for player selection
const playerBtn = document.querySelectorAll('.playerBtn');

//create a function to select individual button
playerBtn.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(){
        // console.log(button.classList)
        playerBtn.forEach(function(item){
            if(item !== button){
                item.classList.remove('show-player-selection');
            }
        })
        button.classList.add('show-player-selection');
        laserSound.play();
    })

})


// function to add computer css selection
function addComputerSelection() {
    // console.log(computerSelection);
    if(computerSelection == 'rock'){
        compRockBtn.classList.add('show-computer-selection');
    } else {
        compRockBtn.classList.remove('show-computer-selection');
    }

    if(computerSelection == 'paper'){
        compPaperBtn.classList.add('show-computer-selection');
    } else {
        compPaperBtn.classList.remove('show-computer-selection');
    }

    if(computerSelection == 'scissors'){
        compScissorsBtn.classList.add('show-computer-selection');
    } else {
        compScissorsBtn.classList.remove('show-computer-selection');
    }
}


// now find a way to return a string value through clicks
playerBtn.forEach(function(button) {
    button.addEventListener('click', () => {
        playerSelection = button.getAttribute('value').toLowerCase();
        computerSelection = computerPlay().toLowerCase();        
        // console.log(playerSelection)
        playRound(playerSelection, computerSelection);
    })
})


// write a function for score 
function changeScore(playScore="Score: uwu", compScore="Score: uwu"){
    playerScore.textContent = playScore;
    computerScore.textContent = compScore;
}


// write a function for message
function changeMessage(string= "What", string2= "is up"){
    message.textContent = string;
    whyMessage.textContent = string2;
}


// Write a function to change the result image
function changeImage(playerImage, computerImage) {
    resultPlayerImg.src = `./img/${playerImage}.png`;
    resultComputerImg.src = `./img/${computerImage}.png`
}


// below is a function to chnage the color of image depends on whether on not they win
function playerWinColor(playerWin){
    if(playerWin === true){
        colorPlayerImage.classList.add('show-correct-result');
        colorPlayerImage.classList.remove('show-wrong-result')
        colorComputerImage.classList.add('show-wrong-result');
        colorComputerImage.classList.remove('show-correct-result');
        colorPlayerImage.classList.remove('show-tie-result');
        colorComputerImage.classList.remove('show-tie-result');
    } else{
        colorPlayerImage.classList.add('show-wrong-result');
        colorPlayerImage.classList.remove('show-correct-result')
        colorComputerImage.classList.add('show-correct-result');
        colorComputerImage.classList.remove('show-wrong-result');
        colorPlayerImage.classList.remove('show-tie-result');
        colorComputerImage.classList.remove('show-tie-result');
    }
    if(playerWin === "tie") {
        colorPlayerImage.classList.remove('show-wrong-result')
        colorComputerImage.classList.remove('show-correct-result');
        colorPlayerImage.classList.remove('show-correct-result')
        colorComputerImage.classList.remove('show-wrong-result');
        colorPlayerImage.classList.add('show-tie-result');
        colorComputerImage.classList.add('show-tie-result');
    }
}


//write a function that plays a single round of rock paper scissors and determine the winner and what happens after
function playRound(playerChoice, computerChoice) {
    // console.log(computerSelection);
    addComputerSelection();
    if(playerChoice === computerChoice){
       changeImage(playerChoice, computerChoice);
       playerWinColor("tie")
       tieCount++;
       switch (tieCount) {
        case 1:
            changeMessage("IT'S A TIE!", "TRY AGAIN");
            break;
        case 2: 
            changeMessage("IT'S A TIE AGAIN!", "PERHAPS THIRD TIME IS THE CHARM");
            break;
        case 3:
            changeMessage("NOPE", "MAYBE UH FOURTH TIME IS THE CHARM");
            break;
        case 4:
            changeMessage("HUH?", "FOUR IN A ROW");
            break;
        case 5:
            changeMessage("NANI?", "I MEAN, MAYBE YOU CAN TRY ONE MORE TIME");
            break;
        default:
            changeMessage("ANOTHER ONE?!", "YOU HAVE BROKEN THE MATRIX");
       }
    }
    else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper") 
        ) {
            changeImage(playerChoice, computerChoice);
            playerWinColor(true);
            tieCount = 0;
            playerScoreCount++;
            changeScore(`SCORE: ${playerScoreCount}`, `SCORE: ${computerScoreCount}`);
            switch (playerScoreCount) {
                case 1:
                    changeMessage("YOUR FIRST WIN!", `${playerChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}, KEEP IT UP`);
                    break;
                case 2: 
                    changeMessage("ANOTHER ONE FOR THE BOOKS!", `${playerChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}, SPLENDID CHOICE`);
                    break;
                case 3:
                    changeMessage("YOU WON AGAIN!", `${playerChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}, TWO MORE TO GO AND YOU WILL BE LEGENDARY`);
                    break;
                case 4: 
                    changeMessage("ONE MORE TIME", `${playerChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}, YOU GOT THIS`);
                    break;
                case 5:
                    winner = "player"
                    endGame();
                    playerScoreCount = 0;
                    computerScoreCount = 0;
                    break;

            }
        }
    else if (
        (playerChoice === "scissors" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") 
        ) {
            changeImage(playerChoice, computerChoice);
            playerWinColor(false);
            tieCount = 0;
            computerScoreCount++;
            changeScore(`SCORE: ${playerScoreCount}`, `SCORE: ${computerScoreCount}`);
            switch (computerScoreCount) {
                case 1:
                    changeMessage("YOU LOST!", `${computerChoice.toUpperCase()} BEATS ${playerChoice.toUpperCase()}, BUT THAT'S OKAY, LET'S TRY AGAIN`);
                    break;
                case 2: 
                    changeMessage("LOSS IS NECESSARY FOR GROWTH", `${computerChoice.toUpperCase()} BEATS ${playerChoice.toUpperCase()}, KEEP TRYING`);
                    break;
                case 3:
                    changeMessage("ANOTHER LOSS", `${computerChoice.toUpperCase()} BEATS ${playerChoice.toUpperCase()}, BUT DO NOT GIVE UP`);
                    break;
                case 4: 
                    changeMessage("ONE MORE LOSS AND YOU ARE DONE", `${computerChoice.toUpperCase()} BEATS ${playerChoice.toUpperCase()}, MAY THE FORCE BE WITH YOU`);
                    break;
                case 5:
                    winner = "computer"
                    endGame();
                    playerScoreCount = 0;
                    computerScoreCount = 0;
                    break;

            }
        }
}


// below is a function to declare the winner and write the text content ending
function winnerText() {
    if(winner === "player") {
        fancyText.textContent = "MISSION PASSED: RESPECT++"
        fancyText.classList.add('show-win-fancy');
        missionPassed.play();
    }
    else if (winner === "computer") {
        fancyText.textContent = "MISSION FAILED"
        fancyText.classList.add('show-lose-fancy');
        missionFailed.play();
    }
}


// function on when clicked on try again button the page will set everything back to zero

// const computerBtn = document.querySelectorAll('.computerBtn');

// // function playAgain() {
// //     playAgainBtn.addEventListener('click', function() {
// //         changeScore("score: 0", "score: 0")
// //         main.classList.remove('hide-content');
// //         ending.classList.add('hide-content');
// //         playAgainBtn.classList.add('hide-content');
// //         colorPlayerImage.classList.remove('show-correct-result');
// //         colorPlayerImage.classList.remove('show-wrong-result');
// //         colorComputerImage.classList.remove('show-wrong-result');
// //         colorComputerImage.classList.remove('show-correct-result');
// //         colorPlayerImage.classList.remove('show-tie-result');
// //         colorComputerImage.classList.remove('show-tie-result');
// //         changeMessage("LET'S START!", "MAY THE FORCE BE WITH YOU")
// //         playerBtn.forEach(function(button) {
// //             button.classList.remove('show-player-selection')
// //         })
// //         computerBtn.forEach(function(button) {
// //             button.classList.remove('show-computer-selection')
// //         })
// //         changeImage("paper", "rock")       
// //     })
// // }


function playAgain() {
    playAgainBtn.addEventListener('click', function() {
        window.location.reload();
    })       
}


// now write a function to end the game once playerScoreCount || computerScoreCount reaches 5 and show the ending div
function endGame() {
    main.classList.add('hide-content');
    ending.classList.remove('hide-content');
    playAgainBtn.classList.remove('hide-content');
    winnerText();
    playAgain();
}