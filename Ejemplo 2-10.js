let formulario = document.querySelector("#formulario");
let horasInput = document.querySelector("#horas");
let tabla = document.querySelector("#tabla");
let msgerror = document.querySelector("#error");
let registros = [];

let calcularSalario = (horas) => {
    const tarifaNormal = 800; 
    const horasNormales = 35; 
    const recargoHorasExtras = 1.5; 
    const exentoImpuestos = 60000; 
    const impuesto25 = 0.25; 
    const impuesto45 = 0.45; 
    
    let salarioBruto = 0;
    let salarioNeto = 0;
    let impuestos = 0;
    
    if (horas <= horasNormales) {
        salarioBruto = horas * tarifaNormal;
    } else {
        salarioBruto = horasNormales * tarifaNormal + (horas - horasNormales) * tarifaNormal * recargoHorasExtras;
    }
    
    if (salarioBruto <= exentoImpuestos) {
        salarioNeto = salarioBruto;
        impuestos = 0;
    } else if (salarioBruto <= exentoImpuestos + 40000) {
        salarioNeto = salarioBruto - (salarioBruto - exentoImpuestos) * impuesto25;
        impuestos = (salarioBruto - exentoImpuestos) * impuesto25;
    } else {
        salarioNeto = salarioBruto - (exentoImpuestos * impuesto25 + (salarioBruto - exentoImpuestos - 40000) * impuesto45);
        impuestos = exentoImpuestos * impuesto25 + (salarioBruto - exentoImpuestos - 40000) * impuesto45;
    }
    
    return { salarioBruto, impuestos, salarioNeto };
}

let imprimir = (registros) => {
    let msg = "<table class='table table-bordered'><thead><th>No</th><th>Horas</th><th>Salario Bruto</th><th>Impuestos</th><th>Salario Neto</th></thead>";
    msg += "<tbody>";
    let i = 0;
    while (i < registros.length) {
        let resultado = calcularSalario(registros[i]);
        msg += "<tr>";
        msg += `<td>${i + 1}</td>`;
        msg += `<td>${registros[i]}</td>`;
        msg += `<td>${resultado.salarioBruto}</td>`;
        msg += `<td>${resultado.impuestos}</td>`;
        msg += `<td>${resultado.salarioNeto}</td>`;
        msg += "</tr>";
        i++;
    }
    msg += "</tbody></table>";
    tabla.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let centinela = false;
    let error = "";
    if (horasInput.value.trim().length === 0 || isNaN(horasInput.value)) {
        error = "Ingrese un número válido de horas trabajadas";
        centinela = true;
    }

    if (centinela) {
        msgerror.innerHTML = error;
    } else {
        registros.push(parseInt(horasInput.value));
        imprimir(registros);
        limpiar();
    }

    event.preventDefault();
});

let limpiar = () => {
    horasInput.value = "";
    horasInput.focus();
    msgerror.innerHTML = "";
}
