const Scoremodel = require ("../../models/Scores.js");
const Publications = require("../../models/Publications.js");

const getScores = async (req, res) => {
    const { publicationId } = req.params;
    const { filterCriteria } = req.query;
    
    let scoreAverage = 0;
    let scores = [];
    let limit = 5;
      
    try {
        if (filterCriteria === 'all') {
            scores = await Scoremodel.find({ publication: publicationId }).limit(limit);
        }
        if (filterCriteria === 'positive') {
            scores = await Scoremodel.find({ publication: publicationId, score: { $gt: 2 }}).limit(limit);
        }
        if (filterCriteria === 'negative') {
            scores = await Scoremodel.find({ publication: publicationId, score: { $lt: 3 } }).limit(limit);
        }

        let reScores = await Scoremodel.find({ publication: publicationId });
            
        //calcular el promedio
        const sum = reScores.reduce((partial_sum, r) => partial_sum + r.score, 0);
        scoreAverage = (sum / reScores.length).toFixed(1);

        return res.json({ scores, scoreAverage, totalScores: reScores.length });

    } catch (error) {
        console.log(error);
        return res.status(404);
    }
}

const getScore = async (req, res) => {
    const { publicationId, userId } = req.params;

    try {
        const ScoreExists = await Scoremodel.find({ publication: publicationId, user: userId });

        return res.json(ScoreExists);

    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
}
module.exports = {
    getScores,
    getScore
};