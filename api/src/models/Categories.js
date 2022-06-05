const { Schema, model } = require('mongoose');

const Categories = Schema({
   name: {
      type: String,
      require: true,
      validate: {
         validator: (v) => /^[a-zñáéíóú\s]{3,}$/i.test(v),
         message: props => {
            if (props.value.length < 3){
               return 'Category name accept minimun 3 letters';
            } else {
               return 'Category name only accept letters';
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
   phrase: {
      type: String,
      require: true
   },
   __v: {
      type: Number,
      select: false
   },
   id: {
      type: Schema.Types.ObjectId,
      select: false
   }
}, {
   toJSON: { virtuals: true },
   toObject: { virtuals: true }
});

Categories.virtual('services', {
   ref: 'Services',
   localField: '_id',
   foreignField: 'category'
});

module.exports = model('Categories', Categories);
