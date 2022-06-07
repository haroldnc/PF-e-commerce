const { Schema, model } = require('mongoose');

const Subscriptions = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    __v: {
       type: Number,
       select: false
    }
});

module.exports = model('Subscriptions', Subscriptions);