const products = require("./ecomm-produtos.json");

use("ecomm");

let productsToBeInserted = products.map((product) => {
    return { ...product, preco: NumberDecimal(product.preco) };
})

var result = db.products.insertMany(productsToBeInserted);

console.log(result);