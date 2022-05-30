const Publications = require('../../models/Publications');
const {Categories} = require('../../models/Categories')

const addPublicate =  async (req, res) =>{
    const { name, description, categories} = req.body;
    try{
    let Publicacion = { 
        name,
        description,
        categories
    }
    console.log(Publications)
    await Publications.create(Publicacion)
    res.sendStatus(201)
}
    
    catch (e) {
        console.log(e);
        res.sendStatus(404);
    }
}

module.exports = {addPublicate}