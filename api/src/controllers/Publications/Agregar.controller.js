const {Publications} = require('../../models/Publications');
const {Categories} = require('../../models/Categories')

<<<<<<< HEAD
const addPublicate = async (req, res) =>{
=======
const addPublicate =  async (req, res) =>{
>>>>>>> damian
    const { name, description, categories} = req.body;
    try{
    let Publicacion = { 
        name,
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