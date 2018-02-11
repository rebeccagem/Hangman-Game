//Arrays for the game
    var monsterList = ["harpy", "kobold", "dryad", "hobgoblin", "manticore","demilich","chimera","aboleth","kraken", "dracolich","owlbear","cockatrice","pseudodragon","rakshasa","minotaur","hippogriff"];
    var monster = "";
    var lettersInMonster = [];
    var numBlanks = 0;
    var dashes = [];
    var wrongLetters = [];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//score keepers
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

//*************
var letterIndex;
var userGuess;

// This function makes the computer choose a random monster
function chooseMonster() {
    monster = monsterList[Math.floor(Math.random() * monsterList.length)];
    //this seperates the word into letters
    lettersInMonster = monster.split("");
    numBlanks = lettersInMonster.length;

//this pushes the correct number of letters for the chosen monster to the array dashes
for (var i=0; i<numBlanks; i++){
    dashes.push("_ ");
}

//this updates the scoreboard when the user first loads the page
updateScoreboard();

//User input
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    letterIndex = alphabet.indexOf(userGuess);
    if (letterIndex === -1){
    }
    else{
        letterPressed();

    }
//this calls the function to update the scoreboard after each user guess
updateScoreboard();
}

function letterPressed(){
    console.log("userguess: "+userGuess);
    letterIndex = monster.indexOf(userGuess)
    console.log(letterIndex);
    if (letterIndex === -1){
        if (searchLettersGuessed() === -1){
            wrongLetters.push(userGuess);
            guessesLeft--;
        }
    }   

    else{
        dashes[letterIndex] = userGuess;
        console.log(dashes);
    }
    updateScoreboard();
}

function searchLettersGuessed() {
    for (i=0; i<wrongLetters.length;i++){
        if (getUserGuess() === wrongLetters[i]){
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
    //this prints the array to the scoreboard
    document.getElementById("guessesWrong").innerHTML = wrongLetters;
}

function getUserGuess() {
    return userGuess;
}

//prints to console for testing
console.log(monster);
console.log(lettersInMonster);
console.log(numBlanks);
console.log(dashes);
}

chooseMonster();

//If user guess is equal to a character within the chosen monster then display user guess

