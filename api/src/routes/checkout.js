const { Router } = require('express');
const {
   getCheckoutSession,
   createCheckoutSession
} = require('../controllers/checkout.controller');
//const { validarADMIN_ROLE } = require('../middlewares/validarAdminRole');


const router = Router();

router.get('/', getCheckoutSession);
router.post('/', createCheckoutSession);

module.exports = router;