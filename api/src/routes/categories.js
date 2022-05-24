const { Router } = require('express');
const {
   getCategories,
   getCategoryById,
   addCategory,
   addSubCategory
} = require('../controllers/categories.controller');

const router = Router();

router.get('/', getCategories);
router.get('/:idCategory', getCategoryById);
router.post('/', addCategory);
router.post('/:idCategory', addSubCategory);

module.exports = router;