var Order = require('./../models/Orders');
var User = require('./../models/User');

module.exports = {
    
    create: function(req, res) {
        User.findById(req.query.user_id, function(err, result){    //find the user
            if (err) {
                return res.status(500).send(err);
            } else {
                var order = {user: req.query.user_id, products: result.cart};
                Order.create(order, function(createErr, createResult){      //make an order
                    if (createErr) {
                        return res.status(500).send(createErr);
                    } else {
                        User.findByIdAndUpdate(req.query.user_id, {$set:{'cart': []}}, function(updateErr, updateResult){  //empty the cart
                            if (updateErr) {
                                return res.status(500).send(updateErr);
                            } else {
                                res.send(updateResult);
                            }
                        })
                    }
                })
            }
        })
    },
    
    read: function(req, res) {
        Order.find({user: req.query.user_id}).exec(function(err, result){
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(result);
            }
        })
    }
}