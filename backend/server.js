
// require is another word for 'import'
const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
const userProgressRouter = require('./routes/userProgressRoutes');
const workoutRouter = require('./routes/workoutRoutes');
const workoutExerciseRouter = require('./routes/WorkoutExerciseRoutes');
const exerciseRouter = require('./routes/exerciseRoutes');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/userProgress', userProgressRouter);
app.use('/api/exercise', exerciseRouter);
app.use('/api/workout', workoutRouter);
app.use('/api/workoutExercise', workoutExerciseRouter);


// route to test the server
app.get('/', (req, res) => {
    res.send("Hi! It's me from the backend ('server.js')")
});


if (process.env.NODE_ENV !== 'test'){
    app.listen(port, () => {
        console.log('Server is running on port ${port}')
    });
}
module.exports = app;
