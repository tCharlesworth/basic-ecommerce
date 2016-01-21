var mongoose = require('mongoose');

var productSchema = mongoose.Schema({        
    name: {type: 'String', unique: true, required: true, index: true},
    description: {type: 'String', required: true},
    price: {type: 'Number', required: true, min: 0}
})

module.exports = mongoose.model('products', productSchema); 