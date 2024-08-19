const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const CustomerStatus = sequelize.define('CustomerStatus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
    },{
        timestamps: false,
        tableName: 'customer_status'
    });

    CustomerStatus.associate = function (models) {
        CustomerStatus.hasMany(models.Customer, { foreignKey: 'customerStatusId' });
    }

    return CustomerStatus;

}