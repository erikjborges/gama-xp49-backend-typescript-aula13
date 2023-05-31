import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('oauth_clients', {
            id:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            client_id: Sequelize.DataTypes.TEXT,
            client_secret: Sequelize.DataTypes.TEXT,
            redirect_uri: Sequelize.DataTypes.TEXT
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('oauth_clients');
    }
};