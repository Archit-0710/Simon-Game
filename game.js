

var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];

var gamePattern = [];
gamePattern.push(randomChosenColour);
console.log(gamePattern);

$("#" + randomChosenColour).fadeOut(30).fadeIn(30);
var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
audio.play();


//random number generator
function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    return(randomNumber);
}