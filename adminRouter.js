const express = require('express');
const adminRouter = express.Router();

adminRouter
    .route('/user')
    .all((req, res, next)=>{
        console.log(`I'm Logging`);
        next();
    })
    .get((req, res)=>{
        res.send("GET");
    })
    .post((req, res)=>{
        res.send("POST")
    })
    .put((req, res)=>{
        res.send("PUT")
    })
    .delete((req, res)=>{
        res.send("DELETE");
    });

module.exports = adminRouter;
















// adminRouter.param((param, option) => (req, res, next, val) => {
//     if (val === option.id) {
//         next();
//     } else {
//         res.status(403).send(option.name);
//     }
// });
//
// adminRouter.param('userId', {
//     'id' : '12',
//     'name' : 'Habibur'
// });
//
// adminRouter.get('/:userId', function (req, res){
//     res.send(`Hi Admin`);
// });