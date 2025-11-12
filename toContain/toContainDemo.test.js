const {obtenerFrutas,contienePalabra,agregarElemento} = require('./toContainDemo');

describe('toContain Matcher', ()=>{
    test('Happy path: Elemento dentro de array', () => {
        const frutas = obtenerFrutas();
        expect(frutas).toContain('pera')
    });
    test('Sad path: Palabra dentro de texto', () => {
        const texto = contienePalabra('Jest es super');
        expect(texto).toBe(true)
    });
    test('Sad path: Elemento no encontrado o tipo incorrecto', () => {
        const frutas = obtenerFrutas();
        expect(frutas).not.toContain('banana')
    });
    test('Sad path: Elementos invalidos', () => {
        const response = agregarElemento({},'x');
        expect(response).toThrow('lista debe ser un array');
    });
});
