let computerOptions = ["Rock", "Paper", "Scissors"];
const playerSelection = document.getElementById('selection').addEventListener('click', function() {
    console.log("you selected: ", this.value);
})

console.log(playerSelection);

let mathRandom = () => {
    return Math.floor(Math.random() * 3);
  }
  
let computerPlay = () => {
    return computerOptions[mathRandom()];
}

console.log(computerPlay())
