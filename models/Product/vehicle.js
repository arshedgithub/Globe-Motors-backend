const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Vehicle = sequelize.define('product_vehicle', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
    });

    Vehicle.associate = function (models) {
        Vehicle.hasMany(sequelize.define('products'));
    }
}