const mongoose = require("mongoose");
const Order = mongoose.model("Order");

exports.get = async () => {
    let res = await Order.find({}, "number customer items status")
        .populate("customer", "name")
        .populate("items.product", "title price");
    return res;
};

exports.create = async (data) => {
    let order = new Order(data);
    await order.save();
};
