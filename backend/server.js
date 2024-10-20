
// require is another word for 'import'
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// route to test the server
app.get('/', (req, res) => {
    res.send("Hi! It's me from the backend ('server.js')")
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

