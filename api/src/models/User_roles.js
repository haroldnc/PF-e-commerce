const { Schema, model } = require('mongoose');


const User_roles = Schema({
    name: {
        type: String,
    }
});

User_type.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('User_model', User_model);