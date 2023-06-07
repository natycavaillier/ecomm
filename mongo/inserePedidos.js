use("ecomm");


const ordersToBeInserted = [
    {
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
        itens: [
            {
                productId: new ObjectId("6479fbdc9bfcaaa80501b458"),
                quantidade: 1,
                desconto: NumberDecimal("0.05"),
                precoUnitario: NumberDecimal("3523.00")
            },
            {
                productId: new ObjectId("6479fbdc9bfcaaa80501b45a"),
                quantidade: 2,
                precoUnitario: NumberDecimal("102.9")
            }
        ]
    },
    {
        dataPedido: new Date(),
        account: {
            accountId: new ObjectId("6480827a95c517106e4c605a"),
            nome: "Fernanda Alves",
        },
        enderecoEntrega: {
            bairro: "União de Vila Nova",
            rua: "Rua Rio Boa Esperança",
            numero: "132",
            complemento: "Próximo a uma farmácia",
            cep: "08072290",
            cidade: "São Paulo",
            uf: "SP"
        },
        itens: [
            {
                productId: new ObjectId("6479fbdc9bfcaaa80501b459"),
                quantidade: 1,
                desconto: NumberDecimal("0.10"),
                precoUnitario: NumberDecimal("2500.00")
            }
        ]
    },
    {
        dataPedido: new Date(),
        account: {
            accountId: new ObjectId("6480827a95c517106e4c605b"),
            nome: "Pedro Henrique",
        },
        enderecoEntrega: {
            bairro: "Jaguaribe",
            rua: "Rua Jorge Santos Pereira",
            numero: "112",
            cep: "41613114",
            cidade: "Salvador",
            uf: "BA"
        },
        itens: [
            {
                productId: new ObjectId("6479fbdc9bfcaaa80501b45a"),
                quantidade: 3,
                desconto: NumberDecimal("0.15"),
                precoUnitario: NumberDecimal("102.9")
            },
            {
                productId: new ObjectId("6479fbdc9bfcaaa80501b45e"),
                quantidade: 2,
                precoUnitario: NumberDecimal("144.07")
            },
            {
                productId: new ObjectId("6479fbdc9bfcaaa80501b460"),
                quantidade: 1,
                precoUnitario: NumberDecimal("95.17")
            },
            {
                productId: new ObjectId("6479fbdc9bfcaaa80501b463"),
                quantidade: 5,
                precoUnitario: NumberDecimal("173.9")
            }
        ]
    }
];

const result = db.orders.insertMany(ordersToBeInserted);

console.log(result);