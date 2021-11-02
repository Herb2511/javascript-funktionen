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
el.textContent = colors[3];

// Arrays Konstruktor "new Array"
var colors = new Array('weiß', 'rot', 'schwarz', 'benutzer');
var el = document.getElementById('colors');
el.innerHTML = colors.item(0);

// Werte in Arrays
var numColors;
numColors = colors.length;

console.log(numColors);
