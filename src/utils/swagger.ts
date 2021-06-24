export default {
    definition: {
        swagger: "2.0",
        info: {
            version: "1.0.0",
            title: "Busca de CEP"
        },
        paths: {
            "/api/autch": {
                post: {
                    description: "Autenticação API",
                    parameters: [{
                        in: "body",
                        name: "usuario",
                        required: "true",
                        type: "string",
                        description: 'Usuário para acesso ao sistema'
                    },
                    {

                        in: "body",
                        name: "senha",
                        required: "true",
                        type: "string",
                        description: 'Senha para acesso ao sistema'
                    }],
                    responses: {
                        200: {
                            description: 'token'
                        },
                        401: {
                            description: 'Não autorizado'
                        }
                    }
                }
            },
            "/api/ping": {
                get: {
                    description: "Verificando API",
                    responses: {
                        200: {
                            description: "Pong"
                        },
                        500: {
                            description: "..."
                        }
                    }
                }
            },
            "/api/cep/{cep}": {
                get: {
                    description: " Busca por CEP",
                    parameters: [{
                        in: "parameter",
                        name: "cep",
                        required: "true",
                        schema: {
                            format: "string"
                        },
                        description: '14401222'
                    }],
                    responses: {
                        200: {
                            description: "successful operation",
                            examples: {
                                "application/json": {
                                    "cep": "14401-000",
                                    "rua": "Avenida Doutor Hélio Palermo",
                                    "bairro": "Prolongamento Vila Duque de Caxias",
                                    "cidade": "Franca",
                                    "uf": "SP"
                                }
                            }
                        },
                        400: {
                            description: "CEP inválido"
                        },
                    }
                }
            },
        },
    },
    apis: ["./src/routes.ts"],
};