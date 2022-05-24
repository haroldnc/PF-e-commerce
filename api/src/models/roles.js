const mongoose = require('mongoose');

const rolesSchema = mongoose.Schema({
   name: {
      type: String,
      validate: {
         validator: (v) => /^[a-z]+$/i.test(v),
         message: props => `Rol name only accept letters`
      }
   }
})

module.exports = mongoose.model('roles', rolesSchema);