const { Router } = require('express');
const {
    getSubscriptions,
    getSubscriptionByPriceId,
    addSubscriptions,
    changeSubscriptionsStatus,
    cancelSubscription,
    changeSubscription
} = require('../controllers/subscriptions.controller');

const router = Router();

router.get('/', getSubscriptions);
router.get('/:id', getSubscriptionByPriceId);
router.post('/', addSubscriptions);
router.put('/:id', changeSubscriptionsStatus);
router.put('/cancel/:id', cancelSubscription);
router.put('/change/:id', changeSubscription);

module.exports = router;