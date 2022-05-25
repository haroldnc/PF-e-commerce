const { Router } = require('express');
const {
   getCategories,
   getCategoryById,
   addCategory
} = require('../controllers/categories.controller');

const router = Router();

router.get('/', getCategories);
router.get('/:idCategory', getCategoryById);
router.post('/', addCategory);

module.exports = router;