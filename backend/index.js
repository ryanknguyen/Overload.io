const sequelize = require('../config/database');
const User = require('../models/user') //change these paths

sequelize.sync({ force: true }).then(() => {
    console.log('Database synchronized with sequelize');

    //test creating a user
    User.create({name: 'Quan Phanguyen', email: 'plippity@berkeley.edu'})
        .then(user => console.log('User created:', user))
        .catch(err => console.error('Error creating user:', err));
}).catch(err => console.error('Error synchronizing database', err));

// need to make an addNewUser() function and tie it to the front-end
// to insert a new user into the User table whenever somebody signs up

