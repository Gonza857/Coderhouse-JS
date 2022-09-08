// MANERAS DE ACCEDER AL DOM

//  LO TRAEN EN OBJETOS!

// POR ID
// ELEMENTOS POR ID
// document.getElementById("ID del elemento");
// Trae un unico elemento.
let porId = document.getElementById("formularioTitulo");
console.log(porId);

// ELEMENTOS POR CLASES
// document.getElementsByClass("Clase del elemento");
// Puede traer +1 elemento porque la clase es para varios elementos.
// TRAE ARRAY, por mas que este vacio, con 1 o con +.
let porClase = document.getElementsByClassName("formularioP");
console.log(porClase);

// POR ETIQUETA
// document.getElementsByTagName("etiqueta <h2>");
// DEVUELVE ARRAY. no se puede agregar html a un array.
let porEtiqueta = document.getElementsByTagName("p");
console.log(porEtiqueta)

// POR SELECTOR - COMO EN CSS - TRAE 1 SOLO Y EL PRIMERO Y ES OBJETO
// Solo nos da el primero que encuentra
// document.querySelector(".className");
// document.querySelector("#id");
// document.querySelector("p");
// document.querySelector("div form p");
// document.querySelector("tag tag .className");
// va directo al elemento
let porSelectorUno = document.querySelector("form p");
console.log(porSelectorUno)

//     SELECTOR ALL - SELECCIONA TODOS LOS QUE ENCUENTRE
//     document.querySelectorAll("#id, .className, tag, tag tag tag")
let porSelectorTodos = document.querySelectorAll(".formularioP");
console.log(porSelectorTodos)


// ACCEDER AL VALOR DE LA ETIQUETA / CAMBIA EL VALOR DE LA ETIQUETA
// .innerText 
// TRAE EL VALOR DE LA ETIQUETA (NO TRAE LAS ETIQUETAS DENTRO DE LA ETIQUETA)
console.log(porId.innerText);
// CAMBIAR VALOR
// variable.innerText = "texto";
porId.innerText = "Cambie el titulo";
console.log(porId.innerText);

// ACCEDE A LO QUE HAY ADENTRO DE LA ETIQUETA / PODEMOS AGREGAR OTRA ETIQUETA
// .innerHTML
// TRAE EL VALOR DE LA ETIQUETA Y LAS ETIQUETAS DE ADENTRO Y PODEMOS CAMBIAR EL HTML
let cambio = document.getElementById("cambio"); // cambio el valor de porId para explicar esto
cambio.innerHTML
console.log(cambio.innerHTML)
// MUESTRA EL TEXTO DE LA ETIQUETA Y MUESTRA LA ETIQUETA QUE TIENE ADENTRO
// AHORA CAMBIAMOS SU VALOR
cambio.innerHTML = "esto es un titulo <a href=''>nuevo</a>";

// ACCEDE AL ESTILO

// .style.propiedad = "valor";
// .style.color = "red";
cambio.style.color = "red";
// cambio.style.display = "none";

// ACCEDE A LA CLASE Y LO MODIFICA

// className agregar 1 solo
// claseList listar todas las clases que tiene adentro
// elemento.className = "container row";
// agrega las clases escritas al elemento puesto
cambio.className = "container row";

// PONE ATRIBUTOS
// setAttribute("atributo a agregar, clase","valor, row"); CAMBIA CUALQUIER ATRIBUTO
// elemento.setAttribute("class","container");
cambio.setAttribute("class", "titulo2"); // SOBREESCRIIBE LOS ANTERIORES Y DEJA ESTOS

// VER ATRIBUTO
// get.Attribute cual es cierto atributo
// elemento.getAttribute("id"); 
console.log(cambio.getAttribute("class"));

// ----------
// EJEMPLO
// RECORREMOS UNA LISTA E IMPRIMIMOS CADA ELEMENTO
// ADEMAS CAMBIAMOS EL COLOR DE CADA ELEMENTO
let lista = document.querySelectorAll("li");
console.log(lista)
lista.forEach((el) => {
    console.log(el.innerText)
})
lista.forEach((el) => el.style.color = "red")
// ----------

// AGREGAR O QUITAR NODOS

// AGREGAR ELEMENTO
// let variable = document.createElement("etiqueta"); // CREA EL ELEMENTO/ETIQUETA
// variable.setAttributte("id", "elementoNuevo"); // AGREGA ATRIBUTO Y VALOR
// variable.innerText = "Este es un elemento nuevo"; //AGREGA EL CONTENIDO A LA ETIQUETA
// creamos un contenedor y con
// .appendChild("el que creamos");
// elemento.appendChild(elementoAgregar); // AGREGAMOS UN HIJO A ESE ELEMENTO, OSEA UNA ETIQUETA DENTRO DE OTRA EN EL DOM
// le agrega el hijo que creamos a un contenedor
let elementoNuevo = document.createElement("h2");
elementoNuevo.setAttribute("id", "newH2");
elementoNuevo.innerText = "Este es un H2 puesto con JS";

let contenedor = document.getElementById("contenedor");

contenedor.appendChild(elementoNuevo)
console.log(elementoNuevo)

// ELIMINAR ELEMENTO
// .removeChild(elemento)
// ELIMINA EL HIJO AGREGADO AL DOM RECIENTE
contenedor.removeChild(elementoNuevo)

// ----------
// EJEMPLO
let materias = ["frances", "ingles", "geografia", "matematicas", "lengua"]
let ulPadre = document.getElementsByTagName("ul");
console.log(ulPadre);
let ulPadre2 = document.querySelector("ul");
console.log(ulPadre2);
materias.forEach((el) => {
    let elLista = document.createElement("li");
    elLista.innerHTML = el;
    ulPadre[0].appendChild(elLista);
})
// se puede usar append o appendChild
// ----------

// LEER CONTENIDO DEL INPUT

// document.getElementById("nombre").value;
let input = document.getElementById("input");
console.log(input) // no me da el cotenido, la etiqueta nos da. No nos da el valor que escribimos
input = document.getElementById("input").value;
console.log(input)
// devuelve el valor del input de ese id

// querySelector da 1 solo elemento, 1 objeto
// getElementsByClassName da un array

// ////////////////////////////////////
// NO SE PUEDE AGREGAR HTML A UN ARRAY. UN ARRAY NO ES UN NODO HTML
// ////////////////////////////////////

// CONSTRUCTOR DE PRODUCTO
class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }

}

// PEDIR VALORES Y CREAR PRODUCTO. DESPUES PUSHEA AL ARRAY 
let listaProductos = [];
const guardarDatos = () => {
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let precio = document.getElementById("precio").value;
    let nuevoProd = new Producto(nombre, categoria, precio);
    listaProductos.push(nuevoProd);
    return nuevoProd;
}

// AGREGA EL HTML DE LOS PRODUCTOS AGREGADOS
function agregarHTML() {
    listaProductos.forEach((prod) => {
        let nodo = document.createElement("div");
        nodo.innerHTML = `<h3>${prod.nombre}<h3>
                            <p>${prod.categoria}<p>
                            <span>${prod.precio}<span>`
        contenedor.appendChild(nodo)
    })
}