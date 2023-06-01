use("ecomm");

const filter = { "nome": "ESPORTE" };
const updateStatusToActive = { $set: { "status": "ATIVA" } };

var result = db.categories.updateOne(filter, updateStatusToActive);

console.log(result);