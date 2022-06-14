const Publications = require('../../models/Publications');
const DataWorkers = require('../../models/DataWorkers');

const getPostsByUser = async (req, res) => {
   const { id } = req.params;

   try {
      const publications = await Publications.find({user: id})
         .populate('user', { _id:1, firstName:1, lastName:1, image:1 })
         .populate('service', { _id:1, name:1 });

      res.status(200).json(publications);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

module.exports = {getPostsByUser};