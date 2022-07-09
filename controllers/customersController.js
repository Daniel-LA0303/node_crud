const Customers = require('../models/customersModel');

//7. agrega un nuevo cliente
exports.newCustomer = async (req, res, next) => {
    const customer = new Customers(req.body);
    
    try {
        //almacenar el registro
        await customer.save();
        res.json({mensaje: 'Se agrego un nuevo cliente'});
    } catch (error) {
        //errores
        res.send(error);
        // console.log(error);
        next();
    }
}