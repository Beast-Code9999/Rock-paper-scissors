// selections
let playerSelection;
let computerSelection;
let playerScoreCount;
let computerScoreCount;


// select all id using document.selectElementById()
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const compRockBtn = document.getElementById('compRockBtn');
const compPaperBtn = document.getElementById('compPaperBtn');
const compScissorsBtn = document.getElementById('compScissorsBtn');
const playerScore = document.getElementById('playerScore');
const comptuterScore = document.getElementById('computerScore')
const message = document.getElementById('message');
const whyMessage = document.getElementById('whyMessage');
const resultPlayerImg = document.querySelector('.resultPlayerImg');
const resultComputerImg = document.querySelector('.resultComputerImg');
const colorPlayerImage = document.querySelector('.result-img-player');
const colorComputerImage = document.querySelector('.result-img-computer')


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
    })

})


// fuunctoin to add computer css selection
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
// where all function sits
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
    comptuterScore.textContent = compScore;
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
    } else{
        colorPlayerImage.classList.add('show-wrong-result');
        colorPlayerImage.classList.remove('show-correct-result')
        colorComputerImage.classList.add('show-correct-result');
        colorComputerImage.classList.remove('show-wrong-result');
    }
    if(playerWin === "tie") {
        colorPlayerImage.classList.remove('show-wrong-result')
        colorComputerImage.classList.remove('show-correct-result');
        colorPlayerImage.classList.remove('show-correct-result')
        colorComputerImage.classList.remove('show-wrong-result');
    }
}




//write a function that plays a single round of rock paper scissors
function playRound(playerChoice, computerChoice) {
    // console.log(computerSelection);
    addComputerSelection();
    if(playerChoice === computerChoice){
       changeImage(playerChoice, computerChoice);
       changeMessage("IT'S A TIE!", "TRY AGAIN");
       playerWinColor("tie")
    }
    else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper") 
        ) {
            changeImage(playerChoice, computerChoice);
            playerWinColor(true);
        }
    else if (
        (playerChoice === "scissors" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") 
        ) {
            changeImage(playerChoice, computerChoice);
        }
}


//write a game function to declare winner and loser
function game(){
    for(let i = 0; i < 5; i++){
       playRound();
    }
}





