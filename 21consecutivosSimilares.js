// Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne
// cuantos consecutivos similares hay en un string.
//     Ejemplo:
// - consecutivosSimilares(“AAAA”) debe retornar 3
//     - consecutivosSimilares(“BBBBB”) debe retornar 4
//         - consecutivosSimilares(“ABABABAB”) debe retornar 0
//             - consecutivosSimilares(“BABABA”) debe retornar 0
//                 - consecutivosSimilares(“AAABBB”) debe retornar 4

function consecutivosSimilares(str) {
    let regex = /([a-z])\1+/gi;
    let arrMatches = str.match(regex) // devuelve un array con todos los matches
    if (arrMatches <= 0) {
        return 0
    } else {
        let num = arrMatches.map(el => el.length - 1).reduce((a, b) => a + b) // busco el length de cada match y le resto 1 ya que busco cuantos CONSECUTIVOS hay despues del primero. sumo todos para retornar el total de coincidencias.

        return num
    }
}

console.log(consecutivosSimilares("ABABABAB"))