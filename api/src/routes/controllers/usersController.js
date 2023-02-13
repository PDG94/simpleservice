const {User} = require("../../db")


const getAllUsers = async() =>{
    return await User.findAll()
}

module.exports = {
    getAllUsers
}