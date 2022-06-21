const Subscriptions = require('../models/Subscriptions');
const DataWorkers = require("../models/DataWorkers");
const Publications = require("../models/Publications");
const stripe = require('stripe')(process.env.API_KEY_STRIPE);

const getSubscriptions = async (req, res) => {
	try{
		const subs = await Subscriptions.find();

		res.status(200).json(subs);
	} catch(error) {
		res.status(404).json({ error: error.message });
	}
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
	const { subSchedulesId } = req.body;

	try{
		if(!subSchedulesId) throw new Error('"subSchedulesId" not found!');

		await stripe.subscriptionSchedules.cancel(subSchedulesId);
		const unsubscribed = await Subscriptions.findOne({ name: "Unsubscribed" });

		await DataWorkers.update({ userId: id }, {
			subscribed: false,
			subscription_type: unsubscribed._id.toString()
		});

		await Publications.update({ user: id}, {
			active: false
		});

		res.status(200).json({ msg: 'The Subscription was cancelled'})
	} catch(error) {
		res.status(422).json({ error: error.message });
	}
}

const changeSubscription = async (req, res) => {
	const { id } = req.params;
	const {
		subSchedulesId,
		priceId
	} = req.body;

	try{
		if(!subSchedulesId) throw new Error('"subSchedulesId" not found!');
		if(!priceId) throw new Error('"priceId" nor found!');

		const schedule = await stripe.subscriptionSchedules.retrieve(subSchedulesId);
		const subscription = await stripe.subscriptions.retrieve(schedule.subscription);
		await stripe.subscriptionSchedules.update(subSchedulesId, {
			phases: [
			   {
			      items: [
			      	{
			      		price: subscription.items.data[0].price.id
			      	}
					],
			      start_date: subscription.current_period_start,
			      end_date: 'now'
			   },
			   {
			      items: [
			      	{
			      		price: priceId
			      	}
			      ],
			      start_date: 'now',
			      end_date: subscription.current_period_end
			   }
			]
		});

		const subs = await Subscriptions.findOne({ priceId });

		await DataWorkers.update({ userId: id }, {
			subscribed: true,
			subscription_type: subs._id
		});
		
		if(subs.name === 'Standard'){
			let posts_active = await Publications.find({user: id, active:true});
			console.log(posts_active);
			if (posts_active.length > 3){
				posts_active = posts_active.slice(3);
			}
			console.log(posts_active);
			for (let i=0; i<posts_active.length; i++){
				await Publications.findByIdAndUpdate(posts_active[i]._id, {
					active: false
				});
			}
		}

		res.status(200).json({ msg: 'The Subscription updated successfully'})
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