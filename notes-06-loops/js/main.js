// Create a for loop that will count up by 1 each time until it reaches the number 10 or 10 loops.
for (var i = 0; i <= 10; i++) {
	document.querySelector(".count-up").innerHTML += i + " loops" + "<br>";

}
for (var j = 15; j >= 0; j--) {
	document.querySelector(".count-down").innerHTMl += j + " loops" + "<br>"; 
}

// Create a for loop that will start at 1, count up to 100 and count up by ten each time.

for (var k = 0; k <= 100; k += 10) {
	document.querySelector(".count-by-ten").innerHTML += k + " loops" + "<br>";
}

// Create an array, iterate through then display it to the DOM.

var breakfast = ["Eggs", "Pancakes", "Bacon", "Orange Juice", "Coffee", "Biscuits", "Oatmeal"];
// document.querySelector(".breakfast-array").innerHTML = breakfast[4];

for (var l = 0; l <= breakfast.length; l++) {
	document.querySelector(".breakfast-array").innerHTML += breakfast[l] + "<br>";
	// for var l = 0; l <= breakfast.length; l++
}

// Create a while loop that will run until the condition is no longer true. 
var playerHitPoints = 100;

while (playerHitPoints > 0) {
	document.querySelector(".while-loop").innerHTML += "<br>Your HP: " + playerHitPoints;
	// Create an iterator to eventually terminate the whole while loop.
	playerHitPoints -= 10;
	document.querySelector(".while-loop").innerHTML += "<br> You got hit by an ogre!" + "<br> Your HP: " + playerHitPoints + "<hr>";

}

// Create a do while loop that will run until the condition is no longer true. 
var playerExp = 0;

do {
	playerExp += 10;
		document.querySelector(".do-while-loop").innerHTML += "<br>You have defeated a bandit.";

	document.querySelector(".do-while-loop").innerHTML += "<br>Your EXP: " + playerExp + "<hr>";

// Create ab uf conditional that checks if the playerExp is 50. Then write a message that says they level up.

if (playerExp == 50) {
	document.querySelector(".do-while-loop").innerHTML += "<br>Congratulations! You've leveled up.";
}

} while (playerExp < 100);
