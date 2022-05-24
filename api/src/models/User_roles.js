const { Schema, model } = require('mongoose');


const User_roles = Schema({
    name: {
        type: String,
        validate: {
            validator: (v) =>/^[a-zñáéíóú\s]{3,}$/i.test(v),
            message: props => {
               if (props.value.length < 3){
                  return 'Role name accept minimun 3 letters';
               } else {
                  return 'Role name only accept letters';
               }
            }
        }
    }
});

User_roles.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('User_roles', User_roles);