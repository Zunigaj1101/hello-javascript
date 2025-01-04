// 1. Captura una excepción utilizando try-catch

let myObject


try {
    console.log ("Hola")
    console.log (myObject.lastName) // esto es una excepcion
} catch (error) {
    console.log ("Si hubo un error", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log (myObject.lastName)
} catch (error) {
    console.log ("Error:", error.message)
} finally {
    console.log("Bloque finally ejecutado.")
}

// 3. Lanza una excepción genérica

try {
    throw new Error('Esta es una excepcion generica')
} catch (error) {
    console.log (error.message)
}

// 4. Crea una excepción personalizada

class CustomError extends Error {
    constructor (message, a) {
        super (message)
        this.a = a
    }
    printNumberError () {
        console.log (this.message, this.a)
    }

}

// 5. Lanza una excepción personalizada

/*try {
    throw new CustomError ("Hay un error en estos numeros", 2, 5)
} catch (error) {
    error.printNumberError ()
}*/

// 6. Lanza varias excepciones según una lógica definida
let person = {
    name: 'Jose',
    lastName: "Zuñiga",
    age: 19,
    alias: 'Che',
    walk: function () {
        console.log ('Camino')
    },
    job:{
        name2: 'Programador',
        exp: 2,
        work: function (){
            console.log (` ${person3.name}  trabaja como ${this.name2}`)
        }
    }
}

let person2 = {
    age: "19"
}


function isAdult (person) {
    if (typeof person.age  == "number" && person.age >= 18) {
        console.log (`Esta persona es un adulto de ${person.age} años`)
    } else if (typeof person.age  == "number" && person.age < 18) {
        console.log (`No es adulto`)
    } else {
        throw new CustomError ("Error personalizado")
    }
}
try {
    isAdult (person)
    isAdult (person2)
} catch (error) {
    if ( error instanceof CustomError){
        console.log ("Si funciona", error.message)
    }
}

// 7. Captura varias excepciones en un mismo try-catch
function Mult (a,b) {
    if (typeof a !== "number" || typeof b !== 'number') {
        throw new TypeError ('No son numeros')
    } else if (a == 0 || b == 0) {
        throw new CustomError ("No se puede multiplicar por 0")
    } else if (a < 0 || b < 0) {
        throw new Error ("no se puede Multiplicar por menos de cero")
    }
    return a*b
}

try {
    //console.log (Mult (2,'3'))
    // console.log (Mult (2,-1))
    console.log (Mult (2,3))

} catch (error) {
    if (error instanceof TypeError) {
        console.log ("Se ha producido un TypeError: ",error.message)
    } else if (error instanceof CustomError) {
        console.log ("Se ha producido un CustomError: ",error.message)
    } else {
        console.log ('Se ha producido un Error generico: ', error.message)
    }
} finally {
    console.log ("Bloque Finally ejecutado")
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let myNumbers  = ['1.2', '2.2', 3,'4.23', NaN, '5,5' , 'JO']

for (let index = 0; index < myNumbers.length; index++) {
    try {
        let value = parseFloat (myNumbers[index])
        if (isNaN(value)) {
            throw new TypeError ("No es un numero")
        }
        console.log (value, ' es ', typeof value)
    } catch (error) {
        console.log(`Error al convertir el valor "${myNumbers[index]}" en la posición ${index}:`, error.message);
    }
}


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function objeto (obj, prop) {
    if (prop in obj) {
        console.log (`Si esta la propiedad: ${prop}`)
    } else {
        throw new CustomError ('No está la propiedad')
    }
}
try {
    objeto (person, "age")
    objeto (person, "names")
} catch (error) {
    console.log ("se ha producido un Error: " ,error.message)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function reintentosFuncion (operacion, maxIntentos) {
    let intento = 0
    while (intento < maxIntentos) {
        try {
            operacion()
            console.log ("Ejecutado con exito")
            break;
        } catch (error) {
            intento++
            console.log (`Error, intento ${intento}: `,error.message)
        }
    }
}

function ErrorExample () {
    if (1==1) {
        throw new Error("Error Generico");
    }
}

reintentosFuncion (ErrorExample, 10)
