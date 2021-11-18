// Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como
// parámetro y un string.Deberá retornar un nuevo arreglo de objetos, teniendo como
// parámetro la propiedad que fue pasada como string.
//     Ejemplo:
// var arreglo = [{ name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
// - oneProperty(arreglo, “edad”) debe retornar[{ edad: 20 }, { edad: 22 }]
//     - oneProperty(arreglo, “name”) debe retornar[{ name: “lucas” }, { name: “santi” }]

let arreglo = [{ name: "segu", edad: 20 }, { name: "mono", edad: 22 }]

function oneProperty(arr, prop) {

    let newArray = []

    for (let i = 0; i < arr.length; i++) {
        newArray.push({ [prop]: arr[i][prop] }) // (no entendí porque [prop]:¿? )
    }

    return newArray
}

console.log(oneProperty(arreglo, "name"))
