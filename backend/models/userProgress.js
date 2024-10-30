// PK = progress_id
// SK = user_id
// body weight
// date

const {DataTypes} = require('sequelize');
const sequelize = require('../../config/database');

const UserProgress = sequelize.define('UserProgress', {
    progressId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'userId'
        },
        onDelete: 'CASCADE'
    },
    bodyWeight:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = UserProgress;