const mongoose =  require('mongoose');
require('dotenv').config({path: 'variables.env'});


//4.conectar db
const conectarDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://root:root@cluster0.odotr.mongodb.net/customers', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('db conectada');
    } catch (error) {
        console.log('hubo un error');
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;