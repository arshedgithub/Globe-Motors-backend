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

// Product models
db.Brand = require('../models/Product/brand.js')(sequelize);
db.Product = require('../models/Product/product.js')(sequelize);
db.Category = require('../models/Product/category.js')(sequelize);
db.Subcategory = require('../models/Product/subcategory.js')(sequelize);
db.Origin = require('../models/Product/origin.js')(sequelize);
db.Vehicle = require('../models/Product/vehicle.js')(sequelize);
db.UseStatus = require('../models/Product/useStatus.js')(sequelize);

// Customer models
db.Customer = require('../models/Customer/customer.js')(sequelize);
db.CustomerStatus = require('../models/Customer/customerStatus.js')(sequelize);

// Supplier models
db.Supplier = require('../models/Supplier/supplier.js')(sequelize);
db.SupplierStatus = require('../models/Supplier/supplierStatus.js')(sequelize);

// other models
db.Gender = require('../models/Other/gender.js')(sequelize);

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
