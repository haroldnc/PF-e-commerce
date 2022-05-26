const { Router } = require('express');
const {
   getCategories,
   getCategoryById,
   addCategory,
   updateCategory,
   updateService,
   deleteCategory
} = require('../controllers/categories.controller');
const { validarADMIN_ROLE } = require('../middlewares/validarAdminRole');


const router = Router();

router.get('/', getCategories);
router.post('/', validarADMIN_ROLE, addCategory);
router.put('/', validarADMIN_ROLE, updateCategory);
router.get('/:idCategory', getCategoryById);
router.put('/:idCategory', validarADMIN_ROLE, updateService);
router.delete('/:idCategory', validarADMIN_ROLE, deleteCategory);

module.exports = router;