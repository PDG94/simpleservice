const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Category', {
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                  msg: "Please input the category name",
                },
                notEmpty: {
                  args: true,
                  msg: "Please don't input an empty string",
                },
                len: {
                  args: [3, 255],
                  msg: "Please use more than two characters",
                },
              },
        },        
        description:{
            type: DataTypes.TEXT,
        },        
        active:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        timestamps: false,
    })
}