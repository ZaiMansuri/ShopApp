const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Inventory = new Schema({
    inventory_id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date:{
        type:Date,
        required:true
    },
    subcategory_name: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('tbl_inventory', Inventory);
