// 1. Crea un objeto con 3 propiedades

let person = {
    name: "David",
    age: 21,
    alias: 'Chee'
}

// 2. Accede y muestra su valor

console.log (person.name)
console.log (person['age'])
console.log (person.alias)

// 3. Agrega una nueva propiedad

person.email = 'Che@gmail.com'

// 4. Elimina una de las 3 primeras propiedades

delete person.alias

// 5. Agrega una función e invócala

person.job = function (){
    console.log (`${this.name} trabaja`)
}
person.job ()

// 6. Itera las propiedades del objeto

for (key in person) {
    console.log (person[key])
}

// 7. Crea un objeto anidado

person.job = {
    name: "programador",
    work:function (){
        console.log (`${this.name} trabaja`)
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log (person)
console.log (person.job)
// 9. Comprueba si los dos objetos creados son iguales

console.log (person == person.job)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log (person.name == person.job.name)