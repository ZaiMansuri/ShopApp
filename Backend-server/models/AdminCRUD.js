const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Category
let SubCategory = new Schema({
  subcat_no: {
    type: String,
    required: true
  },
  sub_name: {
    type: String,
    required: true
  },
  description: {
    type: String,  
    required: true
  },
  price: {
    type: String,  
    required: true
  },
  pimage:{
  
    type:  String,
    required: true
  },
  category_name: {
    type: String,  
    required: true
  },
  qty: {
    type: String,  
    required: true
  },
},{
    collection: 'tbl_subcategory'
});

module.exports = mongoose.model('tbl_subcategory', SubCategory);