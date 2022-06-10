const { Schema, model} = require('mongoose');
var mongoose = require ("mongoose")
require ("mongoose-double")(mongoose)


const DataWorkers = Schema({

    title: {
        type: String,
        /*require: [true, 'Position or Category is required'],
        validate: {
            validator: (v) => /^[a-záéíóúñ\s]+$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'Position or Category accept minimun 3 letters';
                } else {
                   return 'Position or Category only accept letters';
                }
             }
         },*/
        default: ""
    },
    aboutMe: {
        type: String,
        //require: [true, "AboutMe is required"]
        default: ""
    },
    textInfo: {
        type: String,
        //require: [true, "Information is required"]
        default: ""
    },
    
    languages: [{
        name: {
            type: String,
            validate: {
                validator: (v) => /^[a-záéíóúñ\s]+$/i.test(v),
                message: props =>{
                    if (props.value.length < 3){
                        return 'Languages accept minimun 3 letters';
                    } else {
                        return 'Languages only accept letters';
                    }
                }
            }
        },
        nivel: {
            type: String
        }
    }
],
    
    skills: [{
        type: String,
        // require: [true, 'Skills is required'],
        validate: {
            validator: (v) => /^[a-záéíóúñ\s]+$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'Skills accept minimun 3 letters';
                } else {
                   return 'Skills only accept letters';
                }
             }
         }
    }
    ],

    pricePerHour: {
        type: Schema.Types.Double,
        default: 0
    },
    p_image:{
        type: String,
        default: "https://media.istockphoto.com/photos/programmer-controlling-the-statistics-of-the-site-picture-id1139938843?k=20&m=1139938843&s=612x612&w=0&h=nJSMJEvTGin4vsBZpTAmpFgE_-y5J-mPTzRAZ03lCjk="
    },

    workExperience: [{

        company: {
           type: String,
           // require: [true, "Name Company is required"]
       },
        position: {
           type: String,
           // require: [true, "Position is required"]
       },
       //  start: (string - date) // Opcional
       //  end: (string - date) // Opcional 
   
        description: {
           type: String,
           // require: [true, "Description is required"]
       }
    }
    ],

    certifications:[{

        title: {
                type: String,
                // require: true,
                validate: {
                validator: (v) => /^[a-zñáéíóú\s]{3,}$/i.test(v),
                message: props => {
                    if (props.value.length < 3){
                        return 'Category Title accept minimun 3 letters';
                    } else {
                        return 'Category Title only accept letters';
                    }
                }
                }
            
            },
        
        img: {
            type: String,
            // require: true,
            validate: v => /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
            message: props => `${props.value} is not valid url image`
        }
    }
    ],
    dni: {
        type: String,
        require: [true, 'DNI number is required'],
    },
    phone: {
        type: String,
        require: [true, 'Phone number is required'],
        validate: {
            validator: (v) => /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i.test(v),
            message: props => `Phone number is not valid`
        }
    },
    web: {
        type: String,
        /*validate: {
            validator: (v) => /^(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i.test(v),
            message: props => `Web is not valid`
        },*/
        default: ""
    },
    linkedin: {
        type: String,
        default: ""
    },
    score: {
        type: Schema.Types.Double,
        default: 0
    },
    subscribed: {
        type: Boolean,
        default: false
    },
    subscription_type: {
        type: Schema.Types.ObjectId,
        ref: 'Subscriptions'
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = model('DataWorkers',DataWorkers );
