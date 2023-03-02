require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

//DB_NAME is the database name
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  Category, User, Role, Card, ServiceList, Fav
} = sequelize.models;

// Aca vendrian las relaciones

Category.hasMany(Card);
Card.belongsTo(Category);

Role.hasMany(User);
User.belongsTo(Role);


User.belongsToMany(Card, { through: "UserCard" });
Card.belongsToMany(User, { through: "UserCard" });


Category.hasMany(ServiceList);
ServiceList.belongsTo(Category);

//Favourites relations

User.hasMany(Fav);
Fav.belongsTo(User);

Card.hasMany(Fav);
Fav.belongsTo(Card);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
