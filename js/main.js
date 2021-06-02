/*----- constants -----*/

/*----- app's state (variables) -----*/
let highScore;
let currentScore;
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


function showMoves() {
  var i = 0;
  var moves = setInterval(function () {
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

/*----- functions -----*/

// create an init() function that creates the starting foundation of the game
function init() {
  playerName.innerText = "";
  cScore.innerText = 0;
  hScore.innerText = 0;
  userSequence = [];
  compSequence = [];
}

function playRound(){
  getPlayerName();
  render();
}

function render(){ 
  compGenSequence();
  showMoves(); 
  //compareResults();
}

// let j = 0;
// function compareResults(){
//   if(userSequence.length === compSequence.length){
//     cScore.innerText = j + 1;
//     for(let i = 0; i < compSequence.length; i++){
//       if(userSequence[i] === compSequence[i].id){
//         console.log("user: " + userSequence + " computer: " + compSequence[i].id)
//         continue;
//       }else {
//         console.log(userSequence + " ==> " + compSequence[i].id)
//         alert('YOU LOSE')
//         return;
//       }
//     }
//     j++;
//     userSequence =[];
//     render();
//   }
// }

function compareResults(){
  for(let i = 0; i < userSequence.length; i++){
    if(userSequence[i] === compSequence[i].id && userSequence.length !== compSequence.length){
      console.log("keep clicking");
      continue;
      
    }else if(userSequence[i] === compSequence[i].id && userSequence.length === compSequence.length){
      userSequence = [];
      render();
      console.log('win render');
      return;
    }else if(userSequence[i] !== compSequence[i].id){
      console.log('lose')
      break;
    }
     
  }
  
}


// function compareResults(){
//   for(click in compSequence){
//     if(userSequence[click] === compSequence[click].id && userSequence.length !== compSequence.length){
//       //console.log("user: " + userSequence[click] + " comp: " + compSequence[click].id)
//       console.log("not equal length")
//     }else if (userSequence[click] !== compSequence[click].id){
//       console.log(userSequence[click] + "==" + compSequence[click].id)
//       console.log('wrong move');
//       //alert('YOU LOSE')
//       return;
//     }
//     if (userSequence[click] === compSequence[click].id && userSequence.length === compSequence.length){
//     userSequence = [];
//     render();
//   }
// }
// }

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

//   for (i = 0; i < computerSequence.length; i++) {

//     if (computerSequence[i] === "red") {
//       console.log("red is true");
//       redBtn.style.backgroundColor = "white";
//       setTimeout("setToRed()", 500);
//     }
//      if (computerSequence[i] === "blue") {
//       console.log("blue is true");
//       blueBtn.style.backgroundColor = "white";
//       setTimeout("setToBlue()", 100);
//     }
//      if (computerSequence[i] === "green") {
//       console.log("green is true");
//       greenBtn.style.backgroundColor = "white";
//       setTimeout("setToGreen()", 100);
//     }
//      if (computerSequence[i] === "yellow") {
//       console.log("yellow is true");
//       yellowBtn.style.backgroundColor = "white";
//       setTimeout("setToYellow()", 1000);
//     }
//   }

// }

// function setToGreen() {
//   greenBtn.style.backgroundColor = "green";
// }
// function setToRed() {
//   redBtn.style.backgroundColor = "red";
// }
// function setToBlue() {
//   blueBtn.style.backgroundColor = "blue";
// }
// function setToYellow() {
//   yellowBtn.style.backgroundColor = "yellow";
// }
// function playGame(field) {
//   document.getElementById(field).style.opacity="0.3";
//   setTimeout(function(){
//       document.getElementById(field).style.opacity="1";
//   }, 1000);
// }
//showMoves();

//var flashInterval = setInterval(blink(), 1000);

// function setColor() {

// computerSequence.forEach((color) =>{
//   if (color === "red") {
//     console.log("red is true");
//     redBtn.style.backgroundColor = redBtn.style.backgroundColor == "red" ? "white" : "red";
//   }
//   if (color === "blue") {
//     console.log("blue is true");
//     blueBtn.style.backgroundColor = blueBtn.style.backgroundColor == "blue" ? "white" : "blue";
//   }
//    if (color === "green") {
//     console.log("green is true");
//     greenBtn.style.backgroundColor = greenBtn.style.backgroundColor == "green" ? "white" : "green";
//   }
//    if (color === "yellow") {
//     console.log("yellow is true");
//     yellowBtn.style.backgroundColor = yellowBtn.style.backgroundColor == "yellow" ? "white" : "yellow";
//   }
// })
// }
// function stopColor() {
//   clearInterval(flashInterval);
// }
