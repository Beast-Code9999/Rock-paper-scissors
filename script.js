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

console.log(computerPlay())




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

rockBtn.addEventListener('click', function(){
    
})

paperBtn.addEventListener('click', function(current){
    current.currentTarget.childNodes[1].textContent
})



scissorsBtn.addEventListener('click', function(){
    
})











