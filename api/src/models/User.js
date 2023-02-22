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
      username:{
        type: DataTypes.STRING,
      },
      userbio:{
        type: DataTypes.TEXT,
      },
      // surname: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     notNull: {
      //       msg: "Please input the user's surname",
      //     },
      //     notEmpty: {
      //       args: true,
      //       msg: "Please don't input an empty string",
      //     },
      //     len: {
      //       args: [2, 255],
      //       msg: "Please use more than one character",
      //     },
      //   },
      // },
      // fullname: {
      //   type: DataTypes.VIRTUAL,
      //   get() {
      //     return `${this.surname}, ${this.name}`;
      //   },
      //   set() {
      //     throw new Error("Do not try to set the `fullname` value!");
      //   },
      // },
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
        validate: {
          notNull: {
            msg: "Please input an email",
          },
          isEmail: {
            args: true,
            msg: "Please input a valid email format",
          },
        },
      },
      // password: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     is: {
      //       args: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
      //       msg: "Password must have a minimum of 8 characters, must have at least one uppercase and lowercase letter(s) and must have at least one number",
      //     },
      //   },
      // },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isAdmin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    {
      timestamps: false,
    }
  );
};
