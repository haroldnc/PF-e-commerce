const Categories = require('../models/Categories');
const Services = require('../models/Services');

const getCategories = async (req, res) => {
   const { name } = req.query;

   try {
      let categories;

      if (name) categories = await Categories.find({
         name: new RegExp(`${name}`,'i')
      }).populate({path: 'services'});
      else categories = await Categories.find().populate({path: 'services'});

      res.status(200).json(categories);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const getCategoryById = async (req, res) => {
   const { idCategory } = req.params;

   try {
      const category = await Categories.findById(idCategory).populate({path: 'services'});

      res.status(200).json(category);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const addCategory = async (req, res) => {
   const { id } = req.query;

   try {
      if (id) {
         const { services } = req.body;

         if (!Array.isArray(services) || !services.length) throw new Error('Services not found');

         await Services.insertMany( services.map(s => {
            return { ...s, category: id }
         }));
      } else {
         const { name, img, phrase } = req.body;

         if (!name) throw new Error('"name" is required');
         if (!img) throw new Error('"img" is required');
         if (!phrase) throw new Error('"phrase" is required');
   
         await Categories.create({ name, img, phrase });
      }

      res.status(200).json({ msg: 'Category created successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message });
   }
}

const updateCategory = async (req, res) => {
   const { id } = req.query;
   const { name, img, phrase } = req.body;

   try {
      if (!id) throw new Error('Category ID is required');

      await Categories.updateOne({ _id: id }, { name, img, phrase });

      res.status(200).json({ msg: 'Category updated successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message })
   }
}

const updateService = async (req, res) => {
   const { idCategory } = req.params;
   const { idService } = req.query
   const { name, img, category } = req.body;

   try {
      if (!idService) throw new Error('Service ID is required');

      await Services.findByIdAndUpdate({ _id: idService ,category: idCategory }, {
         name,
         img,
         category
      });

      res.status(200).json({ msg: 'Service updated successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message })
   }
}

module.exports = {
   getCategories,
   getCategoryById,
   addCategory,
   updateCategory,
   updateService
}