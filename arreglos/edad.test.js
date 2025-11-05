const { edad } = require('./edad');

describe('Mayores de Edad', ()=>{
    test('Happy path: [15,18,26,28] mayores de edad [18,26,28]'
        , () => {
        expect(edad([15,18,26,28])).toEqual([18,26,28]); 
    });
    test('Happy path: [] mayores []', () => {
        expect(edad([])).toEqual([]);
    });
    
    test('Sad path: edades invalidas', () => {
        expect(()=>edad([18, -1])).toThrow('edad inválida'); 
        expect(()=>edad('arreglo')).toThrow('arreglo inválido'); 
    }); 
});
