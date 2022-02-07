const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function (req, res){
   console.log(a);
   res.send(a);
});

app.use((err, req, res, next) => {
    if(err.message){
        res.status(500).send(err.message);
    }
    else {
        res.status(500).send("Error");
    }
});
app.listen(5000, function(req, res) {
    console.log("listening port 5000");
});