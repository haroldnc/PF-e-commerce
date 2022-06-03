const createCharge = async (data, secret_key) => {
   const stripe = require('stripe')(secret_key);
   const { worker_acc_id, price, currency, percent_fee } = data;

   if (!worker_acc_id) throw new Error('"worker_acc_id" is required!');
   if (!price) throw new Error('"price" is required!');
   if (!currency) throw new Error('"currency" is required!');
   if (!percent_fee) throw new Error('"percent_fee" is required!');

   const paymentIntent = await stripe.paymentIntents.create({
      payment_method_types: ["card"],
      amount: price * 100,
      currency,
      on_behalf_of: worker_acc_id,
      transfer_data: {
         amount: price * (100 - percent_fee),
         destination: worker_acc_id
      }
   });

   return paymentIntent;
}

const confirmCharge = async (data, secret_key) => {
   const stripe = require('stripe')(secret_key);
   const { intent_id, payment_method } = data;

   if (!intent_id) throw new Error('"intent_id" is required!');
   if (!payment_method) throw new Error('"payment_method" is required!');

   const paymentIntent = await stripe.paymentIntents.confirm(intent_id, { payment_method });

   return paymentIntent;
}

const refundCharge = async (chargeID, secret_key) => {
   const stripe = require('stripe')(secret_key);

   if (!chargeID) throw new Error('"chargeID" is required!');

   const refund = await stripe.refunds.create({
      charge: chargeID,
      reverse_transfer: true,
      refund_application_fee: true
   });

   return refund;
}

module.exports = {
   createCharge,
   confirmCharge,
   refundCharge
}