const { Router } = require('express');
const {
   getRoles,
   addRol
} = require('../controllers/roles.controller');

const router = Router();
router.get('/', getRoles);
router.post('/', addRol);

module.exports = router;