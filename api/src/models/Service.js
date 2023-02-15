const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Service', {
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.TEXT,
        },
        description:{
            type: DataTypes.TEXT,
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        rating:{
            type: DataTypes.FLOAT
        },
        active:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        timestamps: false,
    })
}
