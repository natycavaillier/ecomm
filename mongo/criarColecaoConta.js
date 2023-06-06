use("ecomm");

let result = db.createCollection(
    "accounts",
    {
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
                        "bsonType": "objectId",
                        "description": "Id da conta de usuário"
                    },
                    nome: {
                        bsonType: "string",
                        description: "Nome da conta de usuário",
                        minLength: 5
                    },
                    email: {
                        bsonType: "string",
                        description: "Email da conta de usuário",
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
                        bsonType: "string",
                        description: "CPF da conta de usuário",
                        minLength: 11,
                        maxLength: 11
                    },
                    telefone: {
                        bsonType: "string",
                        description: "Telefone da conta de usuário",
                        minLength: 10
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
                                minLength: 1
                            },
                            complemento: {
                                type: "string",
                                description: "Complemento do endereco"
                            },
                            cep: {
                                type: "string",
                                description: "CEP do endereco",
                                minLength: 8,
                                maxLength: 8
                            },
                            cidade: {
                                type: "string",
                                description: "Cidade do endereco",
                                minLength: 5
                            },
                            uf: {
                                type: "string",
                                description: "UF do endereco",
                                minLength: 2,
                                maxLength: 2
                            }
                        }
                    }
                }
            }
        }
    }
);

console.log(result);