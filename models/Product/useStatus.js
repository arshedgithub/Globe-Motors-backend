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
    },{
        tableName: 'product_use_status',
        timestamps: false       
    });

    UseStatus.associate = function (models) {
        UseStatus.hasMany(models.Product, { foreignKey: 'useStatusId' });
    }

    return UseStatus;

}