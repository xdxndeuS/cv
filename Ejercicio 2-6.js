let formulario = document.querySelector("#formulario");
let ladoInput = document.querySelector("#lado");
let tabla = document.querySelector("#tabla");
let msgerror = document.querySelector("#error");
let cuadrados = [];

let calcularPerimetro = (lado) => {
    return 4 * lado;
}

let calcularArea = (lado) => {
    return lado * lado;
}

let imprimir = (cuadrados) => {
    let msg = "<table class='table table-bordered'><thead><th>No</th><th>Lado</th><th>Perímetro</th><th>Área</th></thead>";
    msg += "<tbody>";
    let i = 0;
    while (i < cuadrados.length) {
        let lado = parseFloat(cuadrados[i]);
        msg += "<tr>";
        msg += `<td>${i + 1}</td>`;
        msg += `<td>${lado}</td>`;
        msg += `<td>${calcularPerimetro(lado)}</td>`;
        msg += `<td>${calcularArea(lado)}</td>`;
        msg += "</tr>";
        i++;
    }
    msg += "</tbody></table>";
    tabla.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let centinela = false;
    let error = "";
    if (ladoInput.value.trim().length === 0) {
        error = "Ingrese la longitud del lado del cuadrado";
        centinela = true;
    }

    if (centinela) {
        msgerror.innerHTML = error;
    } else {
        cuadrados.push(ladoInput.value.trim());
        imprimir(cuadrados);
        limpiar();
    }

    event.preventDefault();
});

let limpiar = () => {
    ladoInput.value = "";
    ladoInput.focus();
}
