const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

require('./Database/db');
const StudentRoute = require('./StudentRoute')

const port = 8000

app.use(express.json());

app.use('/students',StudentRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})