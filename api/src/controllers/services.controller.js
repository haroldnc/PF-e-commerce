const Publications = require('../models/Publications');
const Services = require('../models/Services');

const getServices = async (req, res) => {
   const { name } = req.query;

   try {
      let services;

      if (name) services = await Services.find({
         name: new RegExp(`${name}`,'i')
      }).populate('category', { _id:0, name:1 });
      else services = await Services.find().populate('category', { _id:0, name:1 });

      res.status(200).json(services);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const getServicesById = async (req, res) => {
   const { idService } = req.params;

   try {
      const service = await Services.findById(idService).populate('category', { _id:0, name:1 });

      res.status(200).json(service);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const deleteService = async (req, res) => {
   const { idService } = req.params;

   try {
      await Services.findByIdAndDelete(idService);

      res.status(200).json({ msg: 'Service deleted successfully' })
   } catch(error) {
      res.status(422).json({ error: error.message });
   }
}

const getPostsByService = async (req, res) => {
   const { idPublicacion } = req.body;

   try {
      const publicacion = await Publications.find({service:idPublicacion}).populate('category', { _id:0, name:1 });

      res.status(200).json(publicacion);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

module.exports = {
   getServices,
   getServicesById,
   deleteService,
   getPostsByService
}