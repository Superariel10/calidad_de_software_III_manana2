const {calcularTotalCafeteria} = require('./consumo');

describe('calcularTotalCafeteria' , () => {
    test('Happy: Calcular correctamente', () => {
        const items =
        [
            {
                nombre: "Laptop",
                precioUnitario: 500,
                cantidad: 3
            },
            {
                nombre: "Monitor",
                precioUnitario: 300,
                cantidad: 2
            },
        ]
        const resultado = calcularTotalCafeteria(items, 15);
        expect(resultado).toBe(2415);
    });
    test('Sad: Valores de ingreso errados', () => {
        const items =
        [
            {
                nombre: "Laptop",
                precioUnitario: 500,
                cantidad: 3
            },
            {
                nombre: "Monitor",
                precioUnitario: 300,
                cantidad: 2
            },
        ]
        expect(() => calcularTotalCafeteria(0, 12)).toThrow('item invalido');
        expect(() => calcularTotalCafeteria(items, "12")).toThrow('ivaporcentaje invalido');
    });
});