const express = require('express');
const router = express.Router();

const WorkoutExercise = require('../models/workoutExercise');

router.post('/', async (req, res) => {
    try{
        const { sets, reps, heartRate, RPE} = req.body;
        const newWorkoutExercise = await WorkoutExercise.create({sets, reps, heartRate, RPE});
        res.status(201).json(newWorkoutExercise);
    }
    catch (error){
        res.status(500).json({error: 'Error creating user'});
    }
});

module.exports = router;