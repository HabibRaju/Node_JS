const express = require('express');
const publicRouter = express.Router();

publicRouter.get('/', function (req, res){
   console.log("This is Public Router");
   res.send('This is Public Router');
});

module.exports = publicRouter;