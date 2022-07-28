var titulo = document.getElementById("titulo")
var primerNumero = document.getElementById("primerValor");
var segundoNumero = document.getElementById("segundoValor");
var boton = document.getElementById('button');
var total = document.getElementById("resultado");

boton.addEventListener("click", mostrarResultado);

function mostrarResultado() {
    var primerValor = parseInt(primerNumero.value);
    var segundoValor = parseInt(segundoNumero.value);
    var suma = primerValor + segundoValor;
    titulo.innerHTML = "Mostrando el resultado de la SUMA";
    total.innerHTML = "El total de la suma es de:" + suma;
}