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
        img: img || 'https://s3.amazonaws.com/www-inside-design/uploads/2019/11/Designer-Confidential-1080x1080-Instagram-810x810.png'
    }
    //console.log(Publications)
    await Publications.create(Publicacion)
    res.sendStatus(201)
}
    
    catch (e) {
        console.log(e);
        res.sendStatus(404);
    }
}

module.exports = {addPublicate}