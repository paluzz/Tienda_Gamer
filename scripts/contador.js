
function agregar() {
    const disponible = document.getElementById("disponibles");
    const cont = document.getElementById("contador");
    // convertir a numero 
    const valor = parseInt(cont.innerText)
    const cantDisp = parseInt(disponible.innerText)
    // modificar valor
    if (valor < cantDisp) {
        cont.innerHTML = valor + 1;
    }
}

function quitar() {
    let cont = document.getElementById("contador");
    // convertir a numero 
    const valor = parseInt(cont.innerText)
    // modificar valor
    if (valor > 1) {
        cont.innerHTML = valor - 1;
    }
}

function btn() {
    const subir = document.getElementById("agregar");
    const bajar = document.getElementById("quitar");
    subir.addEventListener("click", agregar, false);
    bajar.addEventListener("click", quitar, false);
}


document.addEventListener("DOMContentLoaded", btn, false)