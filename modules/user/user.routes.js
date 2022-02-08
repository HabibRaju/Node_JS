const express = require('express');
const controller = require('./user.controller');
const userRoute = express.Router();

userRoute.get('/:id', controller.getUser);

module.exports = userRoute;
