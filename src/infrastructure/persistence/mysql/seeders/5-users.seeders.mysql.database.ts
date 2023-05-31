import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('users', [
            {
                "idpessoa": 1,
                "id": 1,
                "logradouro": "",
                "complemento": "",
                "bairro": "Bom Jardim das Pedras",
                "cidade": "Carmópolis de Minas",
                "estado": "MG"
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('users', {});
    }
};