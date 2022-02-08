const express = require('express');
const userRoute = require('./modules/user/user.routes');
const app = express();

app.use(express.json());

app.get('/', function (req, res){
   console.log('testing...') ;
   res.send('testing...');
});

app.get('/:id', function (req, res){
    console.log(req.params) ;
    res.send('ok...');
});

app.use('/user', userRoute);

app.listen(5000, function(req, res) {
    console.log("listening port 5000");
});



