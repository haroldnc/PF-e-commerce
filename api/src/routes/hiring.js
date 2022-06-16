const { Router } = require('express');
const { 
    addHiring, 
    getAllHirings, 
    getHiringsByUser, 
    getHiringsByPublication,
    getHiringsByWorker, 
    deleteHiring, 
    putHiring
} = require('../controllers/hiring.controllers');

const router = Router();

router.post('/', addHiring);
router.get('/', getAllHirings);
router.get('/user/:idUser', getHiringsByUser);
router.get('/publi/:idPublication', getHiringsByPublication);
router.get('/worker/:idWorker', getHiringsByWorker);
router.delete('/:id', deleteHiring);
router.put('/',putHiring);

module.exports = router;