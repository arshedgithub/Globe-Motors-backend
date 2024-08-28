const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Orderitem = sequelize.define('Orderitem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: DataTypes.DECIMAL(12, 2),
        price: DataTypes.DECIMAL(12, 2),
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'orderitem',
    });

    Orderitem.associate = function (models) {
        Orderitem.belongsTo(models.Order, { foreignKey: 'orderId' });
        Orderitem.belongsTo(models.Product, { foreignKey: 'productId' });
    }

    return Orderitem;
};
