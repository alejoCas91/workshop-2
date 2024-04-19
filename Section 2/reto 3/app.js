const clima = prompt("Ingresa el pronóstico del clima (soleado, lluvioso)");
const espacioDisponible = parseInt(prompt("Ingresa el espacio disponible en tu maleta en kg"));
const pesoTotalPermitido = parseInt(prompt("Ingresa el límite de peso de tu equipaje en kg"));

const artículos = [
    {nombre: "paraguas", peso: 1, clima: ["lluvioso"]},
    {nombre: "cámara", peso: 0.5, clima: ["soleado"]},
    {nombre: "libro", peso: 0.3, clima: ["todo"]},
    {nombre: "tableta", peso: 0.7, clima: ["todo"]},
    {nombre: "auriculares", peso: 0.1, clima: ["todo"]}
];

function decidirArticulos(clima, espacioDisponible, pesoTotalPermitido, artículos) {
    let articulosAgregados = [];

    for (let i = 0; i < artículos.length; i++) {
        if (artículos[i].clima.includes(clima) && espacioDisponible >= artículos[i].peso && pesoTotalPermitido >= artículos[i].peso) {
            articulosAgregados.push(artículos[i].nombre);
            espacioDisponible -= artículos[i].peso;
            pesoTotalPermitido -= artículos[i].peso;
        }
    }

    return articulosAgregados;
}
let artículosAgregados = decidirArticulos(clima, espacioDisponible, pesoTotalPermitido, artículos);

if (artículosAgregados.length > 0) {
    alert("Es aconsejable llevar los siguientes artículos: " + artículosAgregados.join(", "));
} else {
    alert("No se recomienda llevar artículos adicionales.");
}