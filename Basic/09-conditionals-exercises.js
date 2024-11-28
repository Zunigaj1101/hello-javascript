// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
{
    let myName = 'Jose'
    let text = 'Jose'
    const message = text == myName ? 'Jose': 'No es Jose'
    console.log (message)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
{
    let user = 'Che'
    let password = 31
    let myPassword = 31
    let myUser = 'Che'
    const message = user == myUser && password == myPassword ? 'Si coinciden las credenciales': 'No coinciden las credenciales'
    console.log (message)
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
{
    let message
    let number = -1
    if (number > 0 ){
        message = 'Es positivo'
    } else if (number < 0) {
        message = 'Es negativo'
    } else {
        message = 'Es cero'
    }
        console.log(`Este numero es: ${message}`)
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
{
    let message
    let age = 12
    if (age >= 18){
        message = 'Es Mayor de edad' 
    } else if (age == 17) {
        message = `No puede votar, le falta 1 año para ser mayor de edad`
    } else {
        let resta = 18 - age
        message = `No puede votar, le faltan ${resta} años para ser mayor de edad`
    }
    console.log (message)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
{
    let age = 25
    let person
    person = age >= 18 ? 'adulto': 'menor'
    console.log (`Esta persona es un ${person}`) 
}
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
{
    let mes = 'febrero'
    mes = mes.toLowerCase()
    let estacion
    if (mes == 'marzo' || mes == 'abril' || mes == 'mayo'){
        estacion = 'Primavera'
    } else if (mes == 'junio' || mes == 'julio' || mes == 'agosto'){
        estacion = 'Verano'
    } else if (mes == 'septiembre' || mes == 'octubre' || mes === 'noviembre'){
        estacion = 'Otoño'
    } else if (mes == 'enero' || mes == 'diciembre' || mes == 'febrero'){
        estacion = 'Invierno'
    } else {
        estacion = 'Mes incorrecto'
    }
    console.log(`Estamos en ${estacion}`)
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
    let dias
    if (mes == 'enero' || mes == 'marzo' || mes == 'abril' || mes == 'mayo' || mes == 'julio' || mes == 'agosto' || mes == 'octubre' || mes == 'diciembre') {
        dias = 31
        console.log (`El mes de ${mes} tiene ${dias} dias`)
    } else if (mes == 'abril' || mes == 'junio' || mes == 'septiembre' || mes == 'noviembre'){
        dias = 30
        console.log (`El mes de ${mes} tiene ${dias} dias`)
    } else if (mes == 'febrero'){
        dias = 28
        console.log (`El mes de ${mes} tiene ${dias} dias`)
    } else {
        dias = 'sin valor'
        console.log('Error')
    }
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
{
    let language = 'english'
    switch (language){
        case 'español':
            message = 'Hola amigo, buenas tardes'
            break
        case 'english':
            message = 'Hello friend, good afternoon'
            break
        case 'french':
            message = 'Bonjour mon ami, bon après-midi'
            break
        default:
            message = `ha ocurrido un error, an error has occurred , une erreur s'est produite`
    }
    console.log(message)
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
{
    let mes = 'Agosto'
    let estacion
    let isTrue
    mes = mes.toLowerCase()
    switch (mes) {
        case 'marzo': 
        case 'abril':
        case 'agosto':
            estacion = 'Primavera'
            isTrue = true
            break
        case 'junio':
        case 'julio':
        case 'agosto':
            estacion = 'Verano'
            isTrue = true
            break
        case 'septiembre':
        case 'octubre':
        case 'noviembre':
            estacion = 'Otoño'
            isTrue = true
            break
        case 'diciembre':
        case 'enero':
        case 'febrero':
            estacion = 'Invierno'
            isTrue = true
            break
        default:
            estacion = 'Error'
    }
    isTrue == true ?console.log(`Estamos en ${estacion}`): console.log (`Error, mes invalido`)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
    let dias
    let isTrue2
    switch (mes){
        case 'enero':
        case 'marzo':
        case 'mayo':
        case 'julio':
        case 'agosto':
        case 'octubre':
        case 'diciembre':
            dias = 31
            break
        case 'abril':
        case 'junio':
        case 'septiembre':
        case 'noviembre':
            dias = 30
            break
        case 'febrero':
            dias = 28
            break
        default:
         dias = 0
    }
    isTrue == true ?console.log(`El mes de ${mes} tiene ${dias} dias`): console.log (`Error, mes invalido`)
}