const boton = document.getElementById("btn");
const nCantidad = document.querySelector(".cantidad").value;
const colorSelect = document.querySelector(".colorSelect").value;
const color = document.querySelector(".col");
const color2 = document.querySelector(".containerFluid1");

boton.addEventListener("click", function(){
    let total = nCantidad * 2000;
    document.getElementById("tot").innerHTML = `\$${total}`;
    document.getElementById("can").innerHTML = `${nCantidad}`;
    color.style.backgroundColor = colorSelect;
    color2.style.borderColor = colorSelect;
});