const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Service",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input the service name",
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
      image: {
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
