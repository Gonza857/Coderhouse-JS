// FUNCION
// function nombre (parametros) {
//     codigo;
//     return; //devuelve un resultado, si no lo ponemos, no podemos usar el resultado afuera.
// }

// SCOPE
// si se declara afuera, es global, podemos cambiar el nombre adentro.
// si la declaramos dentro de una funcion, solo existe adentro. Si la llamamos afuera, nos va a decir que es "undefined".
// si declaramos una variable afuera, y otra adentro, van a ser distintas.
// si queremos que retorne el resultado de la funcion para mostrarla afuera, usamos return.
// VAR, no tiene scope. Es siempre global

// SWITCH
// switch (variable a analizar) {
//     case "si es x":
//         codigo;
//         break;
//     case "si es x":
//         codigo;
//         break;
//     default:
//         lo que hace no se cumple los case;
// }

// FUNCION ANONIMA
// Funcion sin nombre
// Se usa para ser pasada como parametro o asiganada a una variable
// const nombre = (parametro) {codigo}

// FUNCION ANONIMA
// const nombre = (parametro) => { codigo }

let usuario = [{nombre: "a", apellido:"b"}];

let inputNombre = document.querySelector("#inputNombre");
let inputApellido = document.querySelector("#inputApellido");

let btn = document.getElementById("revisar");

btn.onclick = (e) => {
    e.preventDefault();

    let inputNombreV = inputNombre.value.toUpperCase();
    let inputApellidoV = inputApellido.value;

    console.log(inputNombreV);
    console.log(inputApellidoV);
    console.log(inputNombre.value.toUpperCase())

    let encontrado = usuario.find(usuario => usuario.nombre == inputNombreV && usuario.apellido == inputApellidoV);

    console.log(encontrado);


}


