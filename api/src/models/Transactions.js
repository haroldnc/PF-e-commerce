const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const { Schema, model} = mongoose;

const Transactions = Schema({
   sessionId: {
      type: String,
      require: true
   },
   amount: {
      type: Schema.Types.Double
   },
   reason:{
      type: String
   },
   date: {
      type: Date
   },
   expiration: {
      type: Date
   },
   payment_method: {
      network: {
         type: String
      },
      end_digits: {
         type: String
      }
   },
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   },
   __v: {
      type: Number,
      select: false
   }
});

module.exports = model('Transactions', Transactions);
