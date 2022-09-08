/*
function nombreUtil() {
    sentencias
}


nombreUtil()
*/

// function miNombre() {
//     let nombre = prompt("Cual es tu nombre?");
//     alert(`Tu nombre es ${nombre}`);
// }

// miNombre();


// function nota() {
//     let notaNueva = parseInt(prompt("cual fue tu nota?"));
//     if (notaNueva > 4) {
//         alert("Aprobado");
//     } else {
//         alert("Desaprobado");
//     }
// }
// // cuando el usuario hace click en boton => 
// nota();


function sumar(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}
function resta(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}

// sumar(1, 3); //4

// sumar(5, 8); //13

// sumar(20, 4);

// let numeroUno = parseInt(prompt("decime un numero"));

// sumar(numeroUno, 6);//10


// let numeroUno = parseInt(prompt("Dame el primer numero"));
// let numeroDos = parseInt(prompt("Dame el segundo numero"));
// let operacion = prompt("Que calculo queres hacer?");

// switch(operacion){
//     case "+":
//         sumar(numeroUno, numeroDos);
//         break;
//     case "-":
//         resta(numeroUno,numeroDos);
//         break;
//     default:
//         console.log("no conozco esa operacion");
//         break;
// }
// function valorProducto(precio, descuento) {
//     let descuento = precio * descuento /100;
//     let valorFinal = precio - valorDescuento;
//     return valorFinal

//     //return precio - (precio * descuento /100) 
// }
// console.log(valorDescuento);
// function productoNuevo() {
//     let precioLista = parseInt(prompt("cual es el precio de lista?"));
//     let descuento = parseInt(prompt("cual es el descuento?"));
//     return valorProducto(precioLista, descuento);
// }

// console.log(productoNuevo());

/*
escriban un afuncion que acepte un numero
y me diga si es un numero primo o no
un numero primo solo se divide por si mismo y por 1
1 no es primo
*/

// 6 - 6/2= 3 6/3 = 2, 6/4=1.5, 6/5, 6/6

const primos = (num) => {
    let resultado;
    let contador = 0;
    for(let i=1; i<= num; i++) {
        if(num%i == 0) {
            contador++;
        }
    }
    if(contador == 2) {
        //se que se dividio por uno y por si mismo
        resultado = "es primo";
    } else {
        resultado = "no es primo";
    }
    return resultado
}

let dato = parseInt(prompt("Dame un numero"));
console.log(primos(dato));