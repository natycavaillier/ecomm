use("ecomm");

const filter = { "categoria": "LIVROS" };
const updateStockToZero = { $set: { "estoque": 0 } };

var result = db.products.updateMany(filter, updateStockToZero);

console.log(result);