const Hiring = require('../models/Hiring');


const addHiring = async (req, res) => {
    const { idUser, idWorker, idPublication } = req.body;
    try {
        const hiring = await Hiring.create({ idUser, idWorker, idPublication });
            res.status(200).json({ 
                ok: true,
                msg: 'Hiring added successfully',
                hiring
            });
        }
    catch (error) {
        res.status(422).json({ 
            ok: false,
            msg: 'Error adding hiring',
            error: error.message
         });
    };
};

const getAllHirings = async (req, res) => {
    try {
        const hirings = await Hiring.find()
        res.status(200).json({ 
            ok: true,
            hirings
        });
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            error: error.message
         });
    };
};

const getHiringsByUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        const hirings = await Hiring.find({ idUser })
        res.status(200).json({ 
            ok: true,
            hirings
        });
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            msg: 'Error getting hirings by user',
            error: error.message
         });
    };
};

const getHiringsByPublication = async (req, res) => {
    const { idPublication } = req.params;
    try {
        const hirings = await Hiring.find({ idPublication })
        res.status(200).json({ 
            ok: true,
            hirings
        });
    } catch (error) {
        res.status(422).json({ 
            ok: false,
            msg: 'Error getting hirings by publication',
        });
    };
};

const getHiringsByWorker = async (req, res) => {
    const { idWorker } = req.params;
    try {
        const hirings = await Hiring.find({ idWorker })
        res.status(200).json({
            ok: true,
            hirings
        });
    } catch (error) {
        res.status(422).json({
            ok: false,
            msg: 'Error getting hirings by worker',
            error: error.message
        });
    };
};

const deleteHiring = async (req, res) => {
    const { id } = req.params;
    try {
        const hiring = await Hiring.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: 'Hiring deleted successfully',
            hiring
        });
    } catch (error) {
        res.status(422).json({
            ok: false,
            msg: 'Error deleting hiring',
            error: error.message
        });
    };
};

module.exports = { 
    addHiring, 
    getAllHirings, 
    getHiringsByUser, 
    getHiringsByPublication, 
    getHiringsByWorker,
    deleteHiring
};