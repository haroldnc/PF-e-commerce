const { Router } = require('express');
const { login, prueba } = require('../controllers/authentication.controller');

const router = Router();

router.post('/', login);
//router.get('/', prueba);

module.exports = router;