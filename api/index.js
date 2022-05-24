require('dotenv').config(); //para usar enviroment variables
const morgan = require ('morgan');
const cookieParser = require('cookie-parser');
const routes = require ('./src/routes/index.js');
//connect con db
const express = require ('express');
const server = express();
const { dbConnection } = require('./src/database/config'); 
var cors = require('cors')

dbConnection();

//settings

server.set('port', process.env.PORT || 4000);

//middlewares
server.use(morgan('dev'));
server.use(express.json());

server.use(cookieParser());
server.use(cors()) // cors para que se pueda hacer peticiones desde otro dominio 

server.use('/', routes);

//control de errores
server.use((err, req, res, next) => { 
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

server.listen(process.env.PORT, () => {
    console.log(`Server connected in port :${process.env.PORT}`);
});

