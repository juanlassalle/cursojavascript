let tabla = document.querySelector(".tables")
let resultado = 0;

//Bucle para crear las tablas de multiplicar
for (let i = 1; i <= 10; i++) {
    
    // Plantilla para mostrar y crear las tablas
    tabla.innerHTML += `
        <div class= "tables__item">
            <h2 class="tables__title">
                Tabla del ${i}
            </h2>
            <! dos opciones de listas-->
            <ul class="tables__list" data-id=${i}>
            </ul>
            <ul class="tables__list tables__list--${i}">
            </ul>
        </div>
    `
    for (let j = 0; j <=10; j++) {
        
        resultado = i * j;

        let lista = document.querySelector(`.tables__list--` + i);
        lista.innerHTML += `
                    <li class="list__item">
                        ${i + " x " + j + " = " + resultado}
                    </li>
                `
        /*let listas = document.querySelectorAll(".tables__list");

        //Imprimir todas las operaciones
        listas.forEach(lista => {
            let id = lista.getAttribute("data-id")
            //let id = i;
            if (id == i) {
                lista.innerHTML += `
                    <li class="list__item">
                        ${i + " x " + j + " = " + resultado}
                    </li>
                `
            }
        })*/
    }
}