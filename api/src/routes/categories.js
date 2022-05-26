const { Router } = require('express');
const {
   getCategories,
   getCategoryById,
   addCategory,
   updateCategory,
   updateService,
   deleteCategory
} = require('../controllers/categories.controller');

const router = Router();

router.get('/', getCategories);
router.post('/', addCategory);
router.put('/', updateCategory);
router.get('/:idCategory', getCategoryById);
router.put('/:idCategory', updateService);
router.delete('/:idCategory', deleteCategory);

module.exports = router;