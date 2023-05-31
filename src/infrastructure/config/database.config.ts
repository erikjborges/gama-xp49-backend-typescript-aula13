import "dotenv/config";

const databaseConfig = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql'
};

if(process.env.NODE_ENV === `production`){
    Object.assign(databaseConfig, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
}

export default databaseConfig;

module.exports = databaseConfig;