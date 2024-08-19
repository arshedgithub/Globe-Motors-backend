const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Supplier = sequelize.define('Supplier', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
        contact: DataTypes.INTEGER,
        landphone: DataTypes.INTEGER,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        supplierStatusId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genderId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    Supplier.associate = function (models) {
        Supplier.belongsTo(models.SupplierStatus, { foreignKey: 'supplierStatusId' });
        Supplier.belongsTo(models.Gender, { foreignKey: 'genderId' });
    }

    return Supplier;

}