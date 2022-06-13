const { Router } = require('express');
const { setScore } = require ('../controllers/Scores/Score.controller');
const {getScores, getScore,getScoresWorker} = require ('../controllers/Scores/GetScore.controller');
const { validarADMIN_ROLE } = require('../middlewares/validarAdminRole');

const router = Router()

router.get('/:publicationId', getScores)
router.get('/:userId', getScoresWorker)
router.get('/:publicationId/:userId', getScore)
router.post('/',setScore)

module.exports = router;
