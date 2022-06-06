const { Schema, model } = require('mongoose');

const Suscriptions = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    v: {
       type: Number,
       select: false
    }
});

module.exports = model('Suscriptions', Suscriptions);