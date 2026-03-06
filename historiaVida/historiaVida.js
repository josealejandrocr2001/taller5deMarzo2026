/**
 * PROGRAMA: CRÓNICA DE UN CAMBIO (DE LA CIUDAD A LA MONTAÑA)
 * Estudiante: Jose
 * Objetivo: Uso de funciones, ciclos y condiciones.
 */

//Capitulos historia

function pandemia() {
    console.log("Parte 1: Cuando surgió la pandemia vivía en el municipio de Caldas en la zona urbana.");
}

function caldas() {
    console.log("Parte 2: Yo vivía con mis padres pero la casa era muy oscura y siempre tocaba estar encerrados.");
}

function viajeSanFelix() {
    console.log("Parte 3: Decidimos ir a pasar la pandemia en la finca de la abuela en el corregimiento de San Felix.");
}

function decision() {
    console.log("Parte 4: Aunque había mucho caos, mi familia se dio cuenta de que vivir en el campo era un privilegio.");
}

function finalHistoria() {
    console.log("Parte 5: Ahora estamos viviendo en San Felix felices y tranquilos.");
}

// Función principal
function iniciarHistoria() {
    console.log("\n--- REPRODUCIENDO HISTORIA DE JOSE ---");
    pandemia();
    caldas();
    viajeSanFelix();
    decision();
    finalHistoria();
    console.log("---------------------------------------\n");
}

const menuOpc = () => {
    let mensaje = "--- MENÚ PRINCIPAL ---\n1. Ver historia\n2. Salir\n\nElija una opción:";
    return Number(prompt(mensaje));
}

let opc = menuOpc();

while (opc !== 2) {
    
    if (opc === 1) {
        iniciarHistoria();
    } else {
        alert("Opción no válida. Intenta de nuevo.");
    }
    opc = menuOpc();
}

alert("¡Gracias por leer mi historia! Suerte es que le digo.");
