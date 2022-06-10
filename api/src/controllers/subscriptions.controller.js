const Subscriptions = require('../models/Subscriptions');

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

module.exports = {
   getSubscriptions,
   getSubscriptionByPriceId,
   addSubscriptions
}