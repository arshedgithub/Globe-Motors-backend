const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false
        },
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
