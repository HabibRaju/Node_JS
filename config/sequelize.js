const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('node_js_crud', 'root', 'root', {
    host: 'mysql-5',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamp: false
    },
    sync: true
});

module.exports = sequelize;

