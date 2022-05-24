const User_roles = require('../models/User_roles');

const getRoles = async (req, res) => {
   try {
      const roles = await User_roles.find();
      res.status(200).json(roles);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

const addRol = async (req, res) => {
   const { name } = req.body;

   try {
      if (!name) throw new Error('name not found');

      await User_roles.create({ name: name })
      res.status(200).json({ msg: 'Role created successfully' });
   } catch (error) {
      res.status(422).json({ error: error.message });
   }
}

module.exports = {
   getRoles,
   addRol
}