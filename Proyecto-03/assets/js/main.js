let velocidad = 135;
let velocidadLimite = 60;

let resultado = document.querySelector(".resultado");

if (velocidad > velocidadLimite) {
    resultado.textContent = "Baje la velocidad"
}else{
    resultado.textContent = "Velocidad dentro de los limites permitidos";
}