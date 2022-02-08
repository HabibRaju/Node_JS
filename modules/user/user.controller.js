const { User }  = require('./user.model');

const getUser = async (req, res)=>{

    try{
        const id = req.params.id;

        const user = await User.findOne({
            where: {
                id
            }
        });
        console.log(user.dataValues);
        res.send(user);
    }catch (err) {
        console.log(err);
        res.status(500).send("Internal server error!");
    }
};

module.exports.getUser = getUser;