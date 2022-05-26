const { Router } = require('express');
const { getUserById, getAllUsers, upDateUser, deleteUser } = require('../controllers/user.controllers')

const router = Router();

router.get('/:idUser', getUserById);
router.get('/', getAllUsers);
router.put('/:idUser', upDateUser);
router.delete('/:idUser', deleteUser);

module.exports = router;