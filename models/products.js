const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('products', userSchema);