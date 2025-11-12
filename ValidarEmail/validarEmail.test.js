const {validarEmail} = require('./validarEmail');

describe('Validar Email', ()=>{
    test('Happy path: Elemento dentro del string false', () => {
        const email = validarEmail('fran.n.d');
        expect(email).toBe(false);
    });
    test('Happy path: Elemento dentro del string true', () => {
        const email = validarEmail('fran.n.d');
        expect(email).toBe(true); 
    });
    test('Sad path: Elementos invalidos', () => {
        const email = validarEmail(3455);
        expect(email).not.toThrow('email debe ser string')
    });
});
