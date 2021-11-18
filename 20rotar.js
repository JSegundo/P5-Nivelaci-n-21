// Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera
// retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el
// número a la derecha.
//     Ejemplo:
// - rotar([1, 2, 3, 4, 5], 2) debe retornar[4, 5, 1, 2, 3]
//     - rotar([1, 2, 3, 4, 5], 3) debe retornar[3, 4, 5, 1, 2]

function rotar(arr, n) {
    let newArr = []

    for (let i = 0; i < n; i++) {
        newArr.push(arr.pop()) // Pusheando a newArr el ultimo valor del array, n veces.
    }

    return newArr.reverse().concat(arr) // Como pusheo el ultimo quedaron alrevez(5,4,3..) entonces lo revierto y mergeo con arr 

}

console.log(rotar([1, 2, 3, 4, 5], 3))