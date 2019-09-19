const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Filter = new Schema({
    filter_id: {
        type: String,
        required: true
    },
    price: {
        type: String,  
       
      },
    detail: {
        type: String,  
        
    },  
    color:{
        type: String,  
       
    },
    model:{
        type: String,  
        
    },
    subcat_id:{
        type: String,  
        required: true
    }

    },{
        collection: 'tbl_filter'
    });

module.exports = mongoose.model('tbl_filter', Filter);