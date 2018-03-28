// Create a variable to hold a string.
var purpose = "This is not an error.";

document.querySelector(".js-error-1").innerHTML = purpose;

console.log(purpose);


// Create a function that will add and return the sum of two numbers.
function sumThis (no1, no2) {
	var sum = no1 + no2;
	return sum;
}

// Use console.log() to test and determine if sumThis is working properly.
console.log(sumThis(45, 22));
document.querySelector(".js-sum").innerHTML = sumThis(856, 322);
