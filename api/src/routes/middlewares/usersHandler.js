const {getAllUsers} = require("../controllers/usersController")


const getUsersHandler = async(req,res) =>{

    try {
        const allUsers = await getAllUsers();
        if (allUsers.length > 0){
            res.status(200).json(allUsers)
        } else {
            throw Error("Users not found")
        }
    } catch (error) {
        res.status(404).send({error: error.message})
    }
    
}

module.exports = {
    getUsersHandler
}