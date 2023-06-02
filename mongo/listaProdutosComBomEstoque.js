use("ecomm");

const filter = {"estoque": {$gte: 3}};
const projection = {"nome": 1, "estoque": 1};

var products = db.products.find(filter, projection);

console.log(products);