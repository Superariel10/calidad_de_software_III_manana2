const { deepMerge } = require('./deepMerge');

describe('Deep Merge', ()=>{
    test('Happy path: Buscar Palabra Jest', () => {
        const response =deepMerge('Hola mundo Jest','Jest')
    expect(response).toBe(true);
    const response2 = deepMerge(
        'Hola mundo Jest', 'Jesty'
    )
    expect(response2).toBe(false);
    });
    test('Sad path: ERROR', () => {
        expect(()=> deepMerge(
            null, 'jest')).toThrow('frase invalido');
        expect(()=> deepMerge('',344))
        .toThrow('frase invalido');
    });
});
