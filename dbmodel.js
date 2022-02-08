const Sequelize = require("sequelize");

const sequelize = new Sequelize('node_js_crud', 'root', 'root', {
    host: 'mysql-5',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamp: false
    },
    sync: true
});

const User = sequelize.define('users', {
    user_name   : { type: Sequelize.STRING},
    email       : { type: Sequelize.STRING},
    password    : { type: Sequelize.STRING},
    createdAt   : { type: Sequelize.DATE},
    updatedAt   : { type: Sequelize.DATE}
});

module.exports.User = User;