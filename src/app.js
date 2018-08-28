const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// conectar com o mongoDB

mongoose.connect('mongodb://mongoDB:mongo01@ds133762.mlab.com:33762/mongo');

// carregar as Models

const Product = require('./models/product');

// carregar rotas
const router = express.Router();
const indexRoute = require('./routes/index-router');
const productRoute = require('./routes/product-router');

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;