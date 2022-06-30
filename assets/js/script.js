//se necesita una constante, una variable para el color y otra para la cantidad.
function calcular(){

//variables
const price = Number(400000);
let quantity = document.querySelector("#quantity");
let color = document.querySelector ("#color");
let result = price * Number(quantity.value);

//valores 
let cantidad = document.querySelector("#cantidad");
cantidad.innerHTML = Number(quantity.value);
let total = document.querySelector("#total");
total.innerHTML = result


//circulo
let colorUsuario = document.querySelector("#color")
let circuloColor = document.querySelector(".color-circle")
circuloColor.style.backgroundColor = colorUsuario.value
}