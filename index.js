// The file containing the logic for the course of the game, which depends on Word.js and:
var Word = require("./Word.js");
var inquirer = require("inquirer");

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

function start() {
  inquirer
    .prompt({
      name: "startGame",
      type: "rawlist",
      message: "Are you ready to start? ",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.startGame == "YES") {
        Word();
        promptUser();
      } else {
        console.log("Well what are you waiting for?");
      }
    });
}

function promptUser() {
  inquirer
    .prompt([
      {
        name: "guess",
        type: "input",
        message: "Guess a letter!"
      }
    ])
    .then(function(answer) {
      var userGuess = answer.guess;
      var letterInWord = false;

      for (var j = 0; j < letterArray.length; j++) {
        if (userGuess === letterArray[j]) {
          console.log("it matches!");
          letterInWord = true;
        }
      }

      if (letterInWord) {
        for (var k = 0; k < letterArray.length; k++) {
          //identified where user guess is in array, now I need to replace that blank.
          var userGuessIndex = letterArray.indexOf(userGuess);
          console.log("index  " + userGuessIndex);
        }
      }
    });
}

start();
