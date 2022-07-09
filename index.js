const express = require('express');
const routes = require('./routes');
const mongoose =  require('mongoose');

const conectarDB = require('./config/db');

//cors permite que un cliente se conecte a unservidor
const cors = require('cors');

//1. crear el servidor
const app = express();

conectarDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));



//3. rutas de la app
app.use('/', routes());
app.get('/', (req, res)=> {
    res.json({message: 'hello form rest api node, mongo'})
});

//2. port 
const PORT = process.env.PORT || 8080;
// server
app.listen(PORT, () => {
    console.log('SERVE ', PORT);
});