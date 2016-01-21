var mongoose = require('mongoose');
var schema = mongoose.Schema;
var cartSchema = require('./Carts')

var userSchema = mongoose.Schema({                
    email: {type: 'String', lowercase: true},
    username: {type: 'String',lowercase: true, maxlength: 20},
    cart: [cartSchema]
})

module.exports = mongoose.model('User', userSchema); 