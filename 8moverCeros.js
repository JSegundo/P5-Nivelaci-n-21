// - 8. Mover ceros a lo último
// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y
// devuelva otro con los números `0` ordenados al final.
//     Ejemplo:
// - moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) debe retornar[false, 1, 1, 2, 1, 3, "a", 0, 0]
//     - moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]) debe retornar[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

function moveZeros(arr) {
    let result = []
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 && typeof arr[i] == "number") {
            zeros.push(arr[i])
        } else {
            result.push(arr[i])
        }
    }

    return result.concat(zeros)
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))