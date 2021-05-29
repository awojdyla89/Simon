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
let greenBtn = document.querySelector(".green-button");
let yellowBtn = document.querySelector(".yellow-button");
let redBtn = document.querySelector(".red-button");
let blueBtn = document.querySelector(".blue-button");
let startBtn = document.querySelector("#start-button");
let resetBtn = document.querySelector("#reset-button");

/*----- event listeners -----*/

document.querySelector("#start-button").addEventListener("click", render);
document.querySelector("#reset-button").addEventListener("click", init);
document.querySelector(".quarter-panel").addEventListener("click", flash);
document.querySelector(".quarter-panel").addEventListener("click", userGenSequence);

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

function render() {
    getPlayerName();
}

// create a randomNum function that generates a random number between 1-4
function compGenSequence() {
  let choices = ["red", "yellow", "blue", "green"];
  let randomIndex = Math.floor(Math.random() * 4) + 1;
  computerSequence.push(choices[randomIndex]);
  return computerSequence;
}

function userGenSequence() {
    document.querySelectorAll('.quarter-panel').forEach((item) =>{
        item.addEventListener('click', (clickButton) => {
            userSequence.push(item.id);
        })
    })
    return userSequence;
}

function flash() {
  document.querySelectorAll(".quarter-panel").forEach((item) => {
      item.addEventListener("mousedown", (flashButton) => {
          item.style.backgroundColor = "white";
        });
        document.querySelectorAll(".quarter-panel").forEach((newItem) => {
            newItem.addEventListener("mouseup", (resetButton) => {
                newItem.style.backgroundColor = item.style.backgroundColor;
                
      });
    });
  });
}

//function to get player name
function getPlayerName() {
  let namePrompt = prompt("Please enter your name");
  if (namePrompt != null) {
    playerName.innerText = namePrompt;
  }
  return playerName;
}
