let numero = parseInt(prompt("¿De qué numero queres saber la tabla?"));
let numeroMax = parseInt(prompt("¿Hasta que número queres la tabla?"));

for (let i = 0; i <= numeroMax; i++) {
    let resultado = numero * i;
    document.write(`El resultado de ${numero}x${i}=${resultado}<br>`)
}

// muestra la tabla del numero que queremos saber, hasta el numero máximo que queremos multiplicar, por ejemplo la tabla del 9 hasta multiplicarlo por el  numero 10
