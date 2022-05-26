const { Router } = require('express');
const {
   getRoles,
   addRol
} = require('../controllers/user_roles.controller');
const { validarADMIN_ROLE } = require('../middlewares/validarAdminRole');

const router = Router();

router.get('/', getRoles);
router.post('/', validarADMIN_ROLE, addRol);

module.exports = router;