/* Below we create an object called "myHouse". This object has properties. */

// Declare an object called "myHouse". You declare objects in a number of ways. Below, we create an object by using the curly braces after naming the object.
var myHouse = {
	// Declare some properties for the "myHouse" object.
	number: 1882,
	garage: true,
	bedrooms: 4,
	bathrooms: 2,
	// Create a property that holds an array.
	extras: ["air conditioning", "patio", "corner lot"],
	// Create another property that holds another array
	locations: ["iowa", "des moines", "pleasant creek"]
};

/* Now that "myHouse" has been created above, you can access its properties by referencing the object name then the property name that you want to access. For example... */
document.querySelector(".my-house").textContent = "My house has " + myHouse.bedrooms + " Bedrooms." + " The house number is " + myHouse.number + ".";

/* Below we will output the elements of the extras array inside of our myHouse object using a for loop to iterate through the array. */

for (var i = 0; i < myHouse.extras.length; i++) {
	document.querySelector(".my-house-extras").innerHTML += myHouse.extras[i] + "<br>";

}

/* Below we will output the elements of the locations array to .my-house-location. */


for (var j = 0; j < myHouse.locations.length; j++) {
	document.querySelector(".my-house-location").innerHTML += myHouse.locations[j] + "<br>";
}

/* Below we will create an object using the "Object Literal" Pattern. This pattern is useful for creating a single use object that holds static properties. */

// Declare the object's name and inform Javascript that it will be a new object.
var myPerson = new Object();

// Fill out the nyPerson object's properties. 
myPerson.name = "Madeline Greene",
myPerson.birthyear = 1945,
myPerson.career = "Accountant",

// Create a method for the myPerson object.
myPerson.getAge = function() {
	// "this" refers to the myPerson object.
	var age = 2018 - this.birthyear;
	return age;
}

/* Output the myPerson object's properties and use its getAge() method. */
document.querySelector(".my-person").textContent = myPerson.name + "'s age is " + myPerson.getAge() + ", she works as an " + myPerson.career + ".";

/* Create a myCar object using the Literal Method Object Creation Pattern */

// Create the myCar object
var myCar = {
	// Fill the myCar object with properties
	brand: "Lexus",
	model: "RX",
	year: 2002,
	// Fill the myCar object with a method called carAge
	carAge: function(current) {
		var theAge = current - this.year;
		return theAge;
	}
}

/*output the myCar object's properties and use its carAge() method */
document.querySelector(".my-car").innerHTML = "Car's Age: " + myCar.carAge(2018) + "<br>" + "Car's Brand: " + myCar.brand + "<br>"  + "Car's Model: " + myCar.model;

/* Create the myFamily object using the Object Constructor Patter, */

// Create the myFamily Object, which will resemble a function with arguments. 
function myFamily (name, surname, age, job) {
	// Define some prototype properties that will be filled in later.
	this.theirName = name;
	this.theirLast = surname;
	this.theirAge = age;
	this.theirJob = job;
	// Define a prototype method for the myFamily object. 
	this.familyMember = function() {
		document.querySelector(".family-1").innerHTML = "Family Member: " + name + " " + surname + "<br>Age: " + age + "<br>Job: " + job;
	}
}

// Use the myFamily prototype above to create sub-objects/sub-classes.
var father = new myFamily("Michael", "Connely", 50, "Realtor");
var mother = new myFamily("Sarah", "Connely", 48, "Nurse");
var son = new myFamily("Jake", "Connely", 20, "Cashier");
var daughter = new myFamily("Emily", "Connely", 16, "Babysitter");

/* Output the family members to the screen using the familyMember method inside of the myFamily Object prototype. */
mother.familyMember();

/* Output pieces and parts of the family member sub-classes directly onto the screen without using the familyMember method. */
document.querySelector(".family-2").innerHTML = father.theirName + " and " + son.theirName + " " + father.theirLast + " are going on a roadtrip.";

