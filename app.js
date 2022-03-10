
require('dotenv').config()
const express = require('express');
const cors       = require("cors");
const helmet     = require('helmet');
const bodyParser = require('body-parser');

var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "WEB TO PDF"});
});

require('./app/routes/web2pdf.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT// || 9003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
