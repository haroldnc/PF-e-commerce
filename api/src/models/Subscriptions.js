const { Schema, model } = require('mongoose');

const Subscriptions = Schema({
    name: {
        type: String
    },
    priceId: {
        type: String
    },
    __v: {
       type: Number,
       select: false
    }
});

module.exports = model('Subscriptions', Subscriptions);