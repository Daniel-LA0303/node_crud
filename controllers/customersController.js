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
        next();
    }
}

//10. muestra todos los clientes
exports.getCustomers = async(req, res, next) => {

    try {
        const customers = await Customers.find({});
        res.json(customers)
    } catch (error) {   
        next();
    }
}

//12. muestra un cliente por su id
exports.getOneCustomer = async(req, res, next) => {
    try {
        const customer = await Customers.findById(req.params.id);
        //mostrar el cliente 
        res.json(customer);
        
    } catch (error) {
        res.json({mensaje: 'Ese Cliente no existe'});
        next();
    }
}
//14. actualiza un ciente por su id
exports.updateCustomer = async(req, res, next) => {
    try {
        const customer = await Customers.findOneAndUpdate(
            {__id : req.params.__id}, 
            req.body, 
            {new: true}
        );
        res.json(customer);
    } catch (error) {
        next();
    }
}
//16. eliminar un cliente por id
exports.deleteCustomer = async(req, res, next) => {
    try {
        await Customers.findOneAndDelete(
            {__id : req.params.__id}
        )
        res.json({mensaje: 'El cliente se ha eliminado'})
    } catch (error) {
        next();
    }
}

