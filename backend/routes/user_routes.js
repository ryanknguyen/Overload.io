const express = require('express');
const router = express.Router();
//import user model
const User = require('../models/user');

// define the route for the User model
router.post('/', async(req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = await User.create({ name, email });
        res.status(201).json(newUser);
    } catch (error){
        res.status(500).json({ error: 'Error creating user' });
    }
})

// GET route for retrieving all users
router.get('/', async (req, res) => {
    try{
        const users = await User.findAll();
        res.json(users);
    } catch (error){
        res.status(500).json({ error: 'Error retrieving users'});
    }
});

module.exports = router;