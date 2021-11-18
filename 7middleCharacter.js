// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro
// y devuelva sus caracteres del medio

function middleCharacter(str) {
    let mitad = str.length / 2

    if (mitad % 2 == 0) {
        return str.charAt(mitad - 1) + str.charAt(mitad)
    } else {
        return str.charAt(mitad)
    }
}

console.log(middleCharacter("mortadela"))