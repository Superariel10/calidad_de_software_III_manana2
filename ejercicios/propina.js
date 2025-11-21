function calcularPropina(cuenta, porcentajePropina) {
    if(cuenta<=0)
       throw new TypeError('cuenta no valida');
    if(porcentajePropina <= 0 || porcentajePropina >100)
       throw new TypeError("porcentajePropina no valido")
    const propina = cuenta * (porcentajePropina/100);
    totalPagar = cuenta+propina
    return total = {
        cuenta: cuenta,
        propina: propina,
        totalPagar: totalPagar
    };
}
module.exports = {calcularPropina} 
console.log(calcularPropina(10, 15))
