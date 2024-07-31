const { Sequelize, DataTypes } = require('sequelize');
const Product = require('../models/Product/Product.js');
const brand = require('../models/Product/brand.js');
const category = require('../models/Product/category.js');
const subcategroy = require('../models/Product/subcategroy.js');
const useStatus = require('../models/Product/useStatus.js');
const origin = require('../models/Product/origin.js');
const vehicle = require('../models/Product/vehicle.js');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  // pool: {
  //   max: 10,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
});

sequelize.authenticate().then(() => {
  console.log('Database connection established successfully.');
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = Product(sequelize);
db.brand = brand(sequelize);
db.category = category(sequelize);
db.subcategroy = subcategroy(sequelize);
db.useStatus = useStatus(sequelize);
db.origin = origin(sequelize);
db.vehicle = vehicle(sequelize);

// recreating database tables
sequelize.sync({ force: true })
.then(() => console.log("Database synced successfully."))
.catch(err => console.log(err));

module.exports = sequelize;