function last<T>(arr: Array<T>): T {
    return arr[arr.length]
}

const last2 = <T>(arr: T[]): T => {
    return arr[arr.length]
}

const l = last([1, 2, 3, 4])

const l2 = last<string>(['a', 'b', 'c', 'd'])

//--------------------------------------------------------------

function makeArray<X, Y>(x: X, y: Y) {
    return [x, y]
}

const makeArray2 = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y]
}

const makeArray3 = <X, Y = number>(x: X, y?: Y): [X, Y] => {
    return [x, y]
}

const v = makeArray(1, 2)
const v2 = makeArray("a", "b")
const v3 = makeArray("a", 1)

const v4 = makeArray2('a', 1)

const v5 =  makeArray2<string, number>("a", 3)


const v6 =  makeArray3<string>("a", 3)