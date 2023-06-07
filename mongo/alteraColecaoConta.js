use("ecomm");

const result = db.runCommand({
    collMod: "accounts",
    validator: {
        $jsonSchema: {
            title: "Registro de conta de usuário",
            description: "Este documento registra os detalhes de uma conta de usuário",
            bsonType: "object",
            required: [
                "_id",
                "nome",
                "email",
                "senha",
                "dataCriacao",
                "cpf",
                "telefone",
                "endereco",
            ],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "Id da conta de usuário"
                },
                nome: {
                    bsonType: "string",
                    description: "Nome da conta de usuário",
                    minLength: 5
                },
                email: {
                    bsonType: "string",
                    description: "Email da conta de usuário",
                    pattern: "^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$",
                    minLength: 5
                },
                senha: {
                    bsonType: "string",
                    description: "Senha da conta de usuário",
                    minLength: 5
                },
                dataCriacao: {
                    bsonType: "date",
                    description: "Data de criacao da conta de usuário",
                },
                cpf: {
                    type: "string",
                    description: "CPF da conta de usuário",
                    pattern: "^\\d{11}$"
                },
                telefone: {
                    bsonType: "string",
                    description: "Telefone da conta de usuário",
                    pattern: "^[0-9]{10,}$"
                },
                endereco: {
                    bsonType: "object",
                    description: "Endereco da conta de usuário",
                    required: [
                        "bairro",
                        "rua",
                        "numero",
                        "cep",
                        "cidade",
                        "uf"
                    ],
                    properties: {
                        bairro: {
                            bsonType: "string",
                            description: "Nome do bairro do endereco",
                            minLength: 1
                        },
                        rua: {
                            bsonType: "string",
                            description: "Rua do endereco",
                            minLength: 1
                        },
                        numero: {
                            bsonType: "string",
                            description: "Número do endereco",
                            pattern: "^(\\d+|S/N)$"
                        },
                        complemento: {
                            type: "string",
                            description: "Complemento do endereco"
                        },
                        cep: {
                            type: "string",
                            description: "CEP do endereco",
                            pattern: "^[0-9]{8}$"
                        },
                        cidade: {
                            type: "string",
                            description: "Cidade do endereco",
                            minLength: 5
                        },
                        uf: {
                            enum: [
                                "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
                                "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
                                "SP", "SE", "TO"
                            ],
                            type: "string",
                            description: "UF do endereco"
                        }
                    }
                }
            }
        }
    }
});

console.log(result);