// Debés crear una función llamada `sumattion` que reciba un número como parámetro y
// que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

function sumattion(n) {
    let result = 0
    if (n >= 0)
        result += n + sumattion(n - 1)
    return result
}

console.log(sumattion(8))