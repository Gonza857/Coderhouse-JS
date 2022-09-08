/* --------------- CLASE 12 ---------------
    ///// OPERADORES AVANZADOS /////
        SUGAR SYNTAX
            Operadores que funcionan como simplificaciones de tareas complejas. Por ejemplo ++.
            
            ejemplo de formas
            let num = 10
            num = num + 1
            num += 1
            num++

            OPERADORES SOBRE CONDICIONALES

                ---------- OPERADOR TERNARIO ----------
                    Simplifica la estructura if...else.
                    Sirve para los cortitos.

                    ejemplo
                    let temp = 31
                    if (temp > 30) {
                        alert("dia caluroso")
                    } else {
                        alert("dia agradable")
                    }

                    SINTAXIS
                    condicion ? caso1 : caso2
                    caso1: instruccion cuando la condicion es verdadera
                    caso2: instruccion cuando la condicion es falsa.
                    ejemplo
                    temp > 30 ? alert("Dia caluroso") : alert("dia agradable")

                    ejemplo
                    let casado = true;
                    casado ? "si" : "no"
                    si casado es true, imprime "si"
                    sino imprime "no"
                    ejemplo para no mostrar el true, sino un si o un no.

                    ejemplo2
                    let edad = 19
                    edad > 18 ? "sos mayor" : "sos menor".

                    SE USA MÁS PARA CAMBIAR CLASES DE HTML5
                    SOLO 1 LINEA, SINO IF O SWITCH
                    RETURN IMPLICITO

                ---------- OPERADOR AND ----------
                    reduccion del condicional que se ejecuta si la condicion es verdadera. 

                    SINTAXIS
                    condicion && ejecuta si la condicio es true

                    ejemplo
                    carrito.lenght === 0 && console.log("Carrito vacio")

                    ejemplo
                    const usuario = {
                        nombre: "alex",
                        edad: 14
                    }
                    let registro = usuario.edad >= 18 && console.log("es mayor");
                    console.log(registro); // false
                    Al ser el usuario menor, devuelve false yno ejecuta el console.log.
                    Si tuviera 18, se cumple la condicion y ejecuta el console.log

                ---------- OPERADOR OR ----------
                    valor falsy, valor que me da:
                        null
                        undefined
                        NaN
                        false
                        0
                        ""
                    Me sirven si quiero evaluar si algo existe o no, o si alguna funcion o variable me da un valor.

                    Le da a una variable, 2 valores posibles. Uno en caso de que sea real y otro si es falsy.
                    
                    SINTAXIS
                    dato || imprime lo de aca si lo primero es falsy

                    ejemlo
                    console.log(0 || "falsy"); // falsy
                    console.log(40 || "falsy"); // 40
                    console.log(null || "falsy"); // falsy
                    console.log(undefined || "falsy"); // falsy
                    console.log("hola"" || "falsy"); // "hola"
                    console.log("" || "falsy"); // falsy
                    console.log(NaN || "falsy"); // falsy
                    console.log(true || "falsy"); // true
                    console.log(false || "falsy"); // falsy
                    entonces con esto vemos que dato va a pasar para poder ejecutar lo que le digamos, por ejemplo si es true, hace esto. si es nan, hace esto. 

                    ejemplo
                    const usuario1 = {
                        nombre: "Alex",
                        edad: 14
                    }

                    const usuario2 = null;

                    console.log(usuario1 || "el usuario no existe"); // al existir, devuelve la variable
                    console.log(usuario2 || "el usuario no existe"); // al ser null, imprime lo que esta despues del OR

                ---------- OPERADOR NULLISH COALESCING ----------
                    solo evalua null o undefined, el resto los toma como validos

                    SINTAXIS
                    valor ?? retorno

                    ejemlo
                    console.log(0 || "nullish"); // 0
                    console.log(40 || "nullish"); // 40
                    console.log(null || "nullish"); // nullish
                    console.log(undefined || "nullish); // nullish
                    console.log("hola"" || "nullish"); // "hola"
                    console.log("" || "nullish"); // ""
                    console.log(NaN || nullishy"); // Nan
                    console.log(true || "nullish"); // true
                    console.log(false || "nullish"); // false

                ---------- ACCESO CONDICIONAL A UN OBJETO ----------
                    usamos el "?" dentro del objeto.
                    por ejemplo si queremos mostrar el valor de una propiedad de un objeto, pero si no existe o no tiene devuelve un valor determinado

                    si el objeto existe me lo da
                    si el objeto no existe no me lo da

                    sirve para los errores

                    ejemplo:
                    let persona = {
                        nombre: "juan",
                        apellido: "perez",
                        edad: 12,
                        casado: true
                    }

                    console.log(persona.profesion); // devuelve que no puede acceder a las propiedades porque no tiene o no existe
                    console.log(persona?.profesion || "no teiene profesion"); // pregunta si tiene profesion, si no tiene, devuelve lo del OR, en este caso: "no tiene profesion";
                    
                    es como probar si existe o no, si existe me lo da, sino le digo que muestre otra cosa.


    ///// DESESTRUCTURACION /////
        Guardar propiedades de un objeto dentro de variables.

        SINTAXIS
        let { prop1, prop2 } = objeto
        las variables deberian tener el nombre de las propiedades.
    
        ejemplo
        let persona = {
            nombre: "juan",
            apellido: "perez",
            edad: 12,
            casado: true
        }
        let nombre = persona.nombre; // ejemplo viejo

        let {nombre, apellido, edad, casado} = persona;
        
        console.log(nombre); // "juan"
        console.log(apellido); // "apellido"
        console.log(edad); // 12
        console.log(casado); // true

        tambien podemos guardas propiedades de objeto en objeto

        ejemplo
        let persona = {
            nombre: "juan",
            apellido: "perez",
            edad: 12,
            casado: true
            direccion: {
                calle: "av rivadavia",
                altura: 1500,
                piso: 5,
                depto: "a"
            }
        }
        let {nombre, apellido, edad, casado, direccion: {calle, altura}} = persona;

        tambien podemos agregar propiedades
        let {nombre, apellido, edad, casado, direccion: {calle, altura}, genero = "desconocido"} = persona;
        console.log(genero); // "desconocido"

        se puede poner un valor por default si el objeto no lo tiene, pero en caso de que lo TENGA muestra el que tiene y NO el que le pusimos por default

        si queremos guardar una propiedad que NO existe, nos devuelve UNDEFINED

    ///// ALIAS /////
        algunos datos que llegan del backend, que no se entienden ni saben que significa.
        para trabajar mejor, podemos ponerle un alias, para usar ese en vez del nombre que nos llega de afuera.

        ejemplo
        const item = {
            item_id: 32,
            product_name: "some product",
            price_per_unit: 5600
        }
        const {
            item_id: id,
            product_name: nombre;
            price_per_unit: precio
        } = item
        console.log(id); // 432
        console.log(nombre); //"some product"
        console.log(precio); // 5600
    
    ///// DESESTRUCTURACION EN PARAMETROS /////
        Podemos desestructurar el objeto para trabajar con algunas de sus propiedades

        ejemplo
        let mascotas = [
            {nombre: "uno", edad: 1, castrado: true, tipo:"perro"}
            {nombre: "dos", edad: 2, castrado: false, tipo:"gato"}
            {nombre: "tres", edad: 3, castrado: true, tipo:"perro"}
            {nombre: "cuatro", edad: 4, castrado: false, tipo:"gato"}
            {nombre: "cinco", edad: 5, castrado: true, tipo:"perro"}
        ]
        mascotas.forEach(mascota => {
            let {nombre, edad, castrado, tipo} = mascota
        })

        otro ejemplo
        usamos las mascotas declaradas
        mascotas.forEach(mascota => {
            imprimirDatos(mascota) // entra ese objeto como parametro
        })
        function imprimirDatos(objeto) { // el parametro es un objeto
            let {nombre, edad, castrado, tipo} = objeto
            console.log(nombre);
            console.log(edad);
            console.log(castrado);
            console.log(tipo);
            // desestructura aca dentro
        }

        otro ejemplo mas comprimido
        usamos las mascotas declaradas
        mascotas.forEach(mascota => {
            imprimirDatos(mascota) // entra ese objeto como parametro
        })
        function imprimirDatos({nombre, edad, castrado, tipo}) { // como le damos un objeto, tambien podemos recortar y poner directamente las propiedades.
            console.log(nombre);
            console.log(edad);
            console.log(castrado);
            console.log(tipo);
            // desestructura aca dentro
        }

    ///// DESESTRUCTURACION EN ARRAYS /////
        es menos usado
        tiene que ser en orden, el primero que declaramos, es el primero del array y asi.
        
        ejemplo
        const nombres = ["juan", "Julieta", "carlos", "mariela"];
        const [a,b] = nombres
        console.log(a); // juan
        console.log(b); // julieta 

        ejemplo
        const [, , a,b] = nombres
        console.log(a); // carlos
        console.log(b); // mariela

    ///// OPERADOR SPREAD /////
        operador (...) nos permite desparramar el array u el objeto. cambiar la forma en la que lo presenteamos
        ---------- SPREAD DE ARRAYS ----------
            ejemplo comun
            const nombres = ["juan", "Julieta", "carlos", "mariela"];
            console.log(nombres); // ["juan", "Julieta", "carlos", "mariela"];
            
            ejemplo con spread
            const nombres = ["juan", "Julieta", "carlos", "mariela"];
            console.log(...nombres) // juan julieta carlos mariela

            equivale a:
            console.log("juan", "Julieta", "carlos", "mariela")

            NO ES IGUAL AL JOIN
            JOIN, da 1 texto, separando los elementos con lo que le hallamos puesto
            SPREAD, nos da 4 textos diferentes, con cada uno de los elementos. sirve si queremos usar cada elemento por sepearado

            math.max no reconoce un array.
            se lo podemos dar en spread, cada elemento por separado.

            SPREAD, es como que te saca el array y te los da por separado

            otro ejemplo
            const nombres1 = ["Juan", "Julieta"]
            const nombres2 = ["Carlos", "Mariela"]

            // spread de los dos arrays dentro de otro
            const nombres = [...nombres1, ...nombres2] // serian 2 array, el primero seria juan julieta y el segundo carlos mariela

            console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

            // spread del array en un objeto
            const nombresObj = {
                ...nombres
            }

            console.log(nombresObj)
            // { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }
        ---------- SPREAD DE ARRAYS ----------
            solo se puede dentro de otro objeto, no dentro de otra estructura
            se puede usar para trabajar sin modificar los datos originales
            
            ejemplo
            const usuario1 = {
                nombre: "Juan",
                edad: 24,
                curso: "Javascript"
            }   
            // lista todas las propiedades y valores de usuario1 dentro de otro objeto
            const usuario2 = {
                ...usuario1 // copia el key:value de usuario1
            }

            console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

            const usuario3 = {
                ...usuario1, // agarra el key:value del usuario 1 y le suma los de abajo
                curso: "ReactJS", // sobreescribe lo del usuario1
                email: "juan@doe.com"
            }

            console.log(usuario3)
            // { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' } // imprime el key:value del usuario1, y le suma los que se le agrego, como curso y email y sobreescribe

        ---------- REST PARAMETERS ----------
            podemos usar el spread para indicar que queremos recibir una cantidad indeterminada de parametros
            agregar parametros a la funcion que no necesariamente sabemos cuantas
            por ejemplo la cantidad de numeros que nos den, sumemos todos

            function sumar (...numeros) {
                console.log(numeros);
            }
            sumar(4,2) // [4,2]
            sumar(5,10,15,20,25); // [5,10,15,20,15]
*/