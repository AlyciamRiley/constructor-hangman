

var Letter = function(letterArray,  wordInPlay, guessedLetter){
    console.log("word in play: " + wordInPlay);
    var wip = "";  
    for (i = 0; i < letterArray.length; i++) { 
      
      // this.char = letterArray[i];
      // this.guessed = false; 
      var ltr = letterArray[i];
      if(guessedLetter === ""){
        wip += " _ ";
      }
      else{
      wip += ltr;        
      }  
  }
  this.toDisplay = function(){
    return wip;
  }
};



module.exports = Letter;
  