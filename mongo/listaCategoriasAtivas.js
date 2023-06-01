use("ecomm");
var categories = db.categories.find({"status": "ATIVA"});

console.log(categories);