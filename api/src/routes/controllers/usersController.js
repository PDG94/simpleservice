const {User, Card} = require("../../db")


const getAllUsers = async() =>{
    return await User.findAll({
        where:{
            active: true
        },
    })
}

const createUser = async({user_id, name, username,profilepic, email}) =>{
    const newUser = await User.create({
        id: user_id,
        name,
        username,
        profilepic,
        email,
    })
    return newUser
}

module.exports = {
    getAllUsers,
    createUser,
}