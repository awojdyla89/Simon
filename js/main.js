/*----- constants -----*/
// create array to store random generated sequence
// create a user sequence array to store buttons clicked

// each button when clicked needs to light up and turn off when released 
// create a function for each color: 
// when clicked change the color of button with DOM
// when released change the color back with DOM

/*----- app's state (variables) -----*/
let playerName;
let highScore;
let currentScore;

/*----- cached element references -----*/

/*----- event listeners -----*/

// get user text input for name <input type='text'/>
// get 'start' button click event
// get 'reset' button click event
// get 'audio theme' button click event
// get 'neon blue' button click event
//get 'neon red' button click event
//get 'neon green' button click event
//get 'neon yellow' button click event



/*----- functions -----*/

// create an init() function that creates the starting foundation of the game

// create a render() function that updates: 
// - the player name
// - the current score
// - the high score
// - plays the updated random computer sequence for the buttons


// create a randomNum function that generates a random number between 1-4
function randomNum(){
    let randomIndex =  Math.floor(Math.random() * 4) + 1;
    return randomIndex;
}

// create a function that will run the computer generated sequence at a specfic time interval 

// create a function that increments the random sequence using the randomNum helper function

//