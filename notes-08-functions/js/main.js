/* Below we declare a function called "society". */
function society() {
	/* Below we tell our function what to do... */
	document.querySelector(".function-1").innerHTML = "I'm a functioning member of society.";
}

/* Below, we invoke our society() function and telling it to run. */
society();

/* Global scope variables live outside of objects or functions, for example... */
var pants = "Jeans";
document.querySelector(".scope-global").innerHTML = pants;

// Global scope variables are easy to access and overwrite. You can overwrite them as easily as referring to the variable's name then changing its element value.
var pants = "Cargo";
document.querySelector(".scope-global").innerHTML = pants;
 
/* Local scope variables live inside of objects and functions. The one below is in local scope and relative to its function. */
function myLocalShirts() {
	var shirts = "Blouse";
	document.querySelector(".scope-local").innerHTML = shirts;
}
// Invoke the myLocalShirts() function to display the shirt type in the DOM
myLocalShirts();

 /* We will declare a similar named global variable below. Note that it does not overwite the local "shirts" variable. */
 var shirts = "Sweater";

 // Outputs the global variable above into our DOM but does not overwrite the local "shirts" variable.
 document.querySelector(".scope-local").innerHTML = shirts;

 // To get our original local variable back, we simply invoke the myLocalShirts() function.
 myLocalShirts();

// My function
function myFunction() {
	document.querySelector(".my-function").innerHTML = "Welcome to my page.";
}
myFunction();

/* Create a function and pass it two arguments "a" and "b" */
function addNumbers(a, b) {
	/* Within the addNumbers() function, we will create a variable that will add the two above arguments together. */
	var sum = a + b;

	/* Use a function "return" to send the "sum" variable outside of the function for other elements to use. */
	return sum;
}
 /* Invoke and display the results of our addNumbers() function. */
 document.querySelector(".arguments-1").innerHTML = "The sum of addNumbers() is " + addNumbers(568, 792) + ".";


function modCalculate(a, b) {
	var modulus = a % b;
	return modulus;
}
document.querySelector(".my-mod").innerHTML = "The remainder of modCalculate() is " + modCalculate(26, 5) + ".";

/* Declare a function that will evaluate a statement using an if conditional. */
function applesOranges(fruitChoice) {
	/* Create a local variable to evaluate the condition */
	var fruitsl

	// Create the if-conditional
	if (fruitChoice == "apples") {
		var fruits = document.querySelector(".conditional-1").innerHTML = "You picked Apples!";
	} else if (fruitChoice == "oranges") {
		var fruits = document.querySelector(".conditional-1").innerHTML = "You picked Oranges!";
	} else {
		var fruits = document.querySelector(".conditional-1").innerHTML = "You picked neither!";
	}
	// Return the result of fruits outside of the function.
	return fruits;
} // Closes applesOranges()

/* Invokes the applesOranges() function */
applesOranges("apples");

/* Below we create the loopFunction() function in order to determine how many times the user has indicated they want to loop. Inside the function, we write in the value pull from the DOM as well as all of the code required for looping. */
function loopFunction() {
	// Create a cariable to retrieve the user's chosen number from the DOM form.
	var loopAmount = document.querySelector(".user-amount").value;
	console.log(loopAmount);

	for (var i = 0; i < loopAmount; i++) {
		document.querySelector(".loop-it").innerHTML += "Looping!<br>";
	}

}














