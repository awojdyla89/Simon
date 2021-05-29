/*----- constants -----*/
// create array to store random generated sequence
// create a user sequence array to store buttons clicked

const userSequence = [];
const computerSequence = [];

// each button when clicked needs to light up and turn off when released 
// create a function for each color: 
// when clicked change the color of button with DOM
// when released change the color back with DOM

/*----- app's state (variables) -----*/
let playerName;
let highScore;
let currentScore;

/*----- cached element references -----*/

 playerName = document.querySelector('#player-name');

let cScore = document.querySelector('#current-result');
//cScore.innerText = 2;
let hScore = document.querySelector('#high-result');
//hScore.innerText = 27;
let greenBtn = document.querySelector('.green-button');
let yellowBtn = document.querySelector('.yellow-button');
let redBtn = document.querySelector('.red-button');
let blueBtn = document.querySelector('.blue-button');
let startBtn = document.querySelector('#start-button');
let resetBtn = document.querySelector('#reset-button');


/*----- event listeners -----*/

document.querySelector('#start-button').addEventListener('mousedown', playGame);
document.querySelector('#start-button').addEventListener('mouseup', playGame);
document.querySelector('#reset-button').addEventListener('mousedown', resetGame);
document.querySelector('#reset-button').addEventListener('mouseup', resetGame);



document.querySelector('.green-button').addEventListener('mousedown', changeToWhite);
document.querySelector('.green-button').addEventListener('mouseup', clearColor);
document.querySelector('.yellow-button').addEventListener('mousedown', changeToWhite);
document.querySelector('.yellow-button').addEventListener('mouseup', clearColor);
document.querySelector('.red-button').addEventListener('mousedown', changeToWhite);
document.querySelector('.red-button').addEventListener('mouseup', clearColor);
document.querySelector('.blue-button').addEventListener('mousedown', changeToWhite);
document.querySelector('.blue-button').addEventListener('mouseup', clearColor);



/*----- functions -----*/

// create an init() function that creates the starting foundation of the game

// create a render() function that updates: 
// - the player name
// - the current score
// - the high score
// - plays the updated random computer sequence for the buttons

function render(){
    //clearColor();
}


// create a randomNum function that generates a random number between 1-4
function randomNum(){
    let randomIndex =  Math.floor(Math.random() * 4) + 1;
    return randomIndex;
}

// create a function that will run the computer generated sequence at a specfic time interval 

// create a function that increments the random sequence using the randomNum helper function

// basic checks of DOM manipulation for buttons

//function to get player name
function getPlayerName(){
    let namePrompt = prompt("Please enter your name");
    if (namePrompt != null){
        playerName.innerText = namePrompt;
    }
}

//getPlayerName();


function changeToWhite(e){
e.target.style.backgroundColor = 'white';
    
}
function clearColor(){
    greenBtn.style.backgroundColor = 'green';
    redBtn.style.backgroundColor = 'red';
    yellowBtn.style.backgroundColor = 'yellow';
    blueBtn.style.backgroundColor = 'blue';
    startBtn.style.backgroundColor = 'rgb(48, 45, 45)';
    resetBtn.style.backgroundColor = 'rgb(48, 45, 45)';
}



function playGame(e){
    changeToWhite(e);
    clearColor();
    console.log("start button clicked");
}
function resetGame(){
    console.log("reset button clicked");
}
