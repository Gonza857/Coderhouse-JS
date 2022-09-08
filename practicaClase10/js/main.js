/* STORAGE (API DE ALMACENAMIENTO WEB)
    ALMACENA DATOS DE MANERA LOCAL EN EL NAVEGADOR 
    NO REALIZA NINGUNA CONEXION CON EL SERVIDOR
    PRESERVAR INFORMACION

    COOKIES 15KB // TIENE FECHA DE EXPIRACION, POR EJEMPLO MAÑANA A LAS 20:45 // SE COMPARTEN ENTRE APLICACIONES
    LOCALSTORAGE 5MB // SIEMPRE VA A EXISTIR A MENOS QU EL USUARIO LA BORRE O SE PROGRAME // SOLO PARA UNA PAGINA Y ESA INFO ES SOLO DE AHI
    SESIONSTORAGE 5MB // SOLO DENTRO DE LA PESTAÑA, SI RECARGAMOS SE BORRA. LOCALASTORAGE SE MANTIENE

    

*/

localStorage.setItem("llave","valor");; // Configura un nuevo elemento dentro del storage, pero al recargar se mantiene, y se borra si borramos el cache, o lo borra el usuario
sessionStorage.setItem("otraLlave","otroValor"); // configura un nuevo elemento dentro del storage, pero al recargar se borra o solo dentro de la pestaña

// COMO LO CONSUMIMOS
const item = localStorage.getItem("llave"); // "valor"
console.log(item)
document.write(item)

// ELIMINAR 2 FORMAS
// BORRA EL ITEM ASIGNADO
localStorage.removeItem("llave");
// BORRA TODO
localStorage.clear();

// ---------- JSON ----------

/* FORMATO BASADO EN TEXTO PLANO
JAVASCRIPT OBJECT NOTATION

ENVIAR Y ALMACENAR DATOS EN APLICACIONES WEB

SE USA EN BACKEND
ES ESTRICTO, LA ULTIMA COMA EN OBJETOS NO VA
TEXTO, NUMERO O BOOLEAN
SOLO COMILLA DOBLE

OBJETOS 
{
    "usuario": "gonzalo",
    "apellido": "ramos",
    "curso": "7° 7°"
}

ARRAY CON OBJETOS
[ 
    {
    "usuario": "gonzalo",
    "apellido": "ramos",
    "curso": "7° 7°"
    }
]

PARA GUARDAR OBJETOS EN EL STORAGE, DEBEMOS PASARLO A JSON

2 METODOS

1) JS A JSON
JSON.stringify(objeto);

2) JSON A JS
JSON.parse(objeto);


*/