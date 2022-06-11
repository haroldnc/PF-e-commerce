const { Schema, model} = require('mongoose');
var mongoose = require ("mongoose")
require ("mongoose-double")(mongoose)

const Favorites = Schema({ 
    idUser:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    idPublication:{
        type: Schema.Types.ObjectId,
        ref: "Publications"
    }
});

Favorites.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Favorites', Favorites);