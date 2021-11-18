// Investiga los siguientes métodos de los arreglos y replica su funcionamiento de manera
// lógica al igual que lo hiciste en el ejercicio número 5:



// 1- 
// - 1. “join([1, 2, 3, 4, 5], “ ”)” debe retornar “1 2 3 4 5”
function join(arr, method) {
    let str = method
    str += arr
    return str
}

//console.log(join([1, 2, 3, 4, 5], ' '))


// 2-
// - 2. “pop([1, 2, 3, 4, 5])” debe retornar 5
function pop(arr) {
    // return arr.at(-1)

    return arr[arr.length - 1]
}

//console.log(pop([1, 2, 3, 4, 5]))


// 3-
// - 3. “filter([1, 2, 3, 4, 5], (e) => { return e % 2 === 0 })” debe retornar[2, 4]

function filter(arr, func) {
    let newArr = []

    for (let i = 1; i < arr.length; i++) {
        if (func(i)) {
            newArr.push(i)
        }
    }

    return newArr
}

//console.log(filter([1, 2, 3, 4, 5], (e) => { return e % 2 === 0 }))

// 4-
// - 4. “map([1, 2, 3, 4, 5], (e) => { return e * 10 })” debe retornar[10, 20, 30, 40, 50]

function map(arr, func) {
    let newArr = []

    for (let i = 1; i <= arr.length; i++) {
        newArr.push(func(i))
    }

    return newArr
}

console.log(map([1, 2, 3, 4, 5], (e) => { return e * 10 }))