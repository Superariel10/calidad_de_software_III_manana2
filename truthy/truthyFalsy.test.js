const {esTruthy, retornarDefault, requireTextoNoVacio} = require('./truthyFalsy');

describe('Truthy / Flasy' , () => {
    test('Happy: valores truthy/falsy', () => {
        expect(esTruthy('hola')).toBeTruthy();
        expect(esTruthy(1)).toBeTruthy();
        expect(esTruthy('')).toBeFalsy();
        expect(esTruthy(0)).toBeFalsy();
        expect(esTruthy(null)).toBeFalsy();
        expect(esTruthy(undefined)).toBeFalsy();
        expect(esTruthy(NaN)).toBeFalsy();
    });
    test('Happy: retornarDefault usa falsy para asignar defecto', () => {
        expect(retornarDefault('OK', 'DEF')).toBe('OK');
        expect(retornarDefault('', 'DEF')).toBe('DEF');
        expect(retornarDefault(0, 'DEF')).toBe('DEF');
    });
    test('Sad: requireTextoNoVacio lanza en falsy o no string', () => {
        expect(() => requireTextoNoVacio('')).toThrow('texto requerido');
        expect(() => requireTextoNoVacio('  ')).toThrow('texto requerido');
        expect(() => requireTextoNoVacio(null)).toThrow('texto requerido');
        expect(requireTextoNoVacio(' Jest ')).toBe('Jest');
    });
});