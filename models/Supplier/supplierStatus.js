const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const SupplierStatus = sequelize.define('SupplierStatus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
    });

    SupplierStatus.associate = function (models) {
        SupplierStatus.hasMany(models.Supplier, { foreignKey: 'supplierStatusId' });
    }

    return SupplierStatus;

}