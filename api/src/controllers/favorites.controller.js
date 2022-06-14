const Favorites = require('../models/Favorites');

const addFavorite = async (req, res) => {
    const { idUser, idPublication } = req.body;
    try {
        // validar si existe una publicacion con ese id
        const publication = await Favorites.find({idPublication});
        if (!publication) {
            const favorite = await Favorites.create({ idUser, idPublication });
            res.status(200).json({ 
                ok: true,
                msg: 'Favorite added successfully',
                favorite
            });
        }
        else{
            res.status(400).json({ 
                ok: false,
                msg: 'This publication is already in favorites'
            });
        };
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            msg: 'Error adding favorite',
            error: error.message
         });
    };
};

const getAllFavorites = async (req, res) => {
    try {
        const favorites = await Favorites.find();
        res.status(200).json({ 
            ok: true,
            favorites
        });
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            error: error.message
         });
    };
};

const getFavoritesByUser = async (req, res) => {
    const { idUser } = req.params
    try {
        const favorites = await Favorites.find({ idUser })
            .populate('idPublication', {title: 1, description: 1, price: 1, img: 1, score: 1, user: 1})
        res.status(200).json({ 
            ok: true,
            favorites
        });
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            msg: 'Error getting favorites by user',
            error: error.message
         });
    };
};

const getFavoritesByPublication = async (req, res) => {
    const { idPublication } = req.params;
    try {
        const favorites = await Favorites.find({ idPublication });
        res.status(200).json({
            ok: true,
            favorites
        });
    } catch (error) {
        res.status(422).json({
            ok: false,
            msg: 'Error getting favorites by publication',
            error: error.message
        });
    };
};

const deleteFavorite = async (req, res) => {
    const { id } = req.params
    try {
        const favorite = await Favorites.findByIdAndDelete(id);
        res.status(200).json({ 
            ok: true,
            msg: 'Favorite deleted successfully',
            favorite
        });
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            error: error.message
         });
    };
};

module.exports = { 
    deleteFavorite, 
    addFavorite, 
    getAllFavorites, 
    getFavoritesByUser, 
    getFavoritesByPublication
};