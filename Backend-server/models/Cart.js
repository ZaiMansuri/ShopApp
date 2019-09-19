const mongoose = require('mongoose');
const users = require('./User');

const Schema = mongoose.Schema;

const Cart = new Schema({
    pimage: {
        type: String,
        required: true
    },
    sub_name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    userid: {
        type: Schema.Types.ObjectId,
        ref: users,
        required: true
    },
});

const cart = mongoose.model('tbl_cart', Cart);

module.exports = cart;
