
// require is another word for 'import'
const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', usersRouter);

// route to test the server
app.get('/', (req, res) => {
    res.send("Hi! It's me from the backend ('server.js')")
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

