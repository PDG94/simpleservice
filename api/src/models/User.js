const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
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
          len: {
            args: [2, 255],
            msg: "Please use more than one character",
          },
        },
      },
      username: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      userbio: {
        type: DataTypes.TEXT,
      },
      profilepic: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please don't input an empty string",
          },
          isUrl: {
            args: true,
            msg: "Please input a valid url format",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
      // createdAt: true,
      // updatedAt: false,
    }
  );
};
