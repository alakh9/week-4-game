var targetLevel = "";
var numberOptions = [];
var wins= 0;
var losses= 0;
var counter = 0;

var random = Math.floor(Math.random() * 120 ) + 19 ;
targetLevel = random + targetLevel;


    
$("#level-to-guess").text(targetLevel);


$(".light-saber").on("click", function() {
    counter += 10;
    if (counter === random) {

     alert("You win!");
     wins++;
     $("#userwins").text(wins);
    }
    else if (counter >= random) {

    alert("You lose!!");
    losses++;
    $("#userlosses").text(losses);
    }
    $("#userlevel").text(counter);

});
$(".magic-wand").on("click", function() {
    counter += 1;
    if (counter === random) {

     alert("You win!");
     wins++;
     $("#userwins").text(wins);
    }
    else if (counter >= random) {

    alert("You lose!!");
    losses++;
    $("#userlosses").text(losses);
    }
    $("#userlevel").text(counter);

});
$(".ray-gun").on("click", function() {
    counter += 5;
    if (counter === random) {

     alert("You win!");
     wins++;
     $("#userwins").text(wins);
    }
    else if (counter >= random) {

    alert("You lose!!");
    losses++;
    $("#userlosses").text(losses);
    }
    $("#userlevel").text(counter);

});
$(".thor-hammer").on("click", function() {
    counter += 20;
    if (counter === random) {

     alert("You win!");
     wins++;
     $("#userwins").text(wins);
    }
    else if (counter >= random) {

    alert("You lose!!");
    losses++;
    $("#userlosses").text(losses);
    }
    $("#userlevel").text(counter);

});
