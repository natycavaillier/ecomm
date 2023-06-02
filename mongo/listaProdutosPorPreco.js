use("ecomm");

const filter = {$and: [{"preco": {$gte: 1000}}, {"preco": {$lte: 2000}}]}
const projection = {"nome": 1, "preco": 1};

var products = db.products.find(filter, projection);

console.log(products);