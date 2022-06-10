const { Router } = require('express');
const {
   getTransactions,
   getTransactionsByUser,
   addTransaction
} = require('../controllers/transactions.controller');


const router = Router();

router.get('/', getTransactions);
router.get('/:id', getTransactionsByUser);
router.post('/', addTransaction);

module.exports = router;