let tabla = document.querySelector(".tables")
let resultado = 0;

//Bucle para crear las tablas de multiplicar
for (let i = 1; i <= 10; i++) {
    //

    tabla.innerHTML += `
        <div class= "tables__item">
            <h2 class="tables__title">
                ${i}
            </h2>
            <ul class="tables__list" data-id=${i}>
            </ul>
        </div>
    `
}