const Publications =require("../../models/Publications")

const upDatePost = async (req, res, next) => {
    let { id } = req.params;
    let post = req.body;

    try{
        const newPost = {
            title: post.title,
            description: post.description,
            Services: post.Services
        }
    
        let result = await Publications.findByIdAndUpdate(id, newPost)
        res.send(result)
    }catch(error){
        console.log(error)
        next(error)
    }  
}


const deletePost = async (req, res, next) => {
    let {id} = req.params;

    try{
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