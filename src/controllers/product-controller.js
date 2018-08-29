const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save()
        .then(() => {
            res.status(200).send({
                message: "Dados salvos com sucesso!"
            });
        })
        .catch(error => {
            res.status(400).send({
                message: "Falha ao cadstrar o produto!",
                data: error
            });
        });
};

exports.get = (req, res, next) => {
    Product.find({ active: true }, "title price slug")
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

exports.getBySlug = (req, res, next) => {
    Product.findOne(
        { slug: req.params.slug, active: true },
        "title description price slug tags"
    )
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

exports.getByTag = (req, res, next) => {
    Product.find(
        { tags: req.params.tag, active: true },
        "title description price slug tags"
    )
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

exports.getById = (req, res, next) => {
    Product.findById(req.params.id)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

exports.put = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug
        }
    })
        .then(result => {
            res.status(200).send({
                message: "Produto atualizado com sucesso!"
            });
        })
        .catch(err => {
            res.status(400).send({
                message: "Falha ao atualizar o produto",
                erro: err
            });
        });
};

exports.delete = (req, res, next) => {
    Product.findOneAndRemove(req.params.id)
        .then(result => {
            res.status(200).send({
                message: "Produto removido com sucesso!"
            });
        })
        .catch(err => {
            res.status(400).send({
                message: "Falha ao remover o produto",
                erro: err
            });
        });
};
