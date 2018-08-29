const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.get = async () => {
    let res = await Product.find({ active: true }, "title price slug");
    return res;
};

exports.getBySlug = async (slug) => {
    let res = await Product.findOne(
        { slug: slug, active: true },
        "title description price slug tags"
    );
    return res;
};

exports.getByTag = async (tag) => {
    let res = await Product.find(
        { tags: tag, active: true },
        "title description price slug tags"
    );
    return res;
};

exports.getById = async (id) => {
    let res = await Product.findById(id);
    return res;
};

exports.create = async (data) => {
    let product = new Product(data);
    await product.save();
};

exports.put = async (data, id) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
};

exports.delete = async (id) => {
    await Product.findOneAndRemove(id);
};
