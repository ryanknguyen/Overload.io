// PK = workout_id
// SK = user_id
// date

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Workout = sequelize.define('Workout', {
    workoutId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'userId'
        },
        onDelete: 'CASCADE'
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Workout;