// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0
for (let i = 1; i <=100; i++){
    suma += i
}
console.log (suma)

let i = 1
suma = 0
while (i <= 100){
    suma += i
    i++
}
console.log (`El resultado es: ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++){
    if (i % 2 == 1 ){
        continue
    } console.log (`par: ${i}`)
}

i = 1
while (i <= 50) {
    i++
    if (i % 2 === 0){
        console.log (`numero par: ${i}`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombre = ['jose','juan', 'david', 'nicols', 'jesus']

for (value of nombre) {
    console.log (value)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = 'Que onda gente'
let vocales = ['a','e','i','o','u']

suma = 0
for (letra of texto) {
    if (vocales.includes(letra)){
        suma ++     
        console.log(`vocal ${letra}  es la número ${suma}`)
    }
 };

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbers= [1,2,3,4,5,6,7,8,9]
let multiplicacion = 1
for (value of numbers){
    multiplicacion *= value
    console.log (`${multiplicacion} por ${value}`)
}
console.log (`el factorial del array numbers es ${multiplicacion}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 0; i < numbers.length; i++){
    let multiplicar = numbers[i] * 5
    console.log (`la multiplicacion de ${numbers[i]} x 5 = ${multiplicar}`)
}    

// 8. Usa un bucle para invertir una cadena de texto

let textoInvertido = ''

for (let i = texto.length -1 ; i >= 0; i--){
    textoInvertido += texto[i]
}
console.log (textoInvertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0
let b = 1
let c = 0

while (c < 55) {
    c = a + b
    a = b
    b = c
    console.log (c)
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

numbers.push(10,11,12,13,14,15)
let N = new Array()
for (value of numbers) {
    if(value >= 10 ){
    N.push(value)
    } 
} 

N = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
    N.push(numbers[i])
    }
} console.log (N)