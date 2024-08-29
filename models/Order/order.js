const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date: DataTypes.DATE,
        quantity: DataTypes.DECIMAL(12, 2),
        total: DataTypes.DECIMAL(12, 2),
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'order',
    });

    Order.associate = function (models) {
        Order.belongsTo(models.User, { foreignKey: 'userId' });
        Order.belongsTo(models.Product, { foreignKey: 'productId' });
    }

    return Order;
};
