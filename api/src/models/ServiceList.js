const {DataTypes, UUIDV4} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("ServiceList",{
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        active:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
}