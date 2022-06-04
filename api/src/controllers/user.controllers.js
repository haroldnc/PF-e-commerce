const User = require("../models/User.js");
const User_roles = require('../models/User_roles');
const Publications = require('../models/Publications');
//const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt');

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

const getAllUsers = async (req, res) => {
    // obtener usuarios // paginacion? si no va la saco
    const { page = 1, limit = 10 } = req.query; 
    const start = (page - 1) * limit;
    const end = page * limit;
    try {
        const users = await User.find({})
            .skip(start)
            .limit(limit)
            .populate('user_role', 'name')
            .exec();
        const total = await User.countDocuments();//cuenta la cantidad de documentos
        const countPages = Math.ceil(total / limit);
        res.json({
            ok: true,
            user: req.uid, //id del usuario que esta logueado
            users,
            total,
            end,
            countPages
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

const upDateUser =  (req, res) => {
    const { id } = req.params;
    const user = req.body;
    const newUserInfo = {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
        dni: user.dni,
        phone: user.phone,
        web: user.web,
        linkedin: user.linkedin
    };
    User.findByIdAndUpdate( id, newUserInfo, { new: true })
          .then(result => {
              res.json(result)
          })
          .catch(e => console.log(e))
};

const deleteUser = async (req, res) => {
    const { id } = req.params
    // borrar publicaciones del usuario
    await User.findByIdAndDelete(id);
    return new Promise((resolve, reject) => {
        Publications.deleteMany({ 'idUser': id }, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
    .then(result => {
        res.json(result);
    })
    .catch(e => console.log(e));
};

const createUser = async (req, res) => {
    // agregar usuario  
    const { username, firstName, lastName, email, password, image, user_role, dni, phone, web} = req.body;
    try {
        // validar si nickname, email, telefono y dni ya existen.
        const existUserName = await User.findOne({ username });
        const existEmail = await User.findOne({ email });
        const existPhone = await User.findOne({ phone });
        const existDni = await User.findOne({ dni });
        if (existUserName) { 
            return res.status(400).json({
                ok: false,
                msg: 'This username is already registered'
            });
        }
        
        else if (existEmail) { 
            return res.status(400).json({
                ok: false,
                msg: 'This email is already registered'
            });
        }
        
        else if (existPhone) { 
            return res.status(400).json({
                ok: false,
                msg: 'This phone is already registered'
            });
        }
        
        else if (existDni) { 
            return res.status(400).json({
                ok: false,
                msg: 'This DNI is already registered'
            });
        }
        //como me viene el user_role? String o Id? ===> llega id
        // const userRole = await User_roles.findOne({user_role});
        else {
        const usuario = new User({
            username,
            firstName,
            lastName,
            email,
            password,
            user_role,
            image,
            dni,
            phone,
            web
        });
        // encriptar password y guardar usuario
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(password, salt);
        usuario.password = hash;
        await usuario.save();

        return res.json({
            ok: true,
            msg: "User created",
        })
    }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};



module.exports = {getUserById, getAllUsers, upDateUser, deleteUser, createUser};