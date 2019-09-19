
var mongoose = require('mongoose');
var users = require('./users');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    userid: {
        type: Schema.Types.ObjectId,
        ref: users,
        required: true
    },
    addresstype: {
        type: String,
        default: "Residence"
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
         required: true
    },
    pincode: {
        type: Number,
        required: true
    }
}, { collection: 'tbl_address' });


const AddressModel = mongoose.model('Address', addressSchema);


module.exports =  AddressModel ;
