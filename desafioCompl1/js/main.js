/* Para este desafio complementario, 
opté por mostrar la tabla de un nuúmero hasta determinado número 
Ambos números nos los da el usuario
*/

let numero = parseInt(prompt("¿De qué numero queres saber la tabla?"));
let numeroMax = parseInt(prompt("¿Hasta que número queres la tabla?"));

for (let i = 0; i <= 99999999999; i++) {
    let resultado = numero * i;
    if (resultado > numeroMax) {
        break;
    }
    document.write(`El resultado de ${numero}x${i}=${resultado}<br>`)
    
}


