const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Role",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNotEmpty: {
            args: true,
            msg: "Please don't use an empty string"
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};