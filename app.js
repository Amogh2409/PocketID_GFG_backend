const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/userRoutes');

app.use(bodyParser.json()); // This will parse the request body and make it available under req.body
app.use('/', UserRoutes);


module.exports = app;