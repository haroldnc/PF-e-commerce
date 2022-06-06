const { Router } = require('express');
const {
   createCheckoutSession
} = require('../controllers/checkout.controller');
//const { validarADMIN_ROLE } = require('../middlewares/validarAdminRole');


const router = Router();

router.post('/', createCheckoutSession);

module.exports = router;