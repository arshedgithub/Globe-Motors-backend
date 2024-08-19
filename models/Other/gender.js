const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Gender = sequelize.define('Gender', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
    });

    Gender.associate = function (models) {
        Gender.hasMany(models.Customer, { foreignKey: 'genderId' });
    }

    return Gender;

}