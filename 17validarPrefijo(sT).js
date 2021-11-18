// Utils:
// var prefijos = [54, 55, 56, 57, 58]
// var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
// Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro.
//     Deberá:
// 1. Generar un objeto desde dos arreglos dados.Deberá tener como propiedades,
//     los números de prefijos, y como valor, el país correspondiente a cada prefijo.
//         ejemplo :
// {
//     54: “Argentina”,
//     55: ”Brasil”,
//     56: ”Ecuador”,
//     57: ”Bolivia”
// }
// 2. Validar si los dos primeros números del pasado por parámetro existen en el
// objeto de prefijos telefónicos.En caso de ser correcto, deberá retornar “Este
// número pertenece a X”.
// 3. En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros
// países”
// Ejemplo:
// - validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
// - validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
// - validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros
// países


var prefijos = [54, 55, 56, 57, 58];
var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"];

function validarPrefijo(num) {

    let newArray = []
    let dosPrimeros = num.slice(0, 2)

    let result;

    for (let i = 0; i < prefijos.length; i++) {
        newArray.push({ [prefijos[i]]: paises[i] }) // creo el array con prefijos y paises

        // if (newArray[i].hasOwnProperty(dosPrimeros)) { // busco en cada objeto (posicion del array) si coincide con los 2primeros 
        //     console.log(`✅ El número pertenece a ${Object.values(newArray[i])}`)
        // } else {
        //     console.log(`❌ El número no pertenece a ${Object.values(newArray[i])}`)
        // }

        switch (newArray[i].hasOwnProperty(dosPrimeros)) {
            case true: console.log(`✅ El número pertenece a ${Object.values(newArray[i])}`)
                break
            case false: console.log("El número no pertenece a nuestros países")
                break
        }

    }

}
// OUTPUT ⛔MAL
// No logro hacer que el output sea una sola linea. Que no se repita por cada iteración.
console.log(validarPrefijo('5412345678'))