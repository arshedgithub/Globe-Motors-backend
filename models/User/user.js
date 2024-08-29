const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            required: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        contact: { type: DataTypes.STRING, allowNull: false },
    }, {
        tableName: 'user',
    });

    User.associate = function (models) {
        User.hasMany(models.Order, { foreignKey: 'orderId' });
    }

    return User;
};
