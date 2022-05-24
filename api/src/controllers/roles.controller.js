const Roles = require('../models/roles');

const getRoles = async (req, res) => {
   try {
      const roles = await Roles.find();
      res.status(200).json(roles);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const addRol = async (req, res) => {
   const { name } = req.body;

   try {
      if (!name) throw new Error('name not found');

      await Roles.create({ name: name })
      res.status(200).json({ msg: 'Role created successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message });
   }
}

module.exports = {
   getRoles,
   addRol
}