var mongoose = require('mongoose');
var schema = mongoose.Schema;
var productSchema = require('./Products')

var orderSchema = mongoose.Schema({        
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [productSchema]
})

module.exports = mongoose.model('orders', orderSchema); 