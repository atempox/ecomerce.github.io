/**
 * //esta funcion calcula el precio total de nuestra orden
 * @param {array} products cardProducts: Array de objetos 
 * @returns  {number} valor sumado de cada precio de todos los productos agregados
 */
export const totalPrice = (products) =>{
    let sum = 0;
    products.forEach(product => sum += product.price );
    return sum
}


