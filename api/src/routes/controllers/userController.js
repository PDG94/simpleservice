const {User} = require("../../db");

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

const deleteUser = async ({id, active}) => {
    await User.update({
        active
    }, {
        where: {
            id:id,
        }
    });

    const userDeleted = await User.findByPk(id);

    return userDeleted;
}

module.exports = {updateUserInfo, deleteUser}