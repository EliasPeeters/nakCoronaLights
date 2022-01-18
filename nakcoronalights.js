const express = require('express');
const getCredentials = require('./getCredentials');
const mysqlSetup = require('./mysqlSetup');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');

app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

credentials = getCredentials.getCredentials();
connection = mysqlSetup.getConnection();

// routes
let mainRoute = require('./routes/main');
let impressumRoute = require('./routes/impressum');
let downloadRoute = require('./routes/download');
let loginRoute = require('./routes/login');
let dashboardRoute = require('./routes/dashboard');


const port = 8092;

app.listen(port, ()=> {
    console.log(`Running on ${port}`)
})