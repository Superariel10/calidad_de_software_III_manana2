function calcularTotalCafeteria(items, ivaporcentaje) {
    if(!Array.isArray(items))
       throw new TypeError('item invalido');
    if(!ivaporcentaje || typeof ivaporcentaje != "number"){
       throw new TypeError("ivaporcentaje invalido");
    }
    let subtotal=0;
    for(let item of items) {
        const subtotalItem = item.precioUnitario*item.cantidad;
        subtotal+=subtotalItem
    }     
    const iva = subtotal * (ivaporcentaje/100)
    const total = subtotal + iva 
    return total;
}
module.exports = {calcularTotalCafeteria}

