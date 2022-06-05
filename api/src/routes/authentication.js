const { Router } = require('express');
const { login, googleSignIn } = require('../controllers/authentication.controller');
const { validarCampos } = require('../middlewares/validar.campos.js');
const { check } = require('express-validator');

const router = Router();

router.post('/',
[
    check('email', 'Email is required and must be valid').not().isEmpty().isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validarCampos
], login);
router.post('/google', googleSignIn);

module.exports = router;