function doMath() {
    var nValue; var amount;
    var price = 100;
    nValue = document.getElementById("message").value;
    amount = (nValue * price);
    document.getElementById("total").value = amount;
}

var mb = [
    "ASUS",
    "Gigabyte",
    "MSI",
    "ASRock",
];

document.getElementById("demo").innerHTML = mb;



Math.PI;

a = 5;
b = 6;
c = a + b;

console.log(mb + " Zahl: " + c);




function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}