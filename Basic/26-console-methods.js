// Console

// log
console.log ("Hola JavaScript")

// error

console.error ('Este es un mensaje de error')
console.error ('Error al carga los archivos x,y')
console.error ("Error al conectarse a la BD: ", new Error ("Conexion fallida"))

// warn

console.warn ("mensaje de advertencia")

// info

console.info ("Este es un mensaje de informacion adicional")

// table

let data = [
    ["jose",19],
    ['Pedro', 20]
]
console.table (data)

data = [
    {name: 'Jose', age: 19},
    {name: 'Carlos', age: 33},
]

console.table (data)

// group

console.group ("Usuario:")
console.log ("Nombre: Jose")
console.log ("Edad: 19")
console.groupEnd()
console.log ("ramdon text")

// time

console.time("tiempo de ejecucion")

for (let i = 0; i <10000 ; i++){

}
console.timeEnd("tiempo de ejecucion")

// asset

let age = 17
console.assert (age >=18, "El usuario debe ser mayor de edad")

// count

console.count ('Click')
console.count ('Click')
console.count ('Click')
console.count ('Click')
console.countReset ('Click')

console.count ('Click')
console.count ('Click')

// trace

function funcA () {
    funcB ()
}

function funcB() {
    console.trace ('Seguimiento de la ejecucion')
}

funcA ()