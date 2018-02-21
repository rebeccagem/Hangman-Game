//Arrays for the game
var monsterList = ["aboleth", "chimera", "cockatrice", "demilich", "dracolich", "dryad", "hippogriff", "kobold",  "manitcore", "minotaur", "owlbear", "banderhobb"];
var monster = "";
var lettersInMonster = [];
var numBlanks = 0;
var dashes = [];
var wrongLetters = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var imageArray = ["./assets/images/aboleth.png", "./assets/images/chimera.png", "./assets/images/cockatrice.png", "./assets/images/demilich.png", "./assets/images/dracolich.png", "./assets/images/dryad.png", "./assets/images/hippogriff.png", "./assets/images/kobold.png", "./assets/images/manticore.png", "./assets/images/minotaur.png", "./assets/images/owlbear.png", "./assets/images/banderhobb.png"];


//score keepers
var winCount = 0;
var lossCount = 0;
var guessesLeft = 5; 
var firstRun = true;

//holding some variables here for later
var letterIndex;
var userGuess;
var randomNum;

//this updates the scoreboard when the user first loads the page
chooseMonster();
updateScoreboard();

// This function makes the computer choose a random monster
function chooseMonster() {
    randomNum = Math.floor(Math.random() * monsterList.length);
    monster = monsterList[randomNum];
    console.log(firstRun);

    //if it is the first run Chimera will be the word to guess
    if (firstRun === true) {
        monster = monsterList[1];
    }
    console.log(monster);
    //this seperates the word into letters
    lettersInMonster = monster.split("");
    numBlanks = lettersInMonster.length;
    //this pushes the correct number of letters for the chosen monster to the array dashes
    for (var i = 0; i < numBlanks; i++) {
        dashes.push("_ ");
    }
    //images changing
    var myImage = imageArray[randomNum];
    console.log(myImage);
    if (firstRun === true) {
        myImage = imageArray[1];
    }
    document.getElementById("mainImage").src = myImage;
}

//User input
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letterIndex = alphabet.indexOf(userGuess);
    //This checks to make sure user pressed a letter, not any other key
    if (letterIndex === -1) {
    }
    else {
        letterPressed();
    }

}

//If the user presses a letter, then this function will run
function letterPressed() {
    for (i = 0; i < monster.length; i++) {
        letterIndex = monster.indexOf(userGuess, i);
        if (letterIndex === -1) {
        }
        else {
            dashes[letterIndex] = userGuess;
        }
    }
    letterIndex = monster.indexOf(userGuess);
    if (letterIndex === -1) {
        if (searchLettersGuessed() === -1) {
            wrongLetters.push(userGuess);
            guessesLeft--;
        }
    }

    if (guessesLeft === 0) {
        lossCount++;
        alert("You Lose!");
        gameOver();
    }

    checkWin();
    //this calls the function to update the scoreboard after each user guess
    updateScoreboard();
}


function checkWin() {
    var lengthCount = 0;
    for (i = 0; i < dashes.length; i++) {
        if (dashes[i] === lettersInMonster[i]) {
            lengthCount++;
        }
    }
    if (lengthCount === dashes.length) {
        winCount++;


        setTimeout(function () {

            alert("You Win!");
        }, 200);
        window.setTimeout(gameOver, 400);

    }
}

//this checks to see if the wrong guesses have already been guessed
function searchLettersGuessed() {
    for (i = 0; i < wrongLetters.length; i++) {
        if (getUserGuess() === wrongLetters[i]) {
            return 1;
        }
    }
    return -1;
}

//this is the function to update the scoreboard
function updateScoreboard() {
    document.getElementById("guessMonster").innerHTML = dashes.join("");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    document.getElementById("guessesWrong").innerHTML = wrongLetters;
}

function getUserGuess() {
    return userGuess;
}

function gameOver() {
    wrongLetters = [];
    guessesLeft = 5;
    dashes = [];
    firstRun = false;
    console.log(firstRun);
    chooseMonster();
    updateScoreboard();

}



