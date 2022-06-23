// selections
let playerSelection;
let computerSelection;


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
const resultPlayerImg = document.getElementById('resultPlayerImg');
const resultComputerImg = document.getElementById('resultComputerImg');




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
    console.log(computerSelection);
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
        console.log(playerSelection)
        playRound(playerSelection, computerSelection);
    })
})




//write a function that plays a single round of rock paper scissors
function playRound(playerSelection, compPaperBtn) {
    computerSelection = computerPlay().toLowerCase();
    // console.log(computerSelection);
    addComputerSelection();
}





//write a game function to declare winner and loser






