const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//5. modelo customers
const customersSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    tel: {
        type: String,
    },
    address: {
        type: String,
    },
    kind:{
        type: String,
    },
    category: {
        type: String,
    },
    registerDate: {
        type: String,
    },
    __id: {
        type: String,
    }
});

module.exports = mongoose.model('customersAPI', customersSchema);
