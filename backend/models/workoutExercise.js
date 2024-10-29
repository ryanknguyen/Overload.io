//PK = workout_id
// PK = exercise_id
// sets
// reps
// heart rate
// rpe

const {DataTypes} = require('sequeilize');
const sequelize = require('../config/database');

const WorkoutExercise = sequelize.define('WorkoutExercise', {
    workoutId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    exerciseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    sets: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reps: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    heartRate: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    RPE: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = WorkoutExercise;