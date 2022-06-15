const { Router } = require('express');
const {
    deleteFavorite,
    getAllFavorites,
    getFavoritesByUser,
    getFavoritesByPublication,
    addFavorite
} = require('../controllers/favorites.controller');

const router = Router();

router.delete('/:id', deleteFavorite);
router.get('/', getAllFavorites);
router.get('/:idUser', getFavoritesByUser);
router.get('/:idPublication', getFavoritesByPublication);
router.post('/', addFavorite);

module.exports = router;