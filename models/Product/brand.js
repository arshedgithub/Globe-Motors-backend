const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    
    const Brand = sequelize.define('product_brand', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING
    });

    Brand.associate = function (models) {
        Brand.hasMany(models.Product, { foreignKey: 'brandId' });
    }

    return Brand;
};
