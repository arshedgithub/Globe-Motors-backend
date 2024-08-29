const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    review: DataTypes.TEXT,
    offer: DataTypes.DECIMAL(4, 2),
    cost: DataTypes.DECIMAL(10, 2),
    price: DataTypes.DECIMAL(10, 2),
    tax: DataTypes.DECIMAL(6, 2),
    stock: DataTypes.INTEGER,
    stock_limit_min: DataTypes.INTEGER,
    stock_limit_max: DataTypes.INTEGER,
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    originId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    useStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'products',
  });

  Product.associate = function (models) {
    Product.belongsTo(models.Brand, { foreignKey: 'brandId'});
    Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
    Product.belongsTo(models.Subcategory, { foreignKey: 'subcategoryId' });
    Product.belongsTo(models.Origin, { foreignKey: 'originId' });
    Product.belongsTo(models.Vehicle, { foreignKey: 'vehicleId' });
    Product.belongsTo(models.UseStatus, { foreignKey: 'useStatusId' });
    Product.hasMany(models.Order, { foreignKey: 'productId' });
  }

  return Product;
};
