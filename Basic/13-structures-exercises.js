// 1. Crea un array que almacene cinco animales

let animals = ['perro', 'gato', 'elefante', 'jirafa', 'hamster']

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift ('loro')
animals.push ('leon')

console.log (animals)

// 3. Elimina el que se encuentra en tercera posición

console.log (animals[2])
animals.splice (2,1)
console.log (animals)

// 4. Crea un set que almacene cinco libros

let libros = new Set ()
let valoresLibros = ['biblia', 'harry potter', 'el principito', 'la culpa, vaca', 'my love']

libros = new Set (valoresLibros)
console.log (libros)

// 5. Añade dos más. Uno de ellos repetido

libros.add ('juegos del hambre')
libros.add ('juegos del hambre')
libros.add ('juegos del hambre, llamas')

console.log (libros)

// 6. Elimina uno concreto a tu elección

libros.delete ('la culpa, vaca')
console.log (libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mes = new Map ([
    [0, 'enero'],
    [1, 'febrero'],
    [2, 'marzo'],
    [3, 'abril'],
    [4, 'mayo'],
    [5, 'junio'],
    [6, 'julio'],
    [7, 'agosto'],
    [8, 'septiembre'],
    [9, 'octubre'],
    [10,'noviembre'],
    [11,'diciembre']
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

mes.has(5) ? console.log(mes.get(5)): console.log('ERROR')

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mes.set (12, ['frebrero','marzo','abril'])

console.log (mes)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = new Array(1,2,3,4,5,6,7,8,9)
mySet = new Set (myArray)
myMap = new Map ()

myArray = Array.from (mySet)
myArray.forEach ((element, index) => {
    myMap.set(index, element)
})

console.log(myMap)