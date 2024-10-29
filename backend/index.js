const sequelize = require('../config/database');
const User = require('./models/user')
const UserProgress = require('./models/userProgress');
const Workout = require('./models/workout');
const WorkoutExercise = require('.//models/workoutExercises');
const Exercise = require('./model/exercise');

sequelize.sync({ force: true }).then(() => {
    console.log('Database synchronized with sequelize');

    //test creating a user
    User.create({name: 'Quan Phanguyen', email: 'plippity@berkeley.edu'})
        .then(user => console.log('User created:', user))
        .catch(err => console.error('Error creating user:', err));
}).catch(err => console.error('Error synchronizing database', err));

// model relationship definitions w/ sqlize foreign key
User.hasMany(UserProgress, { foreignKey: 'user_id'});
UserProgress.belongsTo(User, {foreignKey: 'user_id'});

User.hasMany(Workout, {foreignKey: 'userId'});
Workout.belongsTo(User, {foreignKey: 'userId'});

Workout.hasMany(WorkoutExercise, {foreignKey: 'workoutId'});
Exercise.hasMany(WorkoutExercise, {foreignKey: 'exerciseId'});

WorkoutExercise.belongsTo(Workout, {foreignKey: 'workoutId'});
WorkoutExercise.belongsTo(Workout, {foreignKey: 'exerciseId'});


