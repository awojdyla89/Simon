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
let buttonArr = [greenBtn, yellowBtn, redBtn, blueBtn];
/*----- event listeners -----*/

//document.querySelector("#start-button").addEventListener("click", render);
document.querySelector("#reset-button").addEventListener("click", init);
//greenBtn.addEventListener("click", blink);
//redBtn.addEventListener("click", userGenSequence);
//yellowBtn.addEventListener("click", userGenSequence);
//blueBtn.addEventListener("click", userGenSequence);

computerSequence = ["red", "green", "blue", "yellow"];
function blink() {
  for (i = 0; i < computerSequence.length; i++) {
    console.log(computerSequence[i]);
    if (computerSequence[i] == "red") {
      console.log("red is true");
      redBtn.style.backgroundColor = "white";
      setTimeout("setToRed()", 500);
    }
    else if (computerSequence[i] == "blue") {
      console.log("blue is true");
      blueBtn.style.backgroundColor = "white";
      setTimeout("setToBlue()", 500);
    }
    else if (computerSequence[i] == "green") {
      console.log("green is true");
      blueBtn.style.backgroundColor = "white";
      setTimeout("setToGreen()", 500);
    }
    else if (computerSequence[i] == "yellow") {
      console.log("yellow is true");
      blueBtn.style.backgroundColor = "white";
      setTimeout("setToYellow()", 500);
    }
  }
}
function setToGreen() {
  greenBtn.style.backgroundColor = "green";
}
function setToRed() {
  redBtn.style.backgroundColor = "red";
}
function setToBlue() {
  blueBtn.style.backgroundColor = "blue";
}
function setToYellow() {
  yellowBtn.style.backgroundColor = "yellow";
}

//startBlinking();
//blink();

function startBlinking() {
  setInterval(function () {
    console.log("interval");
    blink();
    console.log("blink()");
  }, 1000);
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


// document.querySelectorAll(".quarter-panel").forEach((item) => {
//   item.addEventListener("mousedown", (flashButton) => {
//     userSequence.push(item.id);
//     compGenSequence();
//     item.style.backgroundColor = "white";
//   });
//   document.querySelectorAll(".quarter-panel").forEach((newItem) => {
//     newItem.addEventListener("mouseup", (resetButton) => {
//       newItem.style.backgroundColor = item.style.backgroundColor;
//     });
//   });
// });

//function to get player name
function getPlayerName() {
  let namePrompt = prompt("Please enter your name");
  if (namePrompt != null) {
    playerName.innerText = namePrompt;
  }
  return playerName;
}
