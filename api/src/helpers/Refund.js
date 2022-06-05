const stripe = require("stripe")(process.env.API_KEY_STRIPE) 
const Refund = require("../models/Refund")



const CreateRefund = async (req, res, next) => {
    
    try{
        let {payment_intent} = req.body;
        const refund = await stripe.refunds.create({
            payment_intent,
        });
        let time = new Date().toLocaleTimeString()
        let date = new Date().toLocaleDateString()
        const dataRefund = await Refund.create(
            {
                amount: refund.amount,
                currency: refund.currency,
                date: date,
                time: time,
                status: refund.status
            })
        res.json(dataRefund)
    }catch(error){
        if(error.code === "charge_already_refunded") res.json({msg: "el reembolso ya fue efectuado"})
        if(error.code === "resource_missing") res.json({msg: "la transaccion no existe"})
        // console.log(error)
        next(error)
    }
}

const RetrievReund = async (req,res, next) =>{
    try{
        let {id} = req.params
        const refund = await stripe.refunds.retrieve(id);
        res.send(refund)
    }catch(error){
        if(error.code === "resource_missing") res.json({msg: "la transaccion no existe"})
        // console.log(error)
        next(error)
    }
}

const getAllRefund = async (req,res,next) =>{
    try{
        const allRefundund = await Refund.find()
        if(allRefundund.length === 0 ) res.json({msg: "not found refund"})
        res.send(allRefundund)
    }catch(error){
        next(error)
    }
}

module.exports = {
    CreateRefund, 
    RetrievReund,
    getAllRefund
}