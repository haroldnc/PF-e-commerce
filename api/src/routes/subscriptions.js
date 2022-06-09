const { Router } = require('express');
const {
    getSubscriptions,
    addSubscriptions
} = require('../controllers/subscriptions.controller');

const router = Router();

router.get('/', getSubscriptions);
router.post('/', addSubscriptions);

module.exports = router;