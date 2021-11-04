// Den Wert einer Variable ändern, Bool
var inStock;
var shipping;

inStock = true;
shipping = false;

// Hier kann irgendeine Form der Verarbeitung erfolgen, als deren Ergebnis der Wert dieser Variablen geändert werden muss.
inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;

// Arrays
var colors;
colors = ['weiß', 'rot', 'schwarz', 'benutzer'];
var el = document.getElementById('colors');
el.textContent = colors[1];

// Arrays Konstruktor "new Array"
var colors2 = new Array('weiß', 'rot', 'schwarz', 'benutzer');
var el = document.getElementById('colors');
// el.innerHTML = colors2.item(0);

// Werte in Arrays
var numColors;
numColors = colors.length;

// Arithmetische Operatoren, Num, Strings, Bools
var subtotal = (13 + 1) * 5; // Zwischensumme 70
var shipping = 0.5 * (13 + 1); // Lieferkosten 7

var total = subtotal + shipping; // Summe 77

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

console.log(shipping);

