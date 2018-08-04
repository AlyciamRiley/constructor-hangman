

var Word = function() {
  //empty array where the individual letters will be
  this.letterArray = [];
  //available words in game
  this.availableWords = [
    "javascript",
    "scope",
    "array",
    "parameters",
    "function",
    "constructor",
    "forloop"
  ];

  //only holds blanks
  this.numBlanks = [];
  this.blanksAndSuccesses = [];

  //chooses random word from array
  var wordInPlay = this.availableWords[
    Math.floor(Math.random() * availableWords.length)
  ];

  //function to split word into characters and push to array
  this.splitWord = function() {
    //creates variable to hold individual letters (this works.)
    var wordInPlayLetters = wordInPlay.split("");
    console.log("Word in play letters: " + wordInPlayLetters);

    //goes through list of letters and pushes them into the empty array above
    for (var i = 0; i < wordInPlayLetters.length; i++) {
      letterArray.push(wordInPlayLetters[i]);
    }
  }

  this.generateBlanks = function() {
    for (var j = 0; j < letterArray.length; j ++) {
      numBlanks.push("__");
    }
  }
  splitWord();
  generateBlanks();

};


module.exports = Word;