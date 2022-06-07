const { Router } = require('express');
const { setScore } = require ('../controllers/Scores/Score.controller');
const {getScores, getScore} = require ('../controllers/Scores/GetScore.controller');

const router = Router()

router.get('/:publicationId', getScores)
router.get('/:publicationId/:userId', getScore)
router.set('/:publicationId',setScore)

module.exports = router;
