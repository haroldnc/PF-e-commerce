const Publications = require("../../models/Publications.js");
const Categories = require('../../models/Categories.js')
const User= require('../../models/User.js')

//buscador para buscar may o min
function FindNeedle(haystack, needle) {
    //console.log("log haystack",haystack,needle);
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

  const getAll = async(req,res, next) => {
    try{
        const {title} = req.query;
        let TodasDB = []
        TodasDB = await Publications.find({ include: [Categories, User] })
            .populate('user', { firstName:1, lastName:1 });
        //console.log("await post",TodasDB);
        //console.log("await post",TodasDB.length);
        if(TodasDB.length > 0){
            if(title && title != '') {
                //hacer consulta por coincidencia del title:
                
                TodasDB = TodasDB.filter(gDb =>{
                    //console.log("gDb",gDb);
                    if(FindNeedle(gDb.title,title)>-1){
                        return gDb
                    }
                })
                    //console.log("log de todas bb",TodasDB);
                TodasDB= TodasDB.map(e =>{
                    let obj = {
                        "_id":e.id,
                        "title":e.title,
                        "description":e.description,
                        "price":e.price,
                        "user":e.user,
                        "service":e.service,
                        "score":e.score,
                        "img":e.img
                    }
                    return obj

                })
            }
            else{
                //consulta a todos los datos DB  
                //console.log("todas post",TodasDB);
                TodasDB= TodasDB.map(e =>{
                    //console.log("todasdb post",TodasDB);
                    let obj = {
                        "_id":e.id,
                        "title":e.title,
                        "description":e.description,
                        "price":e.price,
                        "user":e.user,
                        "service":e.service,
                        "score":e.score,
                        "img":e.img
                    }
                    return obj
                })
            }
            res.json({Publications:TodasDB})
        }
        else res.json({Publications:TodasDB})
    }
    catch(error){
        next(error);
    } 
}

module.exports= {getAll}
      
      