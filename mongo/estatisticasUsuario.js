use("ecomm");

const accountId = new ObjectId("6480827a95c517106e4c6059");

const aggregationResult = db.orders.aggregate([
    {
        $match: { "account.accountId": accountId }
    },

    {
        $group: {
            _id: null,
            total_quantidade: { $sum: { $sum: "$itens.quantidade" } },

            montante_total: {
                $sum: {
                    $sum: {
                        $map: {
                            input: "$itens",
                            as: "item",
                            in: { $multiply: ["$$item.quantidade", "$$item.precoUnitario"] }
                        }
                    }
                }
            },

            montante_descontos: {
                $sum: {
                    $sum: {
                        $map: {
                            input: "$itens",
                            as: "item",
                            in: { $multiply: ["$$item.precoUnitario", "$$item.desconto"] }
                        }
                    }
                }
            }
        }
    }
]);

console.log(`\n***** Estatisticas da conta de id ${accountId} *****\n`, aggregationResult);