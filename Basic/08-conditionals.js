// if, else if, else

//if (si)

let age = 19

if (age >= 18){
    console.log ('Es mayor de edad')
}

// else (si no)

if (age >= 18){
    console.log ('Es mayor de edad')
} else {
    console.log ('Es menor de edad')
}

// else if (si no, sí)

if (age >= 19){
    console.log ('Es mayor de edad')
} else if (age == 18 ){
    console.log ('acaba de cumplir la mayoria de edad')
} else {
    console.log ('Es menor de edad')
}

// Operator Ternario

const message = age >= 19 ? 'Es mayor de edad': 'No es mayor de edad'
console.log (message)

// switch

let day = 2
let dayName

switch (day) {
    case 0:
        dayName = 'Lunes'
        break
    case 1:
        dayName = 'Martes'
        break
    case 2:
        dayName = 'Miercoles'
        break
    case 3:
        dayName = 'Jueves'
        break
    case 4:
        dayName = 'Viernes'
        break
    case 5:
        dayName = 'Sabado'
        break
    case 6:
        dayName = 'Domingo'
        break
    default:
        dayName = 'Numero de dia incorrecto'
}
console.log (dayName)