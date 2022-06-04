const stripe = require("stripe")(process.env.API_KEY_STRIPE) 



const CreateRefund = async (req, res, next) => {
    
    try{
        let {payment_intent} = req.body;
        const refund = await stripe.refunds.create({
            payment_intent,
        });
        res.json(refund)
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

// const UpDateRefund = async (req,res,next) =>{
//     try{
//         let {order_id, refund_id} = req.body
//         const refund = await stripe.refunds.update(
//             refund_id,
//             {metadata: {order_id}}
//         );

//         res.send(refund)
//     }catch(error){
//         next(error)
//     }
// }

module.exports = {
    CreateRefund, 
    RetrievReund,
}