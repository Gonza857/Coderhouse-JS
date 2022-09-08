let lado1 = parseInt(prompt("¿Cuanto mide el primer lado?"));
let lado2 = parseInt(prompt("¿Cuanto mide el segundo lado?"));
let lado3 = parseInt(prompt("¿Cuanto mide el tercer lado?"));
// let prueba = parseInt(prompt("dame un numero"))

// if (prueba > 0) {
//     console.log("es numero")
// } else {
//     console.log("es diferente")
// }

if ((lado1 > 0) && (lado2 > 0) && (lado3 > 0))  {
    if ((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3)) {
        console.log("Es un equilatero")
    } else if ((lado1 !== lado2) && (lado2 !== lado3) && (lado1 !== lado3)) {
        console.log("Es un escaleno")
    } else if ((lado1 == lado2) || (lado2 == lado3) || (lado3 == lado1)) {
        console.log("Es un isoceles")
    } else {
        
    }
} else {
    console.log("Introduciste un texto o una medida incorrecta")
    
}

