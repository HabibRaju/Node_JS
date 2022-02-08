const express = require('express');
const { User } = require('./dbmodel');
const app = express();


app.use(express.json());



app.get('/', async function (req, res){
    const id = 1;
    const email = "raju@gmail.com";
    const user = await User.findOne({
        where: {
            email
        }
    });
    console.log(user.dataValues);
    res.send(user);


});

app.listen(5000, function(req, res) {
    console.log("listening port 5000");
});