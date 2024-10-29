const express = require('express');
const router = express.Router();
const UserProgress = require('../models/userProgress');
const { Op } = require('sequelize'); // sqlize operators

router.get('/:userId/exercise/:exerciseId', async (req, res) => {
    const {userId, exerciseId} = req.params;
    const { startDate, endDate} = req.query;

    try{
        //query the db to retrieve progress based on user, exericse, and date range
        const progressData = await UserProgress.findAll({
            where: {
                userId: userId,
                exerciseId: exerciseId,
                date: {
                    [Op.between]: [startDate, endDate]
                }
            },
            order: [['date', 'ASC']] //sort by date
        });

        res.json(progressData);
    } catch (error){
        res.status(500).json({ error: 'Error retrieving progress data' });
    }
});

module.exports = router;