const { Router } = require('express');
const { login } = require('../controllers/authentication.controller');

const router = Router();

router.post('/', login);
<<<<<<< Updated upstream
//router.get('/', prueba);
=======
>>>>>>> Stashed changes

module.exports = router;