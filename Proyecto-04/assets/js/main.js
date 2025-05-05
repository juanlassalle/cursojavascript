let sueldo = 1500;

let resultado = document.querySelector(".resultado");

switch (sueldo) {
    case 500:
        resultado.innerHTML = "El sueldo es malo";
        break;
    case 1000:
        resultado.innerHTML = "El sueldo es bueno";
        break;
    case 1500:
        resultado.innerHTML = "El sueldo es muy bueno";
        break;
    case 1700:
        resultado.innerHTML = "El sueldo es excelente";
        break;
    default:
        resultado.innerHTML = "Sos un estudiante";
        break;
}