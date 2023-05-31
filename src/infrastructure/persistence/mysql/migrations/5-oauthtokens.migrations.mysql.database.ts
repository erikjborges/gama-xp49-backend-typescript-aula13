import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('oauth_tokens', {
            id:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                unique: true
            },
            access_token: Sequelize.DataTypes.TEXT,
            access_token_expires_on: Sequelize.DataTypes.TIME,
            client_id: Sequelize.DataTypes.TEXT,
            refresh_token: Sequelize.DataTypes.TEXT,
            refresh_token_expires_on: Sequelize.DataTypes.TIME,
            user_id: Sequelize.DataTypes.STRING
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('oauth_tokens');
    }
};