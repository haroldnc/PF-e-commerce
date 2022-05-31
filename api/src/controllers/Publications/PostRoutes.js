const Publications =require("../../models/Publications")

const upDatePost = async (req, res, next) => {
    let { id } = req.params;
    let post = req.body;

    try{
        const verificate = await Publications.findById(id)
        if(verificate === null) res.send({msg: "not found"})
        console.log(verificate)

        const result = await Publications.findByIdAndUpdate(id, post, {new: true})
        res.send(result)
    }catch(error){
        console.log(error)
        next(error)
    }  
}


const deletePost = async (req, res, next) => {
    let {id} = req.params;

    try{
        const verificate = await Publications.findById(id)
        console.log(verificate, "holaaaaaaaa")
        if(verificate === null) res.send({msg:"id not found"})
        await Publications.findByIdAndDelete(id)
        res.send({msg:"the post was deleted"})
    }catch(error){
        console.log(error)
        next(error)
    }
}


module.exports={
    upDatePost,
    deletePost
}