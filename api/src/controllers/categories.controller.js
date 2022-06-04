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
   const { id } = req.params;

   try {
      const category = await Categories.findById(id).populate({path: 'services'});

      res.status(200).json(category);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const addCategory = async (req, res) => {
   const { name, img, phrase } = req.body;

   try {
      if (!name) throw new Error('"name" is required');
      if (!img) throw new Error('"img" is required');
      if (!phrase) throw new Error('"phrase" is required');

      await Categories.create({ name, img, phrase });

      res.status(200).json({ msg: 'Category created successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message });
   }
}

const updateCategory = async (req, res) => {
   const { id } = req.params;
   const { name, img, phrase } = req.body;

   try {
      await Categories.findByIdAndUpdate(id, { name, img, phrase });

      res.status(200).json({ msg: 'Category updated successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message })
   }
}

const deleteCategory = async (req, res) => {
   const { id } = req.params;

   try {
      await Categories.findByIdAndDelete(id);
      await Services.deleteMany({category: id});

      res.status(200).json({ msg: 'Category deleted successfully' })
   } catch(error) {
      res.status(422).json({ error: error.message });
   }
}

module.exports = {
   getCategories,
   getCategoryById,
   addCategory,
   updateCategory,
   deleteCategory
}