const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database'); //change the path


const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}); 

module.exports = User;