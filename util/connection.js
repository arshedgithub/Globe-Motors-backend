const { Sequelize, DataTypes } = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectModule: mysql2,
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

// Import models
db.Brand = require('../models/Product/brand.js')(sequelize);
db.Product = require('../models/Product/product.js')(sequelize);
db.Category = require('../models/Product/category.js')(sequelize);
db.Subcategory = require('../models/Product/subcategory.js')(sequelize);
db.Origin = require('../models/Product/origin.js')(sequelize);
db.Vehicle = require('../models/Product/vehicle.js')(sequelize);
db.UseStatus = require('../models/Product/useStatus.js')(sequelize);
db.User = require('../models/User/user.js')(sequelize);
db.Order = require('../models/Order/order.js')(sequelize);
db.Orderitem = require('../models/Order/orderitem.js')(sequelize);

// Apply associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Sync database
sequelize.sync({ force: false })
  .then(() => console.log("Database synced successfully."))
  .catch(err => console.log(err));

module.exports = db;
