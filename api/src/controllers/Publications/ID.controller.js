const Publications = require('../../models/Publications');



const getId = async(req, res, next) => {
    let {id} = req.params;
    try{
        
        if( typeof id === "string"){
            const postById = await Publications.findById(id)
            if(!postById) res.send({msg: "not found"})
            else res.send(postById)
        }else res.send({msg: "not found"})
       
    }
        catch(error){
            next(error);
        }
    
}

module.exports= {getId}