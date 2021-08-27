class Person{
    fName: string;
    lName: string;

    constructor(fName: string, lName: string){
        this.fName = fName;
        this.lName = lName;
    }

    getFullName(): string{
        return `${this.fName} ${this.lName}`
    }
}

class Admin extends Person{

}

class Manager extends Person{

}

class Product {

}


const admin = new Admin('amir', 'ansari')
const manager = new Admin('Inamulla', 'ansari')
const product = new Product

function echoPerson<T extends Person>(person: T): T{
    console.log(person.fName)
    return person
}

const person = echoPerson(admin)

// const mobile = echoPersion(product)