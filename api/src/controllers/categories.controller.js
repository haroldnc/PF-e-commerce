const Categories = require('../models/Categories');

const getCategories = async (req, res) => {
   const { name } = req.query;

   try {
      let categories;

      if (name) categories = await Categories.find({
         name: new RegExp(`${name}`,'i')
      });
      else categories = await Categories.find();

      res.status(200).json(categories);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const getCategoryById = async (req, res) => {
   const { idCategory } = req.params;

   try {
      const category = await Categories.findById(idCategory);

      res.status(200).json(category);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const addCategory = async (req, res) => {
   const { name, tags } = req.body;

   try {
      if (!name) throw new Error('Name not found');

      const category = new Categories({ name });
      category.tags = [];

      if (tags){
         tags.forEach(tag => {
            if (!tag.name) throw new Error(`Category "${tag.name}" contains an invalid tag`);
   
            category.tags.push({ name: tag.name });
         });
      }

      await category.save();

      res.status(200).json({ msg: 'Category created successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message });
   }
}

const addSubCategory = async (req, res) => {
   const { idCategory } = req.params;
   const { name } = req.body;

   try {
      if (!name) throw new Error('Name not found');
      if (name.length < 3) throw new Error('Subcategory name accept minimun 3 letters');
      if (!(/^[a-zñáéíóú\s]$/i.test(name))) throw new Error('Subcategory name only accept letters');

      await Categories.updateOne({ _id: idCategory }, {
         $push: { tags: { name } }
      }, {
         new: true,
         upsert: true
      });

      res.status(200).json({ msg: 'Subcategory created successfully' });
   } catch(error) {
      res.status(422).json({ error: error.message });
   }
}


module.exports = {
   getCategories,
   getCategoryById,
   addCategory,
   addSubCategory
}