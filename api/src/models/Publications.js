const { Schema, model,Types } = require('mongoose');


const Publications = Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        require: [true, "title is required"]
    },
    description:{
        type: String,
        require: [true, "description is required"]
    },
    categories:{
        type: [Schema.Types.ObjectId],
        ref: "Categories"
    },    
    price:{
        type: Number,
        require: [true, "description is required"]
    },
    user:{
        type: [Schema.Types.ObjectId],
        ref: "User"
    },
    service:{
        type: [Schema.Types.ObjectId],
        ref: "Services"
    }
})

Publications.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Publications', Publications);