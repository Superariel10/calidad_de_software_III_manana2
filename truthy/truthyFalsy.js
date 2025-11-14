function esTruthy(valor) {
    return !!valor; // coercion boleana
}

function retornarDefault(valor, defecto = 'N/A') {
    return valor ? valor : defecto; // usa falsy
}

function requireTextoNoVacio(txt) {
    if (typeof txt !== 'string' || !txt.trim()) {
        throw new TypeError('texto requerido')
    }
    return txt.trim();
}

module.exports = {esTruthy, retornarDefault, requireTextoNoVacio};