// Utils:
// var abc =
// {
//     a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19
//     , t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
// }
// Debés crear una función llamada `warWords` que reciba dos palabras como parámetro
// y devuelva la ganadora según la suma del valor de sus letras(dado por su posición en
// el abecedario).
//     Ejemplo:
// - warWord(“hola”, “chau”) debe retornar “hola” (36 > 33)
//     - warWord(“love”, “friendship”) debe retornar “friendship


var abc = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19
    , t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
}



function warWords(w1, w2) {

    let arrw1 = w1.split('') // Palabra a array. cada letra es un valor
    let arr1Numbers = [] // Con el loop busco los valores de cada letra y los meto en arr1Numbers.
    for (let i = 0; i < arrw1.length; i++) {
        arr1Numbers.push(abc[arrw1[i]])  // Se busca en cada iteración, el valor de cada letra de la palabra en la var global 'abc'.
    }
    let arr1TotalValue = arr1Numbers.reduce((a, b) => a + b) // Una vez que tengo todos los valores, los sumo.

    // Hago lo mismo para la otra palabra.
    let arrw2 = w2.split('')
    let arr2Numbers = []
    for (let i = 0; i < arrw2.length; i++) {
        arr2Numbers.push(abc[arrw2[i]])
    }
    let arr2TotalValue = arr2Numbers.reduce((a, b) => a + b)

    // Dependiendo que valor sea mas grande, va a ser el output de la funcion.
    if (arr1TotalValue > arr2TotalValue) {
        return `the winner is 💥${w1}💥`
    } else if (arr1TotalValue < arr2TotalValue) {
        return `the winner is 🔱${w2}🔱`
    } else {
        return `there is no winner, both words have the same value.`
    }
}

console.log(warWords("humanos", "robots"))