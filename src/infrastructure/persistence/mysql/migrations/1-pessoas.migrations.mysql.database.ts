import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('pessoas', {
            indexId:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'idpessoa'
            },
            cep: Sequelize.DataTypes.STRING,
            limiteCredito: Sequelize.DataTypes.INTEGER,
            observacoes: Sequelize.DataTypes.TEXT
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('pessoas');
    }
};