

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

//play sound
function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();

}

//button animation
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed").delay(100).removeClass("pressed");
}


function nextSequence() {

    //random number generator
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //flash animation
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
}

//user click record
$("button").on("click", function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

});