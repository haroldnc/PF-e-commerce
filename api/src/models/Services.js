const { Schema, model } = require('mongoose');


const Services = Schema({
   name: {
      type: String,
      require: true,
      validate: {
         validator: (v) => /^[a-zñáéíóú\s]{3,}$/i.test(v),
         message: props => {
            if (props.value.length < 3){
               return 'Service name accept minimun 3 letters';
            } else {
               return 'Service name only accept letters';
            }
         }
      }
   },
   img: {
      type: String,
      require: true,
      validate: v => /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
      message: props => `${props.value} is not valid url image`
   },
   category: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: 'Categories'
   }
});

Services.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Services', Services);