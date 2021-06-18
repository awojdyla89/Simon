let highScore = 1;
let currentScore = 1;
let userSequence = [];
let compSequence = [];

/*----- cached element references -----*/

let cScore = document.querySelector("#current-result");
let hScore = document.querySelector("#high-result");
let greenBtn = document.querySelector("#green");
let yellowBtn = document.querySelector("#yellow");
let redBtn = document.querySelector("#red");
let blueBtn = document.querySelector("#blue");
let alertBox = document.querySelector(".alert-box");
let textBox = document.querySelector(".text-box");

/*----- event listeners -----*/

document.querySelector("#start-button").addEventListener("click", playRound);
document.querySelector("#reset-button").addEventListener("click", init);
document.querySelector(".x-button").addEventListener("click", closeBox);
document.querySelector(".simon-buttons").addEventListener("click", playerMove);

/*----- functions -----*/

function init() {
  cScore.innerText = 0;
  hScore.innerText = 0;
  highScore = 1;
  currentScore = 1;
  userSequence = [];
  compSequence = [];
}

function playRound() {
  cScore.innerText = 0;
  userSequence = [];
  compSequence = [];
  render();
}

function render() {
  computerMove();
  showMoves();
}

function computerMove() {
  let choices = [greenBtn, redBtn, blueBtn, yellowBtn];
  let randomIndex = Math.floor(Math.random() * choices.length - 1) + 1;
  compSequence.push(choices[randomIndex]);
  return compSequence;
}

function playerMove(evt) {
  if (
    evt.target.id == "green" ||
    evt.target.id == "red" ||
    evt.target.id == "blue" ||
    evt.target.id == "yellow"
  ) {
    userSequence.push(evt.target.id);

    evt.target.style.opacity = "0.6";
    setTimeout(function () {
      evt.target.style.opacity = "1";
    }, 170);

    compareResults();
  }
}

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

function dimButton(doc) {
  doc.style.opacity = "0.6";
  setTimeout(function () {
    doc.style.opacity = "1";
  }, 388);
}

function closeBox() {
  alertBox.style.opacity = "0";
  alertBox.style.visibility = "hidden";
}

function compareResults() {
  for (move in userSequence) {
    if (
      userSequence[move] === compSequence[move].id &&
      userSequence.length != compSequence.length
    ) {
    } else if (userSequence[move] != compSequence[move].id) {
      promptResults();
      currentScore = 1;
      hScore.innerText = highScore - 1;
      return highScore;
    }
  }
  if (
    userSequence[move] === compSequence[move].id &&
    userSequence.length === compSequence.length
  ) {
    cScore.innerText = currentScore++;

    if (currentScore > highScore) {
      hScore.innerText = highScore++;
    }

    userSequence = [];
    render();
  }
}

function promptResults() {
  currentScore = currentScore - 1;
  if (currentScore < 3) {
    alertBox.style.visibility = "visible";
    alertBox.style.opacity = "1";
    alertBox.style.backgroundColor = "red";
    textBox.innerText = "You need 3 in a row to level up - Try again!";
    return;
  }
  if (currentScore >= 3 && currentScore <= 6) {
    alertBox.style.visibility = "visible";
    alertBox.style.opacity = "1";
    alertBox.style.backgroundColor = "orange";
    textBox.innerText = "Level 1 Complete!";
    return;
  }
  if (currentScore > 6 && currentScore <= 9) {
    alertBox.style.visibility = "visible";
    alertBox.style.opacity = "1";
    alertBox.style.backgroundColor = "lightblue";
    textBox.innerText = "Level 2 Complete! Nice!";
    return;
  }
  if (currentScore > 10 && currentScore <= 13) {
    alertBox.style.visibility = "visible";
    alertBox.style.opacity = "1";
    alertBox.style.backgroundColor = "Green";
    textBox.innerText = "Level 3 Complete! Fantastic!";
    return;
  }
  return;
}
