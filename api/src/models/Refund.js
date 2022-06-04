const { Schema, model} = require('mongoose');
var mongoose = require ("mongoose")
require ("mongoose-double")(mongoose)

const Refund = Schema({
    amount:{
        type: Number,
        require: [true, "amount is required" ]
    },
    currency:{
        type: String,
        require: [true, "currency is requered"]
    },
    status: {
        type: String,
    },

})

module.exports = model('Refund', Refund);
