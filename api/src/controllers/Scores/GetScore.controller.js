const Scoremodel = require ("../../models/Scores.js");
const Publications = require("../../models/Publications.js");
const User =require ("../../models/User.js");
const DataWorkers = require("../../models/DataWorkers.js")


const getScores = async (req, res) => {
    const { publicationId } = req.params;
    const { filterCriteria } = req.query;
    //console.log("log filterCriteria",filterCriteria);
    let scoreAverage = 0;
    let scores = [];
    let limit = 5;
      
    try {
        if (filterCriteria === 'all' || filterCriteria === undefined) {
            scores = await Scoremodel.find({ publication: publicationId }).limit(limit);
        }
        if (filterCriteria === 'positive') {
            scores = await Scoremodel.find({ publication: publicationId, score: { $gt: 2 }}).limit(limit);
        }
        if (filterCriteria === 'negative') {
            scores = await Scoremodel.find({ publication: publicationId, score: { $lt: 3 } }).limit(limit);
        }
        for (let i = 0; i < scores.length; i++) {
            const usuario = await User.findById(scores[i].user)
            const St = {
                "title":scores[i].title,
                "message":scores[i].message,
                "score":scores[i].score,
                "user":usuario.firstName + " " + usuario.lastName
            } 
            scores[i] = St
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
//promedio de score de 1 worker
const getScore = async (req, res) => {
    const { publicationId, userId } = req.params;

    try {
        const ScoreExists = await Scoremodel.find({ publication: publicationId, user: userId });

    for (let i = 0; i < ScoreExists.length; i++) {
        const usuario = await User.findById(ScoreExists[i].user)
        const St = {
            "title":ScoreExists[i].title,
            "message":ScoreExists[i].message,
            "score":ScoreExists[i].score,
            "user":usuario.firstName + " " + usuario.lastName
        } 
        ScoreExists[i] = St
    }      
    return res.json(ScoreExists);

    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
}

const getScoresWorker = async (req, res) => {
    const { userId } = req.params;
    const { filterCriteria } = req.query;
    
    let scoreAverage = 0;
    let scores = [];
    let limit = 5;
      
    try {
            const trabajador = await DataWorkers.findById(userId)
            //console.log("log trabajador",trabajador);
            let publicaciones = await Publications.find({user:trabajador.userId})
            //console.log("log publicaciones",publicaciones);
            
            for (let i = 0; i < publicaciones.length; i++) {
                const e = await Scoremodel.find({ publication: publicaciones[i].id }).limit(limit);

                scores.push(e)
                
            }
            //console.log("log scores",scores);
            // let reScores = await Scoremodel.find({ publication: userId });
            publicaciones = publicaciones.map(p => p.score)    
            publicaciones = publicaciones.flat()

            //calcular el promedio
            const sum = publicaciones.reduce((partial_sum, r) => partial_sum + r, 0);
            scoreAverage = (sum / publicaciones.length).toFixed(1);
            //console.log("log sum",sum);
            return res.json({ scores, scoreAverage, totalScores: publicaciones.length });

    } catch (error) {
        console.log(error);
        return res.status(404);
    }
}
module.exports = {
    getScores,
    getScore,
    getScoresWorker
};