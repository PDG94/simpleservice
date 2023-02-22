const {User} = require("../../db");

//updateUserInfo is placeholder code atm
const updateUserInfo = async ({id, name, username, userbio, profilepic}) => {
    await User.update({
        name, username, userbio, profilepic
    }, {
        where: {
            id:id,
        }
    });

    const userUpdated = await User.findByPk(id);

    return userUpdated;
}

module.exports = {updateUserInfo}