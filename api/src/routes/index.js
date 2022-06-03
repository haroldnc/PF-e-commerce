const { Router } = require('express');
const router = Router();

router.use('/roles', require('./roles'));
router.use('/categories', require('./categories'));
router.use('/user', require('./user'));
router.use('/posts', require('./Publications'));
router.use('/workers', require('./workers'));
router.use('/services', require('./services'));
router.use('/auth', require('./authentication'));

const {
   createAccount,
   getAccountInfo,
   updateAccountInfo
} = require("../helpers/stripeAccounts");

const {
   createCharge,
   confirmCharge
} = require("../helpers/stripeTransfers");

router.post('/create-account', async (req, res) => {
   const { country, email } = req.body;

   try {
      const account = await createAccount({
         country,
         email
      }, process.env.API_KEY_STRIPE);

      res.status(200).json(account);
   } catch(error) {
      res.status(422).json({ error: error.message });
   }
});

router.get('/account/:id', async (req, res) => {
   const { id } = req.params;

   try {
      const account = await getAccountInfo(id, process.env.API_KEY_STRIPE);

      res.status(200).json(account);
   } catch(error) {
      res.status(422).json({ error: error.message });
   }
});

router.post('/account', async (req, res) => {
   const { worker_acc_id, update } = req.body;

   try {
      const account = await updateAccountInfo(worker_acc_id, update, process.env.API_KEY_STRIPE);

      res.status(200).json(account);
   } catch(error) {
      res.status(422).json({ error: error.message });
   }
});

router.post('/charge', async (req, res) => {
   const { worker_acc_id, price, currency, percent_fee } = req.body;

   try {
      const charge = await createCharge({
         worker_acc_id,
         price,
         currency,
         percent_fee
      }, process.env.API_KEY_STRIPE);

      res.status(200).json(charge);
   } catch(error) {
      res.status(422).json({ error: error.message });
   }
});

router.post('/confirm-charge', async (req, res) => {
   const { intent_id, payment_method } = req.body;

   try {
      const charge = await confirmCharge({
         intent_id,
         payment_method
      }, process.env.API_KEY_STRIPE);

      res.status(200).json(charge);
   } catch(error) {
      res.status(422).json({ error: error.message });
   }
});

module.exports = router;