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
        total: DataTypes.DECIMAL(12, 2),
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'order',
    });

    Order.associate = function (models) {
        Order.belongsTo(models.User, { foreignKey: 'userId' });
        Order.hasMany(models.Orderitem, { foreignKey: 'orderitemId' });
    }

    return User;
};
