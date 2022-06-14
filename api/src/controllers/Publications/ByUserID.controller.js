const Publications = require('../../models/Publications');

const getPostsByUser = async (req, res) => {
   const { id } = req.params;

   try {
      const publicacions = await Publications.find({user: id})
         .populate('user', { _id:1, firstName:1, lastName:1, image:1 })
         .populate('service', { _id:1, name:1 })
         .populate('subscription_type', 'name');

      res.status(200).json(publicacions);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

module.exports = {getPostsByUser};