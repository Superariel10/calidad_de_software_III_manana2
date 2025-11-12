function contarPalabras(texto){
    if(!texto || !typeof texto =='string'){
        throw new TypeError("frase invalido");
    }   
    const textoTrimmed = texto.trim();
    if (textoTrimmed==='')
        throw new TypeError("frase invalido")
    return textoTrimmed.split(/\s+/).length;
}
module.exports={contarPalabras}