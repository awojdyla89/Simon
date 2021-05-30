/*----- constants -----*/

/*----- app's state (variables) -----*/
let playerName;
let highScore;
let currentScore;
let userSequence = [];
let computerSequence = [];

/*----- cached element references -----*/

playerName = document.querySelector("#player-name");

let cScore = document.querySelector("#current-result");
let hScore = document.querySelector("#high-result");
let greenBtn = document.querySelector("#green");
let yellowBtn = document.querySelector("#yellow");
let redBtn = document.querySelector("#red");
let blueBtn = document.querySelector("#blue");
let startBtn = document.querySelector("#start-button");
let resetBtn = document.querySelector("#reset-button");

/*----- event listeners -----*/

//document.querySelector("#start-button").addEventListener("click", render);
document.querySelector("#reset-button").addEventListener("click", init);
//greenBtn.addEventListener("click", blink);
//redBtn.addEventListener("click", userGenSequence);
//yellowBtn.addEventListener("click", userGenSequence);
//blueBtn.addEventListener("click", userGenSequence);

function blink() {
  greenBtn.style.backgroundColor = "white";
  setTimeout("setToGreen()", 300);
  
}
function setToGreen() {
  greenBtn.style.backgroundColor = "green";
}

init();
/*----- functions -----*/

// create an init() function that creates the starting foundation of the game
function init() {
  playerName.innerText = "";
  cScore.innerText = 0;
  hScore.innerText = 0;
  userSequence = [];
  computerSequence = [];

  //render();
}

// function render() {
//     getPlayerName();

// }

// create a randomNum function that generates a random number between 1-4
function compGenSequence() {
  let choices = ["red", "yellow", "blue", "green"];
  let randomIndex = Math.floor(Math.random() * choices.length - 1) + 1;
  computerSequence.push(choices[randomIndex]);

  return computerSequence;
}

// function userGenSequence(e) {
//     userSequence.push(e.target.id);
//     compGenSequence();
//     //console.log("user>" + userSequence , "computer> " + computerSequence);
//     //console.log("user>" + userSequence.length , "computer> " + computerSequence.length);
//   return userSequence;
// }

document.querySelectorAll(".quarter-panel").forEach((item) => {
  item.addEventListener("mousedown", (flashButton) => {
    userSequence.push(item.id);
    compGenSequence();
    item.style.backgroundColor = "white";
  });
  document.querySelectorAll(".quarter-panel").forEach((newItem) => {
    newItem.addEventListener("mouseup", (resetButton) => {
      newItem.style.backgroundColor = item.style.backgroundColor;
    });
  });
});

//function to get player name
function getPlayerName() {
  let namePrompt = prompt("Please enter your name");
  if (namePrompt != null) {
    playerName.innerText = namePrompt;
  }
  return playerName;
}
