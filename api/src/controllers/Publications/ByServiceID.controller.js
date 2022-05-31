const Publications = require('../../models/Publications');

const getPostsByService = async (req, res) => {
   const { idService } = req.params;

   try {
      const publicacion = await Publications.find({service: idService})
         .populate('user', { _id:0, firstName:1, lastName:1 })
         .populate('service', { _id:0, name:1 });

      res.status(200).json(publicacion);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

module.exports = {getPostsByService};