const { Router } = require('express');
const {
    getSubscriptions,
    getSubscriptionByPriceId,
    addSubscriptions
} = require('../controllers/subscriptions.controller');

const router = Router();

router.get('/', getSubscriptions);
router.get('/:id', getSubscriptionByPriceId);
router.post('/', addSubscriptions);

module.exports = router;