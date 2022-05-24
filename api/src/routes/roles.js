const { Router } = require('express');
const {
   getRoles,
   addRol
} = require('../controllers/user_roles.controller');

const router = Router();

router.get('/', getRoles);
router.post('/', addRol);

module.exports = router;