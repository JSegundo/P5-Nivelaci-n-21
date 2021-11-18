// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como
// parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.
// Ejemplo:
// - mezclarArreglos([1, 2, 3, 4], [“h”,”o”,”l”,”a”]) debe retornar[1, “h”, 2,”o”, 3,”l”, 4,”a”]
// - mezclarArreglos([1, 2, 3, 4], [“h”,”p”]) debe retornar[1, “h”, 2, “p”, 3, 4]
// - mezclarArreglos([“h”,”p”], [1, 2, 3, 4]) debe retornar[“h”, 1, “p”, 2, 3, 4]


function mezclarArreglos(arr1, arr2) {
    let newArray = []

    let larger = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < larger; i++) {
        newArray.push(arr1[i])
        newArray.push(arr2[i])
    }

    return newArray.filter(item => item !== undefined)
}

console.log(mezclarArreglos([1, 2, 3, 4], ['h', 'o', 'l', 'a']))