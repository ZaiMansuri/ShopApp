const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    category_id: {
        type: String,
        required: true
    },
    name: {
        type: String,  
        required: true
      },
    detail: {
        type: String,  
        required: true
    }  
    },{
        collection: 'tbl_categories'
    });

module.exports = mongoose.model('tbl_categories', Category);
