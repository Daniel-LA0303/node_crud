const express = require('express');
const routes = require('./routes');

const conectarDB = require('./config/db');

//cors permite que un cliente se conecte a unservidor
const cors = require('cors');
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
    origin : (origin, callback) => {
        // console.log(origin);
        //revisr si la peticon viene de un servidor que esta en whitelist
        const existe = whitelist.some(dominio => dominio === origin);

        if(existe){
            callback(null, true);
        }else{
            callback(new Error('No permitido por CORS'));
        }
    }
}

//1. crear el servidor
const app = express();

conectarDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended : true}));



//3. rutas de la app
app.use('/', routes());
app.get('/', (req, res)=> {
    res.json({message: 'hello form rest api node, mongo'});
});

//2. port 
const PORT = process.env.PORT || 3000;
// server
app.listen(PORT, () => {
    console.log('SERVE ', PORT);
});