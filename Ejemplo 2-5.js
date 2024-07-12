let formulario = document.querySelector("#formulario");
let numeroInput = document.querySelector("#numero");
let tabla = document.querySelector("#tabla");
let msgerror = document.querySelector("#error");
let numeros = [];

let sumaNumerosPares = (limite) => {
    let suma = 0;
    let numero = 2;
    let resultados = [];

    while (numero <= limite) {
        suma += numero;
        resultados.push(suma);
        numero += 2; 
    }

    return resultados;
}

let imprimir = (resultados) => {
    let msg = "<table class='table table-bordered'><thead><th>No</th><th>Número</th><th>Suma Parcial</th></thead>";
    msg += "<tbody>";
    for (let i = 0; i < resultados.length; i++) {
        msg += "<tr>";
        msg += `<td>${i + 1}</td>`;
        msg += `<td>${2 + i * 2}</td>`;
        msg += `<td>${resultados[i]}</td>`;
        msg += "</tr>";
    }
    msg += "</tbody></table>";
    tabla.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let centinela = false;
    let error = "";
    let numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero < 2 || numero > 1000) {
        error = "Ingrese un número válido entre 2 y 1000";
        centinela = true;
    }

    if (centinela) {
        msgerror.innerHTML = error;
    } else {
        let resultados = sumaNumerosPares(numero);
        imprimir(resultados);
        limpiar();
    }

    event.preventDefault();
});

let limpiar = () => {
    numeroInput.value = "";
    numeroInput.focus();
    msgerror.innerHTML = "";
}
