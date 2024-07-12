let formulario = document.querySelector("#formulario");
let numeroInput = document.querySelector("#numero");
let tabla = document.querySelector("#tabla");
let msgerror = document.querySelector("#error");
let numeros = [];

let esPrimo = (num) => {
    if (num <= 1) {
        return false;
    }
    let divisor = 2;
    while (divisor < num) {
        if (num % divisor === 0) {
            return false;
        }
        divisor++;
    }
    return true;
}

let imprimir = (numeros) => {
    let msg = "<table class='table table-bordered'><thead><th>No</th><th>Número</th><th>Es Primo</th></thead>";
    msg += "<tbody>";
    let i = 0;
    while (i < numeros.length) {
        msg += "<tr>";
        msg += `<td>${i + 1}</td>`;
        msg += `<td>${numeros[i]}</td>`;
        msg += `<td>${esPrimo(parseInt(numeros[i])) ? 'Sí' : 'No'}</td>`;
        msg += "</tr>";
        i++;
    }
    msg += "</tbody></table>";
    tabla.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let centinela = false;
    let error = "";
    if (numeroInput.value.trim().length === 0 || isNaN(numeroInput.value)) {
        error = "Ingrese un número válido";
        centinela = true;
    }

    if (centinela) {
        msgerror.innerHTML = error;
    } else {
        numeros.push(numeroInput.value);
        imprimir(numeros);
        limpiar();
    }

    event.preventDefault();
});

let limpiar = () => {
    numeroInput.value = "";
    numeroInput.focus();
    msgerror.innerHTML = "";
}
