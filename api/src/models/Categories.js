const { Schema, model } = require('mongoose');


const Categories = Schema({
   name: {
      type: String,
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
   tags: [
      {
         name: String
      }
   ]
});

Categories.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Categories', Categories);