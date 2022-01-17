const express = require('express');

app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// routes
let mainRoute = require('./routes/main');


const port = 8092;

app.listen(port, ()=> {
    console.log(`Running on ${port}`)
})