const { Router } = require('express');
const { getUserById, getAllUsers, upDateUser, deleteUser } = require('../controllers/user.controllers')

const router = Router();

router.get('/:id', getUserById);
router.get('/', getAllUsers);
router.put('/:id', upDateUser);
router.delete('/:id', deleteUser);

module.exports = router;