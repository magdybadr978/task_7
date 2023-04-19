const { Sequelize } = require("sequelize");

const sequilize =new Sequelize({
    host : "localhost",
    dialect : "mysql",
    username : "root",
    database : "task_7",
    logging : console.log 
});

module.exports = sequilize;