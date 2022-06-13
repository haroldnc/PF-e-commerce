const User_roles = require("../../models/User_roles");
const User = require("../../models/User");
const Categories = require("../../models/Categories");
const DataWorkers = require("../../models/DataWorkers");
const Publications = require("../../models/Publications");
const Services = require("../../models/Services");

const tables = {
   categories: {
      model: Categories,
      fields: [ "name", "img", "phrase" ]
   },
   dataworkers: {
      model: DataWorkers,
      fields: [
         "title",
         "aboutMe",
         "textInfo",
         "pricePerHour",
         "p_image",
         "userId"
      ]
   },
   publications: {
      model: Publications,
      fields: [
         "title",
         "description",
         "price",
         "user",
         "service",
         "img",
         "score"
      ]
   },
   services: {
      model: Services,
      fields: [ "name", "img", "category" ]
   },
   user_roles: {
      model: User_roles,
      fields: [ "name" ]
   },
   users: {
      model: User,
      fields: [
         "username",
         "firstName",
         "lastName",
         "email",
         "password",
         "image",
         "user_role",
         "dni",
         "phone",
         "web",
         "linkedin",
         "punctuation",
         "confirm_email"
      ]
   }
};

module.exports.clear = (args, done) => {
   console.clear();
   done('','');
}

module.exports.exit = (args, done) => {
   process.exit();
}

module.exports.getTableNames = async (args, done) => {
   let str = '';
   const names = Object.keys(tables);

   names.forEach(e => str += e + '\n')

   done(str, '');
}

module.exports.getRoles = async (args, done) => {
   let str = '';
   const roles = await User_roles.find();

   roles.forEach(e => str += e.toString() + '\n')

   done(str, '');
}

module.exports.getRoleId = async (args, done) => {
   if (!args[0]){
      done('No se ingresó el rol. Por ejemplo: "getRole user"');
   } else {
      try{
         const rol = await User_roles.findOne({ name: args[0] });

         done(rol._id);
      } catch(error){
         done('No existe el rol ingresado');
      }
   }
}

module.exports.createRole = async (args, done) => {
   if (!args[0]){
      done('No se estableció el nombre del nuevo rol. Por ejemplo: "createRole moderador"');
   } else {
      try{
         const rol = await User_roles.create({ name: args[0] });

         done(`Nuevo rol creado con id: ${rol._id}`);
      } catch(error){
         done('El nombre ingresado no está permitido');
      }
   }
}

module.exports.deleteRole = async (args, done) => {
   if (!args[0]){
      done('No se ingresó el nombre rol. Por ejemplo: "deleteRole moderador"');
   } else {
      try{
         const rol = await User_roles.deleteOne({ name: args[0] });

         done(`Rol eliminado correctamente`);
      } catch(error){
         done('El nombre ingresado no existe');
      }
   }
}

module.exports.completeEmptyField = async (args, done) => {
   if (!args[0]){
      done('No se ingresó el nombre de la tabla')
   } else if (!tables.hasOwnProperty(args[0])) {
      done(`No existe ninguna tabla con el nombre ${args[0]}`);
   } else if (!args[1]) {
      done('No se ingresó el campo a completar');
   } else if (!tables[args[0]].fields.includes(args[1])) {
      done(`El campo ingresado no existe o no está habilitado para modificación en la tabla ${args[0]}`)
   } else if (!args[2]) {
      done('No se estableció el valor a completar');
   } else {
      try {
         const value = args.slice(2).join(' ');
         const results = await tables[args[0]].model.find({ [args[1]]: "" });

         for(let i=0; i<results.length; i++){
            await tables[args[0]].model.findByIdAndUpdate(results[i]._id, {
               [args[1]]: value
            })
         }
         done(`Se actualizaron ${results.length} registros`);
      } catch(error) {
         done(error.message);
      }
   }
}

module.exports.corregirPostsWorkers = async (args, done) => {
   try {
      const worker_role = await User_roles.findOne({ name: "worker" });
      const workers = await DataWorkers.find();
      const userWorkerIds = workers.map(e => e.userId);
      const posts = await Publications.find().populate('user', 'user_role');
      const posts_user = posts.filter(e => {
         return !e.user || e.user.user_role.toString() !== worker_role._id.toString();
      });
      const n = posts_user.length;
      const m = workers.length;
      let k;

      for (let i=0; i<n; i++){
         k = Math.floor(Math.random() * m);

         await Publications.findByIdAndUpdate(posts_user[i]._id, { user: userWorkerIds[k] });
      }

      done(`Se actualizaron ${posts_user.length} registros`);
   } catch(error) {
      done(error.message);
   }
}