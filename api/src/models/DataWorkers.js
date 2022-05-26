const { Schema, model } = require('mongoose');

const Workers = Schema({

    title: {
        type: String,
        require: [true, 'title is required'],
        validate: {
            validator: (v) => /^[a-z]+$/i.test(v),
            message: props =>{
                if (props.value.length < 3){
                   return 'title accept minimun 3 letters';
                } else {
                   return 'title only accept letters';
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
    
    // languages (Array(strings))
    // skills (Array(strings)) // Habilidades

    pricePerHour: {
        type: Number
    },

    workExperience: ({

     company: {
        type: String,
        require: [true, "Company is required"]
    },
     position: {
        type: String,
        require: [true, "Position is required"]
    },
    //  start: (string - date) // Opcional
    //  end: (string - date) // Opcional - con posibilidad de actualmente trabajando

     description: {
        type: String,
        require: [true, "description is required"]
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
                        return 'Category name accept minimun 3 letters';
                    } else {
                        return 'Category title only accept letters';
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