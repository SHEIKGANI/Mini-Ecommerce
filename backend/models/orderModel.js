const mongoose = require('mongoose');

const orderSchrma = new mongoose.Schema({
    cartItems: Array,
    amount : String,
    status : String,
    createdAt:Date
})

const orderModel = mongoose.model('Order', orderSchrma);

module.exports = orderModel;