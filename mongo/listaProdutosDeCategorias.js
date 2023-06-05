use("ecomm");

const filter = { "categoria": { $in: ["LIVROS", "CELULARES"] } };

var products = db.products.find(filter);

console.log(products);