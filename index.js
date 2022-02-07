const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');
const app = express();

app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    console.log('This is testing...');
    res.send("This is testing...");
});

app.use('/admin', adminRouter);
app.use('/public', publicRouter);

app.listen(5000, function(req, res) {
    console.log("listening port 5000");
});