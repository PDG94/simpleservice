const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Card",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input the user's name",
          },
          notEmpty: {
            args: true,
            msg: "Please don't input an empty string",
          },
        },
      },
      userimage: {
        type: DataTypes.TEXT,
        validate:{
            notEmpty: {
                args: true,
                msg: "Please don't input an empty string",
              },
            isUrl:{
                args: true,
                msg:"Please input a valid url format"
            }
        }
      },
      description: {
        type: DataTypes.TEXT,
      },
      servicename:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input the services name",
          },
          notEmpty: {
            args: true,
            msg: "Please don't input an empty string",
          },
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate:{
            notNull:{
                msg:"Please input the service price"
            }
        }
      },
      rating:{
        type: DataTypes.FLOAT
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};