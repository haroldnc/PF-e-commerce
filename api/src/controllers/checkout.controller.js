const Subscriptions = require('../models/Subscriptions');
const stripe = require('stripe')(process.env.API_KEY_STRIPE);

const getCheckoutSession = async (req, res) => {
   const { sessionId } = req.query;
   const session = await stripe.checkout.sessions.retrieve(sessionId);

   res.status(200).json(session);
}

const createCheckoutSession = async (req, res) => {
   const domainURL = process.env.DOMAIN;
   const { priceId, workerId } = req.body;

   try{
      const session = await stripe.checkout.sessions.create({
         mode: "subscription",
         line_items: [
            {
               price: priceId,
               quantity: 1
            }
         ],
         success_url: `${domainURL}/paysuccess?s={CHECKOUT_SESSION_ID}&w=${workerId}`,
         cancel_url: `${domainURL}`
      });

      //res.redirect(303, sessions.url);
      res.status(200).json(session);
   } catch(error) {
      res.status(400).json({ error: error.message });
   }
}

module.exports = {
   getCheckoutSession,
   createCheckoutSession
}