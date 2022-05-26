const User = require("../models/User.js");
const User_roles = require('../models/User_roles');
const Publications = require('../models/Publications');
const nodemailer = require('nodemailer')
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
            .populate('user_roles', 'name')
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
        res.json(result)
    })
    .catch(e => console.log(e))
};

const createUser = async (req, res) => {
    // agregar usuario  
    const { username, firstName, lastName, email, password, image, user_role, dni, phone, web} = req.body;
    try {
        // validar si nickname, email, telefono y dni ya existen.
        const existUserName = await User.findOne({ username });
        if (existUserName) { 
            return res.status(400).json({
                ok: false,
                msg: 'This username is already registered'
            });
        };
        const existEmail = await User.findOne({ email });
        if (existEmail) { 
            return res.status(400).json({
                ok: false,
                msg: 'This email is already registered'
            });
        };
        const existPhone = await User.findOne({ phone });
        if (existPhone) { 
            return res.status(400).json({
                ok: false,
                msg: 'This phone is already registered'
            });
        };
        const existDni = await User.findOne({ dni });
        if (existDni) { 
            return res.status(400).json({
                ok: false,
                msg: 'This DNI is already registered'
            });
        };
        // como me viene el user_role? String o Id? ===> llega id
        // const userRole = await User_roles.findOne({user_role});
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
        // encriptar password
        const salt = await bcrypt.genSalt(10);
        usuario.password = bcrypt.hashSync(password, salt);
        // guardar usuario
        await usuario.save();
        // enviar email de confirmacion de registro
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'manipogo@gmail.com',
                pass: 'Bepo07121984'
            }
        });
        const mailOptions = {
            from: "e-Commerce <",
            to: usuario.email,
            subject: 'Confirmation of registration',
            text: 'Hello ' + usuario.firstName + ' ' + usuario.lastName + '\n\n' +
                'Thank you for registering on e-Commerce.\n' +
                'To confirm your registration, please click on the following link:\n\n' +
                'http://localhost:3000/confirmar/' + usuario._id + '\n\n' +
                "If it doesn't work, copy and paste the link into your browser.\n\n" +
                'Thank you,\n' +
                'e-Commerce'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        // Vamos a autenticar con jwt u otro?  generar jwt?
        // const token = await generateJwt(usuario.id);
        // respuesta
        /*res.json({
            ok: true,
            usuario,
            token
        });*/

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