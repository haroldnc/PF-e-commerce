const Subscriptions = require('../models/Subscriptions');
const stripe = require('stripe')(process.env.API_KEY_STRIPE);

const getCheckoutSession = async (req, res) => {
   const { sessionId } = req.query;
   const session = await stripe.checkout.sessions.retrieve(sessionId);

   res.status.json(session);
}

const createCheckoutSession = async (req, res) => {
   const domainURL = process.env.DOMAIN;
   const { priceId } = req.body;

   try{
      const session = await stripe.checkout.sessions.create({
         mode: "subscription",
         line_items: [
            {
               price: priceId,
               quantity: 1
            }
         ],
         success_url: `${domainURL}`,
         cancel_url: `${domainURL}`
      });

      res.redirect(303, sessions.url);
   } catch(error) {
      res.status(400).json({ error: error.message });
   }
}