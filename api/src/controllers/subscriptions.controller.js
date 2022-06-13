const Subscriptions = require('../models/Subscriptions');
const DataWorkers = require("../models/DataWorkers");
const stripe = require('stripe')(process.env.API_KEY_STRIPE);

const getSubscriptions = async (req, res) => {
	try{
		const subs = await Subscriptions.find();

		res.status(200).json(subs);
	} catch(error) {
		res.status(404).json({ error: error.message });
	}

   res.status(200).json(session);
}

const getSubscriptionByPriceId = async (req, res) => {
	const { id } = req.params;

	try{
		const subscription = await Subscriptions.findOne({ priceId: id});

		if(!subscription) throw new Error('Subscription not found!');

		res.status(200).json(subscription);
	} catch(error) {
		res.status(404).json({ error: error.message });
	}

   res.status(200).json(session);
}

const addSubscriptions = async (req, res) => {
	const { name, priceId } = req.body;

	try{
		if(!name) throw new Error('"name" not found!');
		if(!priceId) throw new Error('"priceId" nor found!');

		await Subscriptions.create({ name, priceId });

		res.status(200).json({ msg: 'Subscriptions created  successfully' })
	} catch(error) {
		res.status(422).json({ error: error.message });
	}
}

const changeSubscriptionsStatus = async (req, res) => {
	const { id } = req.params;
	const { priceId, subscribed } = req.body;

	try{
		if(!priceId) throw new Error('"priceId" nor found!');
		if([undefined,null].includes(subscribed)) throw new Error('"subscribed" status not found!');

		const subs = await Subscriptions.findOne({ priceId });

		await DataWorkers.update({ userId: id }, {
			subscribed,
			subscription_type: subs._id
		});
		res.status(200).json({ msg: 'Subscriptions updated  successfully' })
	} catch(error) {
		res.status(422).json({ error: error.message });
	}
}

const cancelSubscription = async (req, res) => {
	const { id } = req.params;
	const {
		sessionId,
		period_end=true
	} = req.body;

	try{
		if(!sessionId) throw new Error('"sessionId" not found!');

		const sub = await stripe.checkout.sessions.retrieve(sessionId);

		await stripe.subscriptions.update(sub.subscription, {
			cancel_at_period_end: period_end
		});

		await DataWorkers.update({ userId: id }, {
			subscribed: false,
			subscription_type: "62a6dd77e56b6f3e0ad916cd"
		});

		res.status(200).json({ msg: `The Subscription ${period_end?'will be cancelled at the end of the period':'was cancelled'}`})
	} catch(error) {
		res.status(422).json({ error: error.message });
	}
}

const changeSubscription = async (req, res) => {
	const { id } = req.params;
	const {
		sessionId,
		priceId
	} = req.body;

	try{
		if(!sessionId) throw new Error('"sessionId" not found!');
		if(!priceId) throw new Error('"priceId" nor found!');

		const sub = await stripe.checkout.sessions.retrieve(sessionId);
		const subscription = await stripe.subscriptions.retrieve(sub.subscription);
		await stripe.subscriptions.update(sub.subscription, {
		  cancel_at_period_end: false,
		  proration_behavior: 'create_prorations',
		  items: [{
		    id: subscription.items.data[0].id,
		    price: priceId,
		  }]
		});

		const subs = await Subscriptions.findOne({ priceId });

		await DataWorkers.update({ userId: id }, {
			subscribed: true,
			subscription_type: subs?._id
		});

		res.status(200).json({ msg: `The Subscription ${period_end?'will be cancelled at the end of the period':'was cancelled'}`})
	} catch(error) {
		res.status(422).json({ error: error.message });
	}
}

module.exports = {
   getSubscriptions,
   getSubscriptionByPriceId,
   addSubscriptions,
   changeSubscriptionsStatus,
   cancelSubscription,
   changeSubscription
}