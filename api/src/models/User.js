const { Schema, model } = require('mongoose');

const User = Schema({
    username: {
        type: String,
        require: [true, 'Username is required'],
        validate: {
            validator: (v) => /^[a-z]{3,}$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'Role name accept minimun 3 letters';
                } else {
                   return 'First name only accept letters';
                }
             }
         }
    },
    firstName: {
        type: String,
        require: [true, 'First name is required'],
        validate: {
            validator: (v) => /^[a-záéíóúñ\s]{3,}$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'First name accept minimun 3 letters';
                } else {
                   return 'First name only accept letters';
                }
             }
         }
    },
    lastName: {
        type: String,
        require: [true, 'Last name is required'],
        validate: {
            validator: (v) => /^[a-záéíóúñ\s]{3,}$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'Last name accept minimun 3 letters';
                } else {
                   return 'Last name only accept letters';
                }
             }
        }
    },
    email: {
        type: String,
        require: [true, 'User mail is required'],
        validate: {
            validator: (v) => /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i.test(v),
            message: props => `email is not valid`
        }
    },
        /*  Password valida Minimo 8 caracteres 
        Maximo 15
        Al menos una letra mayuscula
        Al menos una letra minuscula
        Al menos un digito
        No espacios en blanco
        Al menos 1 caracter especial*/
    password: {
        type: String,
        require: [true, 'Password is required'],
        /*validate: {
            validator: (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'Role name accept minimun 3 letters';
                } else {
                   return 'Password is not valid';
                };
            }
        }*/
    },
    image: {
        type: String,
        validate: v => /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
        message: props => `${props.value} is not valid url image`
    },
    user_role: {
        type: Schema.Types.ObjectId,
        ref: 'User_roles'  
    },    
    punctuation: {
        type: Number,
        default: 0
    },
    // estado del usuario confirmacion de mail? Evaluar si queda o no.
    confirm_email: {
        type: Boolean,
        default: false
    }
});

// schema methods for user model
User.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model('User', User);