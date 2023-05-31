import "dotenv/config";

const mongoConfig = {
    database: process.env.MONGO_NAME,
    host: process.env.MONGO_HOST,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    port: Number(process.env.MONGO_PORT),
};

export default mongoConfig;

module.exports = mongoConfig;