export class Person3 {
    constructor(name, lastName, age, email) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.email = email
    }

    run() {
        console.log(`${this.name} is running`)
    }
}


export const name2 = 'Jose'

export function add2(a, b) {
    return a + b
}