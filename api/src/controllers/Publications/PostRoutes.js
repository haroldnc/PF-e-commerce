const Publications =require("../../models/Publications")

const upDatePost = async (req, res, next) => {
    let { id } = req.params;
    let post = req.body;

    post.active = undefined;

    try{
        const verificate = await Publications.findById(id)
        if(verificate === null) res.send({msg: "not found"})

        const result = await Publications.findByIdAndUpdate(id, post, {new: true})
        res.send(result)
    }catch(error){
        console.log(error)
        next(error)
    }  
}

const changePostStatus = async (req, res) => {
    let { id } = req.params;
    let { active } = req.body;

    try{
        await Publications.findByIdAndUpdate(id, { active });
        res.status(200).json({ msg: 'Status Updated' });
    }catch(error){
        console.log(error)
        next(error)
    }  
}


const deletePost = async (req, res, next) => {
    let {id} = req.params;

    try{
        const verificate = await Publications.findById(id)
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
    changePostStatus,
    deletePost
}