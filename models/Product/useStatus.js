const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const UseStatus = sequelize.define('product_use_status', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
    });

    UseStatus.associate = function (models) {
        UseStatus.hasMany(sequelize.define('products'));
    }

}