const express = require('express');
const router = express.Router();

const Exercise = require('../models/exercise');

// the whole point of this API is to be able to add new exercises that aren't already offered to the User from the selection

// add a new exercise
router.post('/', async(req, res) => {
    try{
        const {exerciseId, exerciseName} = req.body;
        const newExercise = await Exercise.create({exerciseId, exerciseName})
        res.status(201).json(newExercise);
    }catch (error) {
        res.status(500).json({error: 'Error adding exercise, please double check your input'})
    }
})

router.delete('/:exerciseId', async(req, res) => {
    
    const {exerciseId} = req.params;
    try{
        const deleted = await Exercise.destroy({where: {exerciseId}});
        if (deleted){
            res.status(200).json({message: 'Exercise was successfully deleted'});
        }else{
            res.status(404).json({message: 'Exercise not found and was not deleted'});
        }
    }catch (error){
        res.status(500).json({error: 'An error occureed on our end while attempting to delete the exercise entry'});
    }
});

module.exports = router;