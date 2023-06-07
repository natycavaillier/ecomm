use("ecomm");

const itemBeingPurchased = {
    productId: new ObjectId("6479fbdc9bfcaaa80501b467"),
    quantidade: 2,
    precoUnitario: NumberDecimal("5939.10")
};

const orderToBeInserted = {
    dataPedido: new Date(),
    account: {
        accountId: new ObjectId("6480827a95c517106e4c6059"),
        nome: "Gabriela Sena",
    },
    enderecoEntrega: {
        bairro: "Centro",
        rua: "Avenida Brigadeiro Mário Epingaus",
        numero: "S/N",
        cep: "42700970",
        cidade: "Lauro de Freitas",
        uf: "BA"
    },
    itens: [itemBeingPurchased]
};

const filter = { _id: itemBeingPurchased.productId, estoque: { $gte: itemBeingPurchased.quantidade } };
const updateStock = { $inc: { estoque: -(itemBeingPurchased.quantidade) } };


const resultInsert = db.orders.insertOne(orderToBeInserted);
const resultUpdate = db.products.updateOne(filter, updateStock);


console.log("Insertion result: ", resultInsert);
console.log("Update result: ", resultUpdate);