const { Schema, model} = require('mongoose');
var mongoose = require ("mongoose")

const Hiring = Schema({ 
    idUser:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    idWorker:{
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    idPublication:{
        type: Schema.Types.ObjectId,
        ref: "Publications"
    },
    status:{
        type: Boolean,
        default: false  
    }
});

Hiring.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Hiring', Hiring);