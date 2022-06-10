const stripe = require('stripe')(process.env.API_KEY_STRIPE);

const getCheckoutSession = async (req, res) => {
   const { sessionId } = req.query;
   const session = await stripe.checkout.sessions.retrieve(sessionId);

   res.status(200).json(session);
}

const createCheckoutSession = async (req, res) => {
   const domainURL = process.env.DOMAIN;
   const { priceId, userId } = req.body;

   try{
      if(!priceId) throw new Error('"priceId" is required!');
      if(!userId) throw new Error('"userId" is required!');

      const session = await stripe.checkout.sessions.create({
         mode: "subscription",
         line_items: [
            {
               price: priceId,
               quantity: 1
            }
         ],
         success_url: `${domainURL}/paysuccess?s={CHECKOUT_SESSION_ID}&u=${userId}&p=${priceId}`,
         cancel_url: `${domainURL}/cancel_subs?u=${userId}`
      });

      //res.redirect(303, session.url);
      res.status(200).json({ url: session.url });
   } catch(error) {
      res.status(400).json({ error: error.message });
   }
}

module.exports = {
   getCheckoutSession,
   createCheckoutSession
}