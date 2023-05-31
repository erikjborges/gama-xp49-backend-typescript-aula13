import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('pessoas_fisicas', {
            idpessoafisica:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'idpessoas_fisicas'
            },
            idpessoa: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'pessoas'
                    },
                    key: 'idpessoa'
                }
            },
            nome: Sequelize.DataTypes.STRING,
            cpf: Sequelize.DataTypes.STRING
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('pessoas_fisicas');
    }
};