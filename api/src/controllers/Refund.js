const stripe = require("stripe")(process.env.PUBLIC_KEY) 

const PostRefund = async (req, res, next) => {
    let charge = req.body;

    try{
        const refund = await stripe.refunds.create({
            charge: charge,
          });
        res.send(refund)
    }catch(error){
        console.log(error)
    }
}

module.exports = {PostRefund}