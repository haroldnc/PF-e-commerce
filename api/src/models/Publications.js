const { Schema, model } = require('mongoose');


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
    }
})

Publication.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Publication', Publication);