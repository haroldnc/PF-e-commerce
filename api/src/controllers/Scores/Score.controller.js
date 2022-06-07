//controller
const Scoremodel = require ("../../models/Scores.js");
const Publications = require("../../models/Publications.js");

    const setScore = async (req,res, next) => {
        const { user, publicationId, title, score, message } = req.body;

        try {
            const ScoreExists = await Scoremodel.find({ user, publication});
            //Valido que se contrato el servicio por el autor de la puntuacion 
            
            //Limitar el número de scores a 1
            if (ScoreExists) {
                ScoreExists.message = message;
                ScoreExists.score = score;
                ScoreExists.title = title;
                await ScoreExists.save();
                return res.send(200);
            }

            const Scores = new Scoremodel({ user: user, publication: publicationId, title, message, score });

            await Scores.save();

            const publication = await PublicationSchema.find(publicationId);

            publication?.scores.push(puntuacion);
            await publication?.save();

            return res.sendStatus(200);

        } catch(error){
            next(error);
        }
    }

module.exports = {
    setScore
};
