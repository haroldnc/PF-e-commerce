const Transactions = require('../models/Transactions');
const stripe = require('stripe')(process.env.API_KEY_STRIPE);

const getTransactions = async (req, res) => {
   try{
      const transactions = await Transactions.find();

      res.status(200).json(transactions);
   } catch(error) {
      res.status(404).json({ error: error.message });
   }
}

const getTransactionsByUser = async (req, res) => {
   const { id } = req.params;

   try{
      const transactions = await Transactions.find({ user: id });

      res.status(200).json(transactions);
   } catch(error) {
      res.status(404).json({ error: error.message });
   }
}

const addTransaction = async (req, res) => {
   const {
      sessionId,
      reason,
      user
   } = req.body;

   try{
      if(!sessionId) throw new Error('"sessionId" is required!');
      if(!reason) throw new Error('"reason" is required!');
      if(!user) throw new Error('"user" is required!');

      const session = await stripe.checkout.sessions.retrieve(sessionId);

      if (!session) throw new Error('Payment not found!');

      const subscription = await stripe.subscriptions.retrieve(session.subscription);
      const payment = await stripe.paymentMethods.retrieve(subscription.default_payment_method);

      await Transactions.create({
         sessionId,
         amount: session.amount_total/100,
         reason,
         date: new Date(subscription.current_period_start*1000),
         expiration: new Date(subscription.current_period_end*1000),
         payment_method: {
            network: payment.card.brand,
            end_digits: payment.card["last4"]
         },
         user
      });

      res.status(200).json({ msg: 'Register transaction successfully' });
   } catch(error) {
      res.status(400).json({ error: error.message });
   }
}

module.exports = {
   getTransactions,
   getTransactionsByUser,
   addTransaction
}