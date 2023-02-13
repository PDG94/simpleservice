require("dotenv").config();
const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
      database: PG_DATABASE,
      dialect: "postgres",
      host: PG_HOST,
      port: PG_PORT,
      username: PG_USER,
      password: PG_PASSWORD,
      pool: {
        max: 3,
        min: 1,
        idle: 10000,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
        keepAlive: true,
      },
      ssl: true,
    })
    : new Sequelize(
      `postgres:${PG_USER}:${PG_PASSWORD}@${PG_HOST}/${PG_DATABASE}`,
      { logging: false, native: false }
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
  Category, Service,
} = sequelize.models;

// Aca vendrian las relaciones

Category.hasMany(Service);
Service.belongsTo(Category);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};