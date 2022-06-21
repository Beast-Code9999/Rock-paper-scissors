// randomise choice for computer
let computerOptions = ["Rock", "Paper", "Scissors"];

let mathRandom = () => {
    return Math.floor(Math.random() * 3);
  }
  
let computerPlay = () => {
    return computerOptions[mathRandom()];
}

console.log(computerPlay())




// select all id using document.selectElementById()
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');














