const express = require('express');
const router = express.Router();

//this API route is meant to manipulate specific exercise entries within a single workout entry
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

router.delete('/:workoutId/:exerciseId', async(req,res) =>{
    try{
        const {workoutId, exerciseId} = req.body;
        const deleted = await WorkoutExercise.destroy({where: {workoutId, exerciseId}});

        if (deleted){
            res.status(200).json({message: 'workoutExercise entry was successfully deleted'});
        }
        else{
            res.status(404).josn({message: 'workoutExercise entry not found and failed to delete'});
        }
    }catch (error){
        res.status(500).json({error: 'An error occurred on our end while attempting to delete the workoutExercise entry'})
    }
});

// router.put(':/workoutId/:exerciseId', async(req, res) =>{
//     const{workoutId, exerciseId} = req.params;
//     const{sets, reps, heartRate, RPE} = req.params;

//     try{
//         const [update] = await WorkoutExercise.update(
//             {}
//         )
//     }
// })

module.exports = router;