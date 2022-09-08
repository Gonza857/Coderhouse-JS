/*  ////////// AJAX Y FETCH //////////

///// AJAX /////
    Surgio como una solucion a jQuery.
    AJAX = Javascript Asincrono y XML.
        Conjunto de tecnicas de desarrollo que permite que las apps web funcionen de forma asincronica para procesar tareas en segundo plano.
        Por ejemplo mientras el usuario trabaja, va trayendo los datos 

    PETICIONES HTTPS
        Hypertext Transfer Protocol
        Piden y proveen datos de internet
        Cuando emitimos una orden al navegador, hace una peticion request o http a algun servidor, luego la recibe, procesa y devuelve una respuesta.

    Las peticiones tienen varias parte
        URL o direccion
        metodos como get, post, put, delete
        headers
        body
        parametros
        query params o url params

    URL: pedimos info a traves de la url,

    Metodo: indica al sevidor que hacer con esos datos. Son 4 verbos los mas usados
        GET: recibir info del servidor, de los mas utilizados
        POST: envia informacion al servidor
        PUT: crear o modificar algun recurso en el servidor (No se usa mucho desde el front)
        DELETE: elimina recurso del servidor
        
        Generalmente usamos POST y GET

        POST y PUT van con un body (cuerpo de la request) donde se definen los datos o la info a enviar al servidor
        GET o DELETE no tienen body porque no necesitan enviar datos.

    BODY tiene los datos en formato JSON generalmente
        header
            Host: localhost:3000
            Connection: keep-alive
            content-type: application/json
        body
            {"name"="John, "age": 35};

    HEADER
        Mandar info relacionada con la peticion. Incluyen info sobre la peticion para establecer una transferencia segura y clara, y de ser necesario modificar para agregar datos adicionales
    
    NO confundir informacion sobre la peticion (headers) con los datos que la peticion transfiere (body)

    PARAMETROS
        para espeficiar que envio y que recibo
        Query Params
            se ven en la url, despues del "?"
            el "?" marca el final de la url y comienzo de los query params
            son clave-valor
            https://www.google.com.ar/search?q=coderhouse

            Los parametros se separan ocn ampersand (&)

        URL params
            se ponen tambien en la url, pero despues d ela "/"
            pokeapi.co/api/v2/pokemon/4

    ---------- ESTADO DE PETICION ----------
        pestana NETWORK en el inspector
        muestra que recursos cargan
        STATUS
            hay varios
            inmporta con el que empieza

            2: exitosamente
            generalmente 200

            4: error con la peticion
            generalmente 400
            404 no encuentra recurso

            5: error con el servidor, ejemplo timeout, el servidor no responden durante un tiempo.

///// API /////
    Interfaz
    Application Programming Interfaces
    Es una app web, donde podemos solicitar y enviar info desde el cliente.
    Arquitectura API REST
    Orientado a recursos y define metodos claros para pedir y enviar

    ENDPOINTS
        secciones a las que podemos acceder

    DOCUMENTACION
        cada API tiene su documentacion para entender como usarla y traer la data

///// FETCH /////
    fetch();
        hacer peticiones HTTP a algun servisio externo.
        FETCH en ingles es TRAER
        Peticiones asincronicas, convenientemente usa promesas
        
        Recibe 2 parametros
        fetch(url, configuracion);
        configuracion OPCIONAL

        Para archivo TXT usamos text()

        EJEMPLO
        */
        const obtenerDatos = () => {
            fetch("./datos.txt")
                .then(response => response.text())
                .then(result => console.log(result))
        }
        /*
        EJEMPLO 2
        Para archivo JSON usamos json()
        json() ya parseo el JSON a JS
        RECIBIENDO
        */
        const obtenerDatos2 = () => {
            fetch("./datos.json")
                .then(response => response.json())
                .then(result => {
                    result.forEach(persona => {
                        document.write(persona.nombre + "<br>");
                        document.write(persona.edad + "<br>");
                        document.write(persona.ocupacion + "<br>");
                        document.write("<br>")
                    })
                })
                .catch(error => document.write(error))
                .finally(() => console.log("Termine"))
        }
        /*
        EJEMPLO 3
        ENVIANDO con POST
        */
        let usuario = {
            id: 120,
            title: "dato de prueba",
            body: "estoy probando"
        }

        const obtenerDatos3 = () => {
            fetch("https://jsonplaceholder.typicode.com/posts", {
            // configuracion
            method: "POST",
            headers: {"content-type": "application/json; charset=UTF-8"}, // tipo de dato
            body: JSON.stringify(usuario)
            })
            .then(response => response.json())
            .then(result => console.log(result))
        }
        /*
        RELATIVA
            archivo en nuestra carpeta
        EXTERNA
            url a la api

        EJEMPLO 4
        CON ASYNC & AWAIT
        le ponemos a la funcion el termino ASYNC, y le pedimos en cada paso que se resuelva la promesa.
        al fetch le agregamos AWAIT para que espere a que devuelva
        const fn = async () => {
            let varName = await fetch("url")
        }
        para el error se  usa el TRY y CATCH de todos los lenguajes de programacion
        */
        const obtenerDatos4 = async () => {
            // intenta esto
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/posts");
                let result = await response.json();
                result.forEach(persona => {
                    document.write(persona.nombre + "<br>");
                    document.write(persona.edad + "<br>");
                    document.write(persona.ocupacion + "<br>");
                    document.write("<br>")
                })
            }
            // si hay error hace esto (catch)
            catch (error) {
                    console.log(error)
            }
        }
        /*






///// ASINCRONIA /////
    ---------- CALL STACK (PILA) ----------
    ---------- CALL STACK (PILA) ----------
    ---------- CALL STACK (PILA) ----------


*/