const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Subcategory = sequelize.define('product_subcategory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Subcategory.associate = function (models) {
        Subcategory.hasMany(sequelize.define('products'));
        Subcategory.belongsTo(sequelize.define('product_category'));
    }

}