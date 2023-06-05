use("ecomm");

let result = db.products.createIndexes([
    { "estoque": 1, "nome": 1 },
    { "estoque": -1, "nome": 1 },
    { "preco": 1 },
    { "preco": -1 },
    { "categoria": 1 }
]);

console.log(`Indexes created: ${result}`);