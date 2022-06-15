const Services = require('../models/Services');

const getServices = async (req, res) => {
   const { name } = req.query;

   try {
      let services;

      if (name) services = await Services.find({
         name: new RegExp(`${name}`,'i')
      }).populate('category', { name:1 });
      else services = await Services.find().populate('category', { name:1 });

      res.status(200).json(services);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const getServicesById = async (req, res) => {
   const { id } = req.params;

   try {
      const service = await Services.findById(id).populate('category', { _id:0, name:1 });

      res.status(200).json(service);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const addService = async (req, res) => {
   const { name, img, category } = req.body;

   try {
      await Services.create({ name, img, category });

      res.status(200).json({ msg: 'Service created successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message });
   }
}

const updateService = async (req, res) => {
   const { id } = req.params;
   const { name, img, category } = req.body;

   try {
      await Services.findByIdAndUpdate(id, {
         name,
         img,
         category
      });

      res.status(200).json({ msg: 'Service updated successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message })
   }
}

const deleteService = async (req, res) => {
   const { id } = req.params;

   try {
      await Services.findByIdAndDelete(id);

      res.status(200).json({ msg: 'Service deleted successfully' })
   } catch(error) {
      res.status(422).json({ error: error.message });
   }
}

module.exports = {
   getServices,
   getServicesById,
   addService,
   updateService,
   deleteService
}