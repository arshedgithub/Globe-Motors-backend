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
    });

    CustomerStatus.associate = function (models) {
        CustomerStatus.hasMany(models.CustomerStatus, { foreignKey: 'customerStatusId' });
    }

    return CustomerStatus;

}