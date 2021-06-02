/*----- constants -----*/

/*----- app's state (variables) -----*/
let highScore = 1;
let currentScore = 1;
let userSequence = [];
let compSequence = [];

/*----- cached element references -----*/

let playerName = document.querySelector("#player-name");
let cScore = document.querySelector("#current-result");
let hScore = document.querySelector("#high-result");
let greenBtn = document.querySelector("#green");
let yellowBtn = document.querySelector("#yellow");
let redBtn = document.querySelector("#red");
let blueBtn = document.querySelector("#blue");
let startBtn = document.querySelector("#start-button");
let resetBtn = document.querySelector("#reset-button");

/*----- event listeners -----*/

document.querySelector("#start-button").addEventListener("click", playRound);
document.querySelector("#reset-button").addEventListener("click", init);

/*----- functions -----*/

function showMoves() {
  let i = 0;
  let moves = setInterval(function () {
    dimButton(compSequence[i]);
    i++;
    if (i >= compSequence.length) {
      clearInterval(moves);
    }
  }, 600);
}

function dimButton(doc) {
  doc.style.opacity = "0.6";
  setTimeout(function () {
    doc.style.opacity = "1";
  }, 500);
}

getPlayerName();
// create an init() function that creates the starting foundation of the game
function init() {
  playerName.innerText = "";
  cScore.innerText = 0;
  hScore.innerText = 0;
  highScore = 1;
  currentScore = 1;
  userSequence = [];
  compSequence = [];
  getPlayerName();
}

function playRound() {
  cScore.innerText = 0;
  //hScore.innerText = 0;
  userSequence = [];
  compSequence = [];
  render();
}

function render() {
  compGenSequence();
  showMoves();
}

function compareResults() {
  for (let i = 0; i < userSequence.length; i++) {
    if (
      userSequence[i] === compSequence[i].id &&
      userSequence.length !== compSequence.length
    ) {
      continue;
    } else if (
      userSequence[i] === compSequence[i].id &&
      userSequence.length === compSequence.length
    ) {
      cScore.innerText = currentScore++;
      if (currentScore > highScore) {
        hScore.innerText = highScore++;
      }
      userSequence = [];
      render();
      return;
    } else if (userSequence[i] !== compSequence[i].id) {
      console.log(currentScore);
      alert("You lost");
      currentScore = 1;
      hScore.innerText = highScore - 1;
      return highScore;
    }
  }
}

// create a randomNum function that generates a random number between 1-4
function compGenSequence() {
  let choices = [greenBtn, redBtn, blueBtn, yellowBtn];
  let randomIndex = Math.floor(Math.random() * choices.length - 1) + 1;
  compSequence.push(choices[randomIndex]);

  return compSequence;
}

//click event that flashes the button
document.querySelectorAll(".quarter-panel").forEach((item) => {
  item.addEventListener("mousedown", (flashButton) => {
    userSequence.push(item.id);
    //item.style.backgroundColor = "white";
    item.style.opacity = "0.8";
    compareResults();
  });
  document.querySelectorAll(".quarter-panel").forEach((newItem) => {
    newItem.addEventListener("mouseup", (resetButton) => {
      //newItem.style.backgroundColor = item.style.backgroundColor;
      newItem.style.opacity = "1.0";
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
