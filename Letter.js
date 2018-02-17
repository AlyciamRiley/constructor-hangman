

var Letter = function(){
  this.char ="";
  this.guessed = false; 
  this.toDisplay = function (){
    if (this.guessed === true){
    return this.char
  } else {
  return "_"
  }
 
}
}

module.exports = Letter;
