use("ecomm");

let result = db.createCollection(
    "orders",
    {
        validator: {
            $jsonSchema: {
                title: "Registro de pedido",
                description: "Este documento registra os detalhes de um pedido",
                bsonType: "object",
                required: [
                    "_id",
                    "dataPedido",
                    "account",
                    "enderecoEntrega",
                    "itens"
                ],
                additionalProperties: false,
                properties: {
                    _id: {
                        bsonType: "objectId",
                        description: "Id do pedido"
                    },
                    dataPedido: {
                        bsonType: "date",
                        description: "Data do pedido",
                    },
                    account: {
                        bsonType: "object",
                        description: "Dados da conta relacionada ao pedido",
                        required: ["accountId", "nome"],
                        properties: {
                            accountId: {
                                bsonType: "objectId",
                                description: "Id da conta relacionada ao pedido"
                            },
                            nomeCliente: {
                                bsonType: "string",
                                description: "Nome do cliente relacionado ao pedido",
                                minLength: 5
                            }
                        }
                    },
                    enderecoEntrega: {
                        bsonType: "object",
                        description: "Endereco de entrega do pedido",
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
                    },
                    itens: {
                        bsonType: "array",
                        description: "Lista de itens do pedido",
                        minItems: 1,
                        items: {
                            bsonType: "object",
                            description: "Item do pedido",
                            required: ["productId", "quantidade", "precoUnitario"],
                            properties: {
                                productId: {
                                    bsonType: "objectId",
                                    description: "Id do produto relacionado ao item do pedido"
                                },
                                quantidade: {
                                    bsonType: "int",
                                    description: "Quantidade do item do pedido",
                                    minimum: 1,
                                },
                                desconto: {
                                    bsonType: "decimal",
                                    description: "Desconto do item do pedido",
                                    minimum: 0.00,
                                    exclusiveMinimum: true
                                },
                                precoUnitario: {
                                    bsonType: "decimal",
                                    description: "Preco unitario do item do pedido",
                                    minimum: 0.00,
                                    exclusiveMinimum: true
                                }
                            }
                        }
                    }

                }
            }
        }
    }
);

console.log(result);