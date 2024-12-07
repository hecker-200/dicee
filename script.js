
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

// Build the image source paths
var diceImage1 = "images/dice" + randomNumber1 + ".png";
var diceImage2 = "images/dice" + randomNumber2 + ".png";


var player1 = prompt("enter your name player 1");
var player2 = prompt("enter your name player 2");


document.querySelector("#p1").textContent = player1;
document.querySelector("#p2").textContent = player2;


// Set the images for the dice
document.querySelector(".img1").setAttribute("src", diceImage1);
document.querySelector(".img2").setAttribute("src", diceImage2);


if(randomNumber1 > randomNumber2){

    document.querySelector("h1").textContent = player1 + " wins";
}

else if(randomNumber2 > randomNumber1){
     document.querySelector("h1").textContent = player2 +  " wins";
    }


else{
    document.querySelector("h1").textContent = "GOD FAVOURS YOU BOTH";
}

