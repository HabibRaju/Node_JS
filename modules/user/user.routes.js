const express = require('express');
const controller = require('./user.controller');
const userRoute = express.Router();

userRoute.get('/', controller.getUsers);
userRoute.get('/:id', controller.getUserById);
userRoute.post('/create', controller.createUser);
userRoute.put('/update/:id', controller.updateUser);
userRoute.delete('/delete/:id', controller.deleteUser);

module.exports = userRoute;
