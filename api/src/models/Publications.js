const { Schema, model} = require('mongoose');
var mongoose = require ("mongoose")
require ("mongoose-double")(mongoose)


const Publications = Schema({
    title:{
        type: String,
        require: [true, "title is required"]
    },
    description:{
        type: String,
        require: [true, "description is required"]
    },
   
    price:{
        type: Schema.Types.Double,
        require: [true, "description is required"]
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    service:{
        type: Schema.Types.ObjectId,
        ref: "Services"
    },
    img:{
        type: String
    },
    score:{
        type: Schema.Types.Double
    },

})

Publications.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Publications', Publications);