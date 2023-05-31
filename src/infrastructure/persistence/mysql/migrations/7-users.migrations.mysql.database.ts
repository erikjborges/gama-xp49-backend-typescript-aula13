import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('users', {
            id:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: Sequelize.DataTypes.STRING,
            password: Sequelize.DataTypes.STRING,
            idpessoa: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'pessoas'
                    },
                    key: 'idpessoa'
                }
            }
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users');
    }
};