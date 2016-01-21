var User = require('./../models/User');  //cartschema is already embedded in the user model, this is the model we're changing

module.exports = {
    
    create: function(req, res) {
        var newCart = {product: req.body._id, quantity: req.body.qty};
        User.findByIdAndUpdate(req.query.user_id, {$push:{'cart': newCart}}, function(err, result){
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(result);
            }
        })
    
    },
    
    update: function(req, res) {
        res.send();
    }
}