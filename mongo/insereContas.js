use("ecomm");

const accountsToBeInserted = [
    {
        nome: "Gabriela Sena",
        email: "gsena@gmail.com",
        senha: "gs123",
        dataCriacao: new Date(),
        cpf: "96420591007",
        telefone: "71999999999",
        endereco: {
            bairro: "Centro",
            rua: "Avenida Brigadeiro Mário Epingaus",
            numero: "s/n",
            cep: "42700970",
            cidade: "Lauro de Freitas",
            uf: "BA"
        }
    },
    {
        nome: "Fernanda Alves",
        email: "falves@gmail.com",
        senha: "fa123",
        dataCriacao: new Date(),
        cpf: "33864335027",
        telefone: "11999999998",
        endereco: {
            bairro: "União de Vila Nova",
            rua: "Rua Rio Boa Esperança",
            numero: "132",
            complemento: "Próximo a uma farmácia",
            cep: "08072290",
            cidade: "São Paulo",
            uf: "SP"
        }
    },
    {
        nome: "Pedro Henrique",
        email: "phenrique@gmail.com",
        senha: "ph123",
        dataCriacao: new Date(),
        cpf: "15892910008",
        telefone: "71999999998",
        endereco: {
            bairro: "Jaguaribe",
            rua: "Rua Jorge Santos Pereira",
            numero: "112",
            cep: "41613114",
            cidade: "Salvador",
            uf: "BA"
        }
    },
];

const result = db.accounts.insertMany(accountsToBeInserted);

console.log(result);