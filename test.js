function doMath() {
    var nValue; var amount;
    var price = 100;
    nValue = document.getElementById("message").value;
    amount = (nValue * price);
    document.getElementById("total").value = amount;
}