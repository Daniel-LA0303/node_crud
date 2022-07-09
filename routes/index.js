const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customersController');


module.exports = function(){

    //6. Agrega nuevos clientes via Post
    router.post('/customers', 
            customersController.newCustomer);

    //9. obtener clientes
    router.get('/customers/getAll',
        customersController.getCustomers);

    //11. muestra un cliente por id
    router.get('/customers/:id',
        customersController.getOneCustomer);

    //13. Actualizar un cliente 
    router.put('/customers/:id', 
        customersController.updateCustomer);
    
    //15. eliminar un cliente por id
    router.delete('/customers/:id', 
        customersController.deleteCustomer);

    return router;
}