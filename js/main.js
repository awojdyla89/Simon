/*----- constants -----*/

/*----- app's state (variables) -----*/

let highScore = 1;
let currentScore = 1;
let userSequence = [];
let compSequence = [];

/*----- cached element references -----*/

// let playerName = document.querySelector("#player-name");
let cScore = document.querySelector("#current-result");
let hScore = document.querySelector("#high-result");
let greenBtn = document.querySelector("#green");
let yellowBtn = document.querySelector("#yellow");
let redBtn = document.querySelector("#red");
let blueBtn = document.querySelector("#blue");
let startBtn = document.querySelector("#start-button");
let resetBtn = document.querySelector("#reset-button");
let alertBox = document.querySelector(".alert-box");
let textBox = document.querySelector(".text-box");

/*----- event listeners -----*/

document.querySelector("#start-button").addEventListener("click", playRound);
document.querySelector("#reset-button").addEventListener("click", init);
document.querySelector(".x-button").addEventListener("click", closeBox);

//for every user click event the button clicked is stored in an array.
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

/*----- functions -----*/

//getPlayerName();
// initializes the game state with the reset button listener
function init() {
  //playerName.innerText = "";
  cScore.innerText = 0;
  hScore.innerText = 0;
  highScore = 1;
  currentScore = 1;
  userSequence = [];
  compSequence = [];
  //getPlayerName();
 
}
// function called on the start button listener
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

// asynchronous timing function that displays the computer generated sequence
function showMoves() {
  let i = 0;
  let moves = setInterval(function () {
    dimButton(compSequence[i]);
    i++;
    if (i >= compSequence.length) {
      clearInterval(moves);
    }
  }, 488);
}

// helper function that creates a button dimming affect
function dimButton(doc) {
  doc.style.opacity = "0.6";
  setTimeout(function () {
    doc.style.opacity = "1";
  }, 388);
}

function closeBox() {
  alertBox.style.opacity = "0";
  //alertBox.style.display = "none"
  alertBox.style.visibility = "hidden";
}

// compares the computer generated sequence with the users sequence for equality
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
      promptResults();
      currentScore = 1;
      hScore.innerText = highScore - 1;
      return highScore;
    }
  }
  return;
}

function promptResults() {
  currentScore = currentScore - 1;
  if (currentScore < 5) {
    alertBox.style.visibility = "visible";
    alertBox.style.opacity = "1";
    alertBox.style.backgroundColor = "red";
    textBox.innerText = currentScore + " < 5 - Try again!";
  }
  if (currentScore >= 5 && currentScore <= 10) {
    alertBox.style.visibility = "visible";
    alertBox.style.opacity = "1";
    alertBox.style.backgroundColor = "orange";
    textBox.innerText = currentScore + " in a row - Level 1 Complete!";
  }
  if (currentScore > 11) {
    alertBox.style.visibility = "visible";
    alertBox.style.opacity = "1";
    alertBox.style.backgroundColor = "Green";
    textBox.innerText =  currentScore + " in a row - Level 2 Complete!";
  }
  return;
}

// create a randomNum function that generates a random number between 1-4
function compGenSequence() {
  let choices = [greenBtn, redBtn, blueBtn, yellowBtn];
  let randomIndex = Math.floor(Math.random() * choices.length - 1) + 1;
  compSequence.push(choices[randomIndex]);
  return compSequence;
}

// //function to get player name
// function getPlayerName() {
//    let namePrompt = prompt("Please enter your name: ", "NAME");
//    if (namePrompt != null) {
//     playerName.innerText = namePrompt;
//   }
//   return playerName;
// }
