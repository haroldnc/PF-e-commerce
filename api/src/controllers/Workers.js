const {User, findByIdAndUpdate} = require("../models/User")


const listAllWorkers = async (req, res) => {
    const allWorkers = await User.find({user_role: "worker"})
    return allWorkers
}

const getAllWorkers = async (req, res, next) => {
    let {name} = req.query
    if(!name){
        try{
            const allWorkers = await listAllWorkers()
            console.log(allWorkers)
            res.send(allWorkers)
        
        }catch(error){
            next(error)
        }
    }else{
        try{
            const oneWorker = await listAllWorkers().find(e=> e.name === name)
            if(!oneWorker) res.send({msg: "User not found"})
            else res.send(oneWorker)
        }catch(error){
            next(error)
        }
       
    }
}

const getWorkerById = async (req, res, next) => {
    let {id} = req.params;
    try{
        const worker = await  listAllWorkers().find(e=> e.id === id)
        if(!worker) res.status(404).send({msg:"not found"})
        else res.send(worker)
    }catch(error){
        next(error)
    }
}

const updAteWorker = async (req, res, next) => {
    let {id} = req.params;
    let dates = req.body;
    try{
        const newdates ={
            username: dates.username,
            firstName: dates.firstName,
            lastName: dates.lastName,
            email: dates.email,
            password: dates.password,
            image: dates.image,
            user_role: dates.user_role,
            dni: dates.dni,
            phone: dates.phone,
            web: dates.web,
            linkedin: dates.linkedin,
            punctuation: dates.punctuation,   
        }
        const saveUser = await findByIdAndUpdate(id, newdates)
        res.send(saveUser)

    }catch(error){
        next(error)
    }
}


module.exports = {getAllWorkers,getWorkerById,updAteWorker}