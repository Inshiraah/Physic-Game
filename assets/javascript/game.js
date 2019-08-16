var ComputerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"];

var UserGuesses = [];

var winsCounter = 0;
var lossesCounter = 0;
var GuessLeftCOunter = 9;

var GuessesReset = function() {
    GuessLeftCOunter = 9;
    document.getElementById("Guessesleft").innerHTML = 9;}

var GuessesMadeReset = function() {
    UserGuesses= []
    document.getElementById("GuessesMade").innerHTML= " ";
}


document.onkeyup = function(event) {


var UserGuess = event.key;
UserGuesses.push(UserGuess);
document.getElementById("GuessesMade").innerHTML= UserGuesses;

var ComputerGuess = ComputerChoices[Math.floor(Math.random()*ComputerChoices.length)];


if (ComputerGuess === UserGuess){
 alert(" I guessed " + ComputerGuess + " too! ");
 winsCounter +=1;
 document.getElementById("wins").innerHTML = winsCounter;
 GuessesReset();
 GuessesMadeReset();

}

else if (ComputerGuess !== UserGuess) { 
GuessLeftCOunter --;
document.getElementById("Guessesleft").innerHTML= GuessLeftCOunter;
}


if (GuessLeftCOunter == 0){
alert("You lost!")
lossesCounter +=1;
document.getElementById("losses").innerHTML= lossesCounter;
GuessesReset();
GuessesMadeReset();

}
}
