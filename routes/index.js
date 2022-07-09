const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customersController');



module.exports = function(){

    //6. Agrega nuevos clientes via Post
    router.post('/customers', 
            customersController.newCustomer);
 
    return router;
}