const express = require('express');
const bodyParser = require('body-parser');
const apiRouter=require('./routes/api_route');

const app = express();

// Puerto por defecto
const port = process.env.PORT || 3000;

// Database Connection
require('./database/db');

// MIDDLEWERES
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas que comienzen con '/user' serán enviadas a apiRouter
app.use('/api', apiRouter);

// Comenzar servidor express
app.listen(port, () => {
    console.log(`Servidor iniciando en el puerto ${ port }`);
})