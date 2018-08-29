const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

// conectar com o mongoDB
mongoose.connect("mongodb://127.0.0.1:27017");

// carregar as Models
const Product = require("./models/product");
const Customer = require("./models/customer");
const Order = require("./models/order");

// carregar rotas
const indexRoute = require("./routes/index-router");
const productRoute = require("./routes/product-router");
const customerRoute = require("./routes/customer-router");

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customer", customerRoute);

module.exports = app;
