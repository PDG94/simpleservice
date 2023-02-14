const {User} = require("../../db")


const getAllUsers = async() =>{
    return await User.findAll()
}

const createUser = async({name, surname,profilepic, email, password}) =>{
    const newUser = await User.create({
        name,
        surname,
        profilepic,
        email,
        password

    })
    return newUser
}

module.exports = {
    getAllUsers,
    createUser
}