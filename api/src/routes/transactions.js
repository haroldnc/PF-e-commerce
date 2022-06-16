const { Router } = require('express');
const {
   getTransactions,
   getTransactionsByUser,
   getLastTransactionByUser,
   addTransaction
} = require('../controllers/transactions.controller');


const router = Router();

router.get('/', getTransactions);
router.get('/:id', getTransactionsByUser);
router.get('/last/:id', getLastTransactionByUser);
router.post('/', addTransaction);

module.exports = router;