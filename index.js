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
        }
        else {
          console.log("Well what are you waiting for?");
          start();
        }
      });
  }
  
  start();