function makeFullName(obj:{firstName: string, lastName: string}){
    return{
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    }
}

const makeFullName2 = <T extends {firstName: string, lastName: string}>(obj: T) =>{
    return{
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`

    }
}

const p = makeFullName({firstName: 'amir', lastName:'ansari'})

const p2 = makeFullName({firstName: 'amir', lastName:'ansari', age: 13})

const p3 = makeFullName2({firstName: 'amir', lastName:'ansari', age: 13})
