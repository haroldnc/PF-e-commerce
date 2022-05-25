const { Router } = require('express');
const {
   getCategories,
   getCategoryById,
   addCategory,
   updateCategory,
   updateService
} = require('../controllers/categories.controller');

const router = Router();

router.get('/', getCategories);
router.get('/:idCategory', getCategoryById);
router.post('/', addCategory);
router.put('/', updateCategory);
router.put('/:idCategory', updateService);

module.exports = router;