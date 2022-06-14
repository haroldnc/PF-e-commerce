const Publications = require('../../models/Publications');
const DataWorkers = require('../../models/DataWorkers');

const getPostsByUser = async (req, res) => {
   const { id } = req.params;

   try {
      const worker = await DataWorkers.findOne({ userId: id })
         .populate('subscription_type', 'name');

      const publications = await Publications.find({user: id})
         .populate('user', { _id:1, firstName:1, lastName:1, image:1 })
         .populate('service', { _id:1, name:1 });

      res.status(200).json({
         posts: [...publications],
         subscription_type: {
            worker.subscription_type._id,
            worker.subscription_type.name
         }
      });
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

module.exports = {getPostsByUser};