var buttonRoll = document.getElementById("button");

function rollDice(){
var diceNumber1 = Math.floor(Math.random()* 6) + 1;
var diceNumber2 = Math.floor(Math.random()* 6) + 1;
var diceImage = "images/dice" + diceNumber1 +".png";
var diceImage2 = "images/dice" + diceNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",diceImage);
document.querySelectorAll("img")[1].setAttribute("src",diceImage2);

if ( diceNumber1 > diceNumber2){
  document.querySelector("h1").innerHTML = "The First Player Wins";
}
else if (diceNumber2 > diceNumber1){
  document.querySelector("h1").innerHTML = " The Second Player Wins";
}
else {
  document.querySelector("h1").innerHTML=" Oh No It's a draw";
}
}

buttonRoll.addEventListener("click", rollDice);