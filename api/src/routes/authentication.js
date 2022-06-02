const { Router } = require('express');
const { login } = require('../controllers/authentication.controller');

const router = Router();

router.post('/', login);

module.exports = router;