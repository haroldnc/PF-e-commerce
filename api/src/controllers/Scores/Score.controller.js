//controller
const Scoremodel = require ("../../models/Scores.js");
const Publications = require("../../models/Publications.js");

    const setScore = async (req,res, next) => {
        const { user, publicationId, title, score, message } = req.body;
        console.log("log req.body",req.body);
        try {
            const ScoreExists = await Scoremodel.find({ user, publication:publicationId});
            //Valido que se contrato el servicio por el autor de la puntuacion 
            console.log("log ScoreExists",ScoreExists);
            //Limitar el número de scores a 1
            if (ScoreExists.length > 0) {
                const EScores = ScoreExists.map(Sc =>{
                    return (
                        Sc.message = message,
                        Sc.score = score,
                        Sc.title = title
                    )
                }) 
                console.log("log EScores",EScores);
                await EScores.save();
                return res.send(200);
            }

            const Scores = new Scoremodel({ user: user, publication: publicationId, title, message, score });
            console.log("await Scores",Scores);
            await Scores.save();

            console.log("despues del awai");
            const publication = await Publications.findById(publicationId);
            console.log("log publication",Scores.score);
            publication?.score.push(Scores.score);
            await publication?.save();

            return res.sendStatus(200);

        } catch(error){
            next(error);
        }
    }

module.exports = {
    setScore
};
