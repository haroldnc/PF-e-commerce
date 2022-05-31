// const User = require("../models/User")
const DataWorkers = require("../models/DataWorkers")


const listAllWorkers = async () => {
    // console.log(User)
    // const allWorkers = await User.find({user_role:"628efa11f43fddcf2b47bfa4"}).populate("user_role", {name:1,_id:0})
    const AllWorkers = await DataWorkers.find()
        .populate("userId", {username:0,password:0,confirm_email:0});
    console.log(AllWorkers)
    return AllWorkers
}

const getAllWorkers = async (req, res, next) => {
    let {name} = req.query
    if(!name){
        try{
            const allWorkers = await listAllWorkers()
            // console.log(allWorkers)
            res.send(allWorkers)
        
        }catch(error){
            next(error)
        }
    }else{
        try{

            const WorkersByname = await listAllWorkers()
            // const WorkersByUsername = WorkersByname.filter(e=> e.username.toLowerCase().includes(name.toLowerCase()))
            const WorkersByUsername = WorkersByname.filter( e => {
                const reg = new RegExp(`${name}`,'i');

                return reg.test(e.userId.firstName) || reg.test(e.userId.lastName);
            });
            if(!WorkersByUsername.length) res.send({msg: "User not found"})
            else res.send(WorkersByname)
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

const upDateWorker = async (req, res, next) => {
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


module.exports = {getAllWorkers,getWorkerById,upDateWorker}