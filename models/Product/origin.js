const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Origin = sequelize.define('product_origin', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
    });

    Origin.associate = function (models) {
        Origin.hasMany(sequelize.define('products'));
    }

}