const { Router } = require('express');
const {
   getCategories,
   getCategoryById,
   addCategory
} = require('../controllers/categories.controller');
const { validarADMIN_ROLE } = require('../middlewares/validarAdminRole');


const router = Router();

router.get('/', getCategories);
router.get('/:idCategory', getCategoryById);
router.post('/', validarADMIN_ROLE, addCategory);

module.exports = router;