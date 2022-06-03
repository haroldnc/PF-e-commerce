const Publications = require('../../models/Publications');
const {Categories} = require('../../models/Categories')

const addPublicate =  async (req, res) =>{
    const { title, description, img, score,service,user,price} = req.body;
    try{
    let Publicacion = { 
        title,
        description,
        price,
        user,
        service,
        score,
        img
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