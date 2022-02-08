const sequelize = require('../../config/sequelize');
const { DataTypes } = require("sequelize");

const User = sequelize.define('users', {
    user_name   : { type: DataTypes.STRING(50)},
    email       : { type: DataTypes.STRING(50)},
    password    : { type: DataTypes.STRING(50)},
    createdAt   : { type: DataTypes.DATE},
    updatedAt   : { type: DataTypes.DATE},
});

module.exports.User = User;