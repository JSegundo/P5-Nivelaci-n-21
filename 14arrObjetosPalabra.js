// Debés crear una función llamada `arregloDeObjetos` que reciba un número y una
// palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad
// llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.
//     Ejemplo:
// - arregloDeObjetos(5, “hola”) debe retornar[{ hola: 1 }, { hola: 2 }, { hola: 3 }, { hola: 4 },
//     { hola: 5 }]
//     - arregloDeObjetos(3, “chau”) debe retornar[{ chau: 1 }, { chau: 2 }, { chau: 3 }

function arregloDeObjetos(n, word) {
    let resultArray = []

    for (let i = 1; i <= n; i++) {
        // let objs = { [`${word}`]: i }
        let objs = new Object()
        objs[word] = i
        resultArray.push(objs)
    }
    return resultArray
}

console.log(arregloDeObjetos(5, 'holis'))