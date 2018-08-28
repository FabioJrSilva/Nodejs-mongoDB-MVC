const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// carregar rotas
const router = express.Router();
const indexRoute = require('./routes/index-router');
const productRoute = require('./routes/product-router');

app.use('/', indexRoute);
app.use('/product', productRoute);

module.exports = app;