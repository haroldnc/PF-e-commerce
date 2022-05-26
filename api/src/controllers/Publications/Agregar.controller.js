const {Publications} = require('../../models/Publications');
const {Categories} = require('../../models/Categories')

const addPublicate = async (req, res, next) =>{
    const { title, description, categories} = req.body;
    try{
    let Publicacion = { 
        title,
        description,
        categories
    }
    await Publicacion.save()
    res.sendStatus(201)
}
    
    catch (e) {
        console.log(e);
        res.sendStatus(404);
    }
}

module.exports = {addPublicate}