const { Router } = require('express');
const { login, googleSignIn, renewToken } = require('../controllers/authentication.controller');
const { validarCampos } = require('../middlewares/validar.campos.js');
const { validarJWT } = require('../middlewares/validar.jwt.js');
const { check } = require('express-validator');

const router = Router();

router.post('/',
[
    check('email', 'Email is required and must be valid').not().isEmpty().isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validarCampos
], login);
router.post('/google', googleSignIn);
//router.get('/renew', validarJWT, renewToken);// validarJwt es un middleware, agregar. renewToken genera nuevo token.
router.get('/renew', renewToken);

module.exports = router;