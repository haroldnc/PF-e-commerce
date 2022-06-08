const { Router } = require('express');
const { check } = require('express-validator');
const { 
    getUserById, 
    getAllUsers, 
    upDateUser, 
    deleteUser, 
    createUser, 
    confirmRegister 
} = require('../controllers/user.controllers')

const { validarCampos } = require('../middlewares/validar.campos');
const {validarADMIN_ROLE} = require('../middlewares/validarAdminRole')

const router = Router();

router.get('/:id', getUserById);
router.get('/', getAllUsers);
/*router.get('/', 
[
    validarJwt,
    validarADMIN_ROLE
],
getAllUsers);*/
router.put('/:id', upDateUser);
router.delete('/:id', deleteUser);
router.post('/',
[
    check('username', 'Username is required').not().isEmpty(),
    check('firstName', 'Name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Email is required and must be valid').not().isEmpty().isEmail(),
    check('password', 'The password is required and must be valid').not().isEmpty(),
    check('user_role', 'User type is required').not().isEmpty(),
    validarCampos
], createUser);
router.post('/confirm/:id', confirmRegister);


module.exports = router;