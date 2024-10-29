// PK = exercise_id
// exercise_name

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Exercise = sequelize.define('Exercise', {
    exerciseId: {
        type: DataTypes.INTEGER,
        auto_increment: true,
        primaryKey: true,
        allowNull: false
    },
    exerciseName: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Exercise;