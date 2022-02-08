const { User }  = require('./user.model');
const {where} = require("sequelize");

const getUsers = async (req, res) =>{
    try{
        const users = await User.findAll();
        console.log(users);
        res.send(users);

    }catch (err) {
        console.log(err);
        res.status(404).send("Users Not Found!");
    }


};
const getUserById = async (req, res)=>{

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
        res.status(404).send("User Not Found!");
    }
};
const createUser = async (req, res) =>{
    try{
        const { user_name, email, password } = req.body;

        const existUser = await User.findOne({
            where: {
                email
            },
        });

        if(existUser){
            return res.status(400).send("Already registered with this email address.");
        }

        const user = await User.create({
            user_name,
            email,
            password
        });

        console.log(user.dataValues);
        res.status(201).send({
            message : 'User Create Successfully',
            data    : user
        });

    }catch (err) {

        console.log(err);
        res.send("Server ERROR!!");
    }
};
const updateUser = async (req, res) => {
    try{
        const id  = req.params.id;
        const { user_name, email, password } = req.body;

        const user = await User.update(
            {
                user_name: user_name,
                email :email,
                password : password
            },
            {
                where: {
                    id : id
                }
            }
        );

        if(!user)return res.status(404).send("User Not Found");

        console.log("Flag : "+user);
        res.status(201).send({
           message: "User Update Successfully"
        });
    }catch (err) {
        console.log(err);
    }
}
const deleteUser= async (req, res) =>{

    try{
        const id  = req.params.id;
        const user = await User.findOne({
            where: {
                id,
            },
        });

        if(!user)res.status(404).send("User Not Found");

        const flag = await user.destroy({
            where: {
                id
            }
        });
        console.log("Flag = "+flag);
        res.status(200).send("User Delete Successfully");
    }catch (err){
        console.log(err);
    }


}


module.exports.getUsers     = getUsers;
module.exports.getUserById  = getUserById;
module.exports.createUser   = createUser;
module.exports.updateUser   = updateUser;
module.exports.deleteUser   = deleteUser;