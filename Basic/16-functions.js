// Funciones

function myFunction () {
    console.log ('Hola, Función')
}

for (let i = 0; i < 5; i++) {
    myFunction ()
}

// Funciones con parametros

function myFunction2 (name) {
    console.log (`Hola, ${name}`)
}

myFunction2 ('Jose')
myFunction2 ('David')

// Funciones anónimas

const func3 = function (surname)  {
    console.log (`Hola, ${surname}`)
} // funcion en una variabe

//Funciones flechas, (Arrow Functions)
const func4 = (name, surname) => console.log (`Hola, ${name} ${surname}`) // funcion en una variable, sin llaves

let myArray = [1,2,3,4]

// Parámetros

func3 (11) // el parámetro puede ser cualquier  tipo de dato
func3 (myArray) // el parámetro puede ser cualquier  tipo de dato

func4 ('Jose', "Zuñiga") // pueden ser varios parametros


// Valores por defecto
const suma = (a,b) => console.log (a + b) // funcion para sumar dos valores
suma (1, 4)
suma (1) // devuelve NaN, Not a Number

const resta = (a = 0, b = 0) => console.log (a - b)  // funcion, definiendo valores por defecto
resta (5,2)
resta (5)

// Retorno de valores

function multiplicacion (a,b) {
    return a*b
}

console.log (multiplicacion (5, 3)) // muestra el valor que retorna la funcion

resultado = multiplicacion (4, 5) // guardo el retorno en una variable
console.log (resultado)

// Funciones anidadas

function externa (){
    console.log ('Funcion externa')
    function interna (){
        console.log ('Funcion interna')
    }
    interna () // tengo que llamar la funcion interna dentro de la funcion externa, sino no se llama dicha funcion
}

externa ()

// Funciones en orden súperior

function supFunc (funcion, parametro) {
    funcion (parametro)
}
supFunc (myFunction2, 'Funcion en orden superior')

// forEach

let mySet = new Set (['Jose', 2, 'David', 19])
let myMap = new Map ([
    ['name', 'Jose'],
    ['alias', 'Che'],
    ['email', 'Che@gmail.com']
])

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))