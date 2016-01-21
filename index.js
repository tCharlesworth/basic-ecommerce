var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var productsCtrl = require('./controllers/productsCtrl');
var cartCtrl = require('./controllers/cartCtrl');
var orderCtrl = require('./controllers/orderCtrl');
var port = 3006;

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

var mongoUri = "mongodb://localhost:27017/ecommerce"
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log("Successfully connected to mongodb");
})

app.post('/products', productsCtrl.create);
app.get('/products', productsCtrl.read);
app.put('/products/:id', productsCtrl.update);
app.delete('/products/:id', productsCtrl.delete);

app.post('/api/order', orderCtrl.create);
app.get('/api/order', orderCtrl.read);
app.post('/api/cart', cartCtrl.create);
app.put('/api/cart', cartCtrl.update);

app.listen(port, function(){
    console.log('listening on port ' + port);
})
