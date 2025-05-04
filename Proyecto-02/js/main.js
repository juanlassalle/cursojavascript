let marca = "Toyota";
let velocidad = 110;
let stock = true;
let modelos = ["corolla", "hilux", "prius"];

let frase = `<p>Tenemos coches de la marca ${marca}, 
            van una velocidad máxima de ${velocidad}km/h</p>
            <p>Dispones de estos modelos: </p>
            `
modelos.forEach(modelo =>{
    frase += `<p>${modelo}</p>`
})
let contenedor = document.querySelector(".contenedor")

contenedor.innerHTML = frase;