const {Publications} = require('../../models/Publications');
const {Categories} = require('../../models/Categories')
const {User}= require('../../models/User')


const getId = async(req, res, next) => {
    try{
        const {Id} = req.params;
        let DBId = []
        console.log("logID",Id);

        const str =  (texto)=>{
            for(i=0; i<texto.length; i++){
               if ("-".indexOf(texto.charAt(i),0)!=-1){
                  return  1;
               }
            }
            return  0;
         }
        console.log(typeof(Id));
        //preguntando que tipo de Id sos(si el Id no es numero)
        str(Id);
            {
             //hacer consulta por Id:
             DBId = (await Publications.findByPk(Id,{include:[Categories, User]}))
                          
             DBId= {
                 
                 "id": DBId.dataValues.id,
                 "title":DBId.dataValues.title,
                 "description":DBId.dataValues.description,
                 "categories":DBId.dataValues.categories

                 }
                 return res.status(201).send({
                    result: DBId,
                    Total: 1
                })
            }
    }
        catch(error){
            next(error);
        }
    
}

module.exports= {getId}