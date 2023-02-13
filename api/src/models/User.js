const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('User', {
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullname:{
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.surname}, ${this.name}`;
              },
              set(value) {
                throw new Error('Do not try to set the `fullName` value!');
              }
        },
        profilepic:{
            type: DataTypes.TEXT,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        active:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        timestamps: false,
    })
}