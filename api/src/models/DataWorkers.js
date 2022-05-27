const { Schema, model } = require('mongoose-double')('mongoose');

const Workers = Schema({

    title: {
        type: String,
        require: [true, 'Position or Category is required'],
        validate: {
            validator: (v) => /^[a-z]+$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'Position or Category accept minimun 3 letters';
                } else {
                   return 'Position or Category only accept letters';
                }
             }
         }
    },
    aboutMe: {
        type: String,
        require: [true, "AboutMe is required"]
    },
    textInfo: {
        type: String,
        require: [true, "Information is required"]
    },
    
    languages: {
        type: String,
        require: [true, 'Languages is required'],
        validate: {
            validator: (v) => /^[a-z]+$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'Languages accept minimun 3 letters';
                } else {
                   return 'Languages only accept letters';
                }
             }
         }
    },
    
    skills: {
        type: String,
        require: [true, 'Skills is required'],
        validate: {
            validator: (v) => /^[a-z]+$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'Skills accept minimun 3 letters';
                } else {
                   return 'Skills only accept letters';
                }
             }
         }
    },

    pricePerHour: {
        type: Schema.Types.Double
    },

    workExperience: ({

     company: {
        type: String,
        require: [true, "Name Company is required"]
    },
     position: {
        type: String,
        require: [true, "Position is required"]
    },
    //  start: (string - date) // Opcional
    //  end: (string - date) // Opcional 

     description: {
        type: String,
        require: [true, "Description is required"]
    }
    }),

    certifications :({

        title: {
                type: String,
                require: true,
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
            require: true,
            validate: v => /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
            message: props => `${props.value} is not valid url image`
            }
        })
})

module.exports = model('Workers',Workers );