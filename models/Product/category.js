const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Category = sequelize.define('product_category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
    });

    Category.associate = function (models) {
        Category.hasMany(sequelize.define('products'));
        Category.hasMany(sequelize.define('product_subcategory'));
    }

    return Category;
}

