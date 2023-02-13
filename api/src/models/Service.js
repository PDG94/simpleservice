const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Service', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
        },
        image:{
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.FLOAT,
        },
        active:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    })
}