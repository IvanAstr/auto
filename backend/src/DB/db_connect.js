const {Sequelize} = require('sequelize');
const dotenv = require('dotenv')
dotenv.config();

module.exports.sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "mysql",

});


