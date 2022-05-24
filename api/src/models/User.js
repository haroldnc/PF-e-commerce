const { Schema, model } = require('mongoose');

const User = Schema({
    username: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    user_type: {
            type: Schema.Types.ObjectId,
            ref: 'User_roles'  
    },
    phone: {
        type: String,
        require: true
    },
    web: {
        type: String
    },
    linkedin: {
        type: String 
    },
    // estado del usuario confirmacion de mail
    confirm_email: {
        type: Boolean,
        default: false
    }
    
});
//? schema methods for user model
UserSchema.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model('User', User);