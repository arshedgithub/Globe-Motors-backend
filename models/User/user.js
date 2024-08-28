const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        contact: DataTypes.STRING
    }, {
        tableName: 'user',
    });


    User.associate = function (models) {
        User.hasMany(models.Order, { foreignKey: 'orderId' });
    }

    return User;
};
