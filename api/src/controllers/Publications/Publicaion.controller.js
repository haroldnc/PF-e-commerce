const {Publications} = require('../../models/Publications');
const {Categories} = require('../../models/Categories')
const {User}= require('../../models/User')

//buscador para buscar may o min
function FindNeedle(haystack, needle) {
    
    let indice=0, z='', j=0
    for(let i=0; i < haystack.length; i++){
        if((haystack[i] == needle[j])||(haystack[i].toLowerCase() == needle[j].toLowerCase())||(haystack[i].toLowerCase() == needle[j].toLowerCase())){
            indice=i
            z = z + needle[j]
            if (z == needle)  return indice-(needle.length-1)
            j++
        }
        else{
            z=''
            j=0
        }
    }
    return -1
  }

  const getAll = async(req, res, next) => {
  try{
    const {title} = req.query;
    let TodasDB = []
    TodasDB = (await Publications.findAll({ include: [Categories, User] }))
        if(title && title != '') {
            //hacer consulta por coincidencia del title:
            
            TodasDB = TodasDB.filter(gDb =>{
                if(FindNeedle(gDb.title,title)>-1){
                    return gDb
                }
            })

            TodasDB= TodasDB.map(e =>{
                let obj = {
                    
                    "title":e.dataValues.title,
                    "description":e.dataValues.description,
                    "categories":e.dataValues.categories
                                                    
                }
                return obj

            })
        }
            else{
                //consulta a todos los datos DB  
                TodasDB= TodasDB.map(e =>{
                  let obj = {
                    "title":e.dataValues.title,
                    "description":e.dataValues.description,
                    "categories":e.dataValues.categories                            
                  }
                  return obj
      
              })
            }

                          
      
    }
          catch(error){
              next(error);
            } 
        }

module.exports= {getAll}
      
      