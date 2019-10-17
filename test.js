// Calculate input
function doMath() {
    var nValue; var amount;
    var price = 100;
    nValue = document.getElementById("message").value;
    amount = (nValue * price);
    document.getElementById("total").value = amount;
}

// Array
var mb = [
    "ASUS",
    "Gigabyte",
    "MSI",
    "ASRock",
    "Biostar"
];

// Array output
document.getElementById("array-output").innerHTML = mb[1];

// Math and pi
Math.PI;

// Calculate and log on console
a = 5;
b = 6;
c = a + b;
console.log(mb + " Das Ergebnis ist: " + c);

// Show password checkbox
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// Validate form
function validateForm() {
    var y = document.forms["myForm"]["fname"].value;
    var b = document.getElementById("button1");
    if (y == "") {
        document.getElementById("hinweis").innerHTML = "Name muss ausgefüllt werden!";
        b.style.display = "block";
        return false;
    }
    if (y == "Herb") {
        alert("Dein Name ist " + y + ".");
    }
}

// Hide button after clicking "ok"
function hideButton() {
    var c = document.getElementById("button1");
    c.style.display = "none";

}

// Constructor function for person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a person object
var myFather = new Person("Herbert", "Haida", 61, "grün");
var myMother = new Person("Petra", "Haida", 59, "braun");
var child = myFather.firstName + " " + myFather.lastName + ", " + myMother.eyeColor;
var year = new Date().getUTCFullYear();
var childage = year - 1985;

// Display age
document.getElementById("objekt").innerHTML = "Mein Kind, " + child + " ist " + childage + " Jahre alt.";

console.log(child + " " + ", " + childage);
