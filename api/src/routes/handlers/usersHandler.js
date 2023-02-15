const {getAllUsers, createUser} = require("../controllers/usersController")


const getUsersHandler = async(req,res) =>{

    try {
        const allUsers = await getAllUsers();
        if (allUsers.length > 0){
            res.status(200).json(allUsers)
        } else {
            throw new Error("Users not found")
        }
    } catch (error) {
        res.status(404).send({error: error.message})
    } 
}

const postUserHandler = async(req,res) =>{
    try {
        const postUser = await createUser(req.body);
        res.status(200).json({message : " User created successfully", created: postUser})
    } catch (error) {
        res.status(400).json({error: message.error})
    }
}

module.exports = {
    getUsersHandler,
    postUserHandler
}