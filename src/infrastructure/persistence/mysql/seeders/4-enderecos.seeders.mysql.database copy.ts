import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('enderecos', [
            {
                "idpessoa": 1,
                "cep": "35535-000",
                "logradouro": "",
                "complemento": "",
                "bairro": "Bom Jardim das Pedras",
                "cidade": "Carmópolis de Minas",
                "estado": "MG"
            },
            {
                "idpessoa": 2,
                "cep": "35530-000",
                "logradouro": "",
                "complemento": "",
                "bairro": "",
                "cidade": "Cláudio",
                "estado": "MG"
            },
            {
                "idpessoa": 3,
                "cep": "32676-265",
                "logradouro": "Avenida Juiz Marco Túlio Isaac",
                "complemento": "de 9101 a 10199 - lado ímpar",
                "bairro": "Laranjeiras",
                "cidade": "Betim",
                "estado": "MG"
            },
            {
                "idpessoa": 4,
                "cep": "01001-000",
                "logradouro": "Praça da Sé",
                "complemento": "lado ímpar",
                "bairro": "Sé",
                "cidade": "São Paulo",
                "estado": "SP"
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('enderecos', {});
    }
};