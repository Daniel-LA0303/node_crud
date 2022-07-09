const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//5. modelo customers
const customersSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    tel: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    registerDate: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('customersAPI', customersSchema);
