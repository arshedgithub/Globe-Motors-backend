const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Customer = sequelize.define('Customer', {
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
        genderId: DataTypes.INTEGER,
        customerStatusId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genderId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    Customer.associate = function (models) {
        Customer.belongsTo(models.CustomerStatus, { foreignKey: 'customerStatusId' });
        Customer.belongsTo(models.Gender, { foreignKey: 'genderId' });
    }

    return Customer;

}