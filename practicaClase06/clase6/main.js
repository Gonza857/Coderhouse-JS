// //==============0========1======2==3====4===----------------5------------------======6====
// let lista = ["texto1","texto2", 4, 7, false,{nombre: "Maria", apellido: "Perez"},["a","b"]];
// //*********************************************************************************0***1 */

// // console.log(lista);
// // console.log(lista[1]);
// // console.log(lista[5].nombre);
// // console.log(lista[6][0]);
// // console.log(lista.length);

// // for(let i = 0; i < lista.length; i++) {
// //     console.log(lista[i]);
// // }

// let listaSuper = ["manzana","agua", "huevos", "leche", "jabon", "aceite"];
// console.log(listaSuper);

// // metodos para agregar elementos al array
// //1 - PUSH - agrega al final del array
// listaSuper.push("pan");
// console.log(listaSuper);

// //2 - UNSHIFT - agrega al principio del array
// listaSuper.unshift("galletas");
// console.log(listaSuper);

// // metodos para quitar elementos del array
// // 1- SHIFT - me va a quitar el primer elemento
// listaSuper.shift();
// console.log(listaSuper);

// // 2 - POP - quitar el ultimo elemento
// listaSuper.pop();
// console.log(listaSuper);

// //3 - SPLICE
// listaSuper.splice(1,2);
// console.log(listaSuper);

// //JOIN
// console.log(listaSuper.join(" - "));

// let listaFerreteria = ["martillo", "destornillador", "clavos"];

// //CONCAT
// let listaEntera = listaSuper.concat(listaFerreteria);
// console.log(listaEntera);

// //SLICE
// let listasuper2 = listaSuper;
// let ultimoElemento = listaEntera.length - 1; 
// let listaCorta = listaEntera.slice(2,ultimoElemento);
// console.log(listaCorta);


// //metodos para ver si un elemento existe o no
// //INDEXOF - nos dice en que posicion esta mi elemento
// console.log(listaEntera.indexOf("leche"));
// console.log(listaEntera.indexOf("fresa"));

// if (listaEntera.indexOf("fresa") == -1) {
//     listaEntera.push("fresa");
// }
// console.log(listaEntera);

// console.log(listaEntera.indexOf("fresa"));


// listaEntera.splice(listaEntera.indexOf("aceite"),1);
// console.log(listaEntera);

// function borrar(){
//     let elementoBorrar = prompt("que elemento queres boorar?");
//     if (listaEntera.indexOf(elementoBorrar) != -1) {
//         listaEntera.splice(listaEntera.indexOf(elementoBorrar),1);
//     }
//     console.log(listaEntera);
// }

// //INCLUDES
// console.log(listaEntera.includes("agua"));
// console.log(listaEntera.includes("martillo"));

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio
    }
}
let listaProductos = [
    {nombre: "televisor", precio: 1000},
    {nombre: "ventilador", precio: 200},
    {nombre: "computadora", precio: 2000}
]

const agregaProd = () => {
    let nombre = prompt("cual es el nombre");
    let precio = parseFloat(prompt("Cual es el precio"));

    let productoNuevo = new Producto(nombre, precio);
    listaProductos.push(productoNuevo);
    console.log(listaProductos);
}

// agregaProd()

for (let producto of listaProductos) {
    console.log(`este producto es ${producto.nombre} y su precio es ${producto.precio}`)
}