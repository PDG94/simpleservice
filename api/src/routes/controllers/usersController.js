const {User} = require("../../db")


const getAllUsers = async() =>{
    return await User.findAll()
}

const createUser = async({name, surname,profilepic=null, email, password}) =>{
    const newUser = await User.create({
        name,
        surname,
        email,
        password

    })
    return newUser
}

module.exports = {
    getAllUsers,
    createUser
}