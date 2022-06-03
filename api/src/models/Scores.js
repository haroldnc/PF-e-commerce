const { Schema, model} = require('mongoose');
var mongoose = require ("mongoose")
require ("mongoose-double")(mongoose)

const Scoremodel = Schema({
  title: {
      type: String,
      required: [true, "falta title"],
    },
  message: {
      type: String,
      required: [true, "falta message"],
    },
    score: {
      type: Schema.Types.Double,
      ref: "Publication",
    
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: "Publication"
    },
})
Scoremodel.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});