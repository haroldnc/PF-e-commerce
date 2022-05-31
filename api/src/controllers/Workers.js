// const User = require("../models/User")
const DataWorkers = require("../models/DataWorkers")
const morgan = require("morgan")
let loger = morgan()


const listAllWorkers = async () => {
    // console.log(User)
    // const allWorkers = await User.find({user_role:"628efa11f43fddcf2b47bfa4"}).populate("user_role", {name:1,_id:0})
    const AllWorkers = await DataWorkers.find()
        .populate("userId", {username:0,password:0,confirm_email:0});
    // console.log(AllWorkers)
    return AllWorkers
}

const getAllWorkers = async (req, res, next) => {
    let {title} = req.query
    if(!title){
        try{
            console.log(title)
            const allWorkers = await listAllWorkers()
            // console.log(allWorkers)
            res.send(allWorkers)
        
        }catch(error){
            next(error)
        }
    }else{
        try{
            title = title.toLowerCase()
            const WorkersByname = await listAllWorkers()
            const WorkersByUsername = WorkersByname.filter(e=> e.title.toLowerCase().includes(title))
            // const WorkersByUsername = WorkersByname.filter( e => {
            //     const reg = new RegExp(`${e.name}`,'i');
            //     console.log(reg)

            //     return reg.test(e.userId.firstName) || reg.test(e.userId.lastName);
            // });
            console.log(WorkersByUsername)

            if(!WorkersByUsername.length) res.send({msg: "User not found"})
            else res.send(WorkersByUsername)
        }catch(error){
            next(error)
        }
    }
}

const getWorkerById = async (req, res, next) => {
    let {id} = req.params;
    try{
        const worker = await  listAllWorkers()
        const unicWorker = worker.find(e => e.id === id)
        console.log(unicWorker)
        // .find(e=> e.id === id)
        if(!unicWorker) res.status(404).send({msg:"not found"})
        else res.send(unicWorker)
    }catch(error){
        next(error)
    }
}

const upDateWorker = async (req, res, next) => {
    let {id} = req.params;
    let data = req.body;
    
    try{
        console.log(id)
        console.log(data)
        const saveUser = await DataWorkers.findByIdAndUpdate(id, data, {new: true})
        res.send(saveUser)

    }catch(error){
        next(error)
    }
}


module.exports = {getAllWorkers,getWorkerById,upDateWorker}