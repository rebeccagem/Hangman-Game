//Arrays for the game
    var monsters = ["harpy", "kobold", "ogre", "dryad", "hobgoblin", "manticore","demilich","chimera","aboleth","kraken", "dracolich","owlbear","cockatrice","pseudodragon","rakshasa","minotaur","hippogriff"];

    var monster = "";
    var lettersInMonster = [];
    


// This function makes the computer choose a random monster
function choosenMonster() {
    var monster = monsters[Math.floor(Math.random() * monsters.length)];
    return monster


}

lettersInMonster = monster.split("");
var guessMonster = choosenMonster();
console.log('Monster:' + guessMonster);
console.log(lettersInMonster);

//score keepers
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
//display underscores eqaul to number of characters in the chosen monster word

//Intake user guess

//If user guess is equal to a character within the chosen monster then display user guess

