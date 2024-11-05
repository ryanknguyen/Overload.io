const express = require('express');
const router = express.Router();

//this API route is meant to manipulate whole workout entries
const Workout = require('../models/workout');

// create a new workout
router.post('/', async(req, res) =>{
    try{
        const {userId, date} = req.body;
        const newWorkout = await Workout.create({userId, date});
        res.status(201).json(newWorkout);

    } catch(error){
        res.status(500).json({message: 'Something happened on our end while trying to create a new Workout entry.'});
    }
})

// delete an entire workout
router.delete('/:workoutId', async(req,res) =>{
    try{
        const {workoutId} = req.body;
        const deleted = await Workout.destroy({where: {workoutId}});

        if (deleted){
            res.status(200).json({message: 'Successfully deleted Workout entry.'});
        }
        else{
            res.status(404).json({message: 'Error deleting Workout entry. Please check input.'});
        }
    } catch(error){
        res.status(500).json({message: 'Something happened on our end while trying to delete a Workout entry :( .'})
    }
})

module.exports = router;