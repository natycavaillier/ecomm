use("ecomm");

const filter = { "status": "ATIVA" };

var categories = db.categories.find(filter);

console.log(categories);