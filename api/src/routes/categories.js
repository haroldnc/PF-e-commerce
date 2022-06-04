const { Router } = require('express');
const {
   getCategories,
   getCategoryById,
   addCategory,
   updateCategory,
   deleteCategory
} = require('../controllers/categories.controller');
const { validarADMIN_ROLE } = require('../middlewares/validarAdminRole');


const router = Router();

router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/', addCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;