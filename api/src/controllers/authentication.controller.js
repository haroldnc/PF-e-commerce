const User = require("../models/User");
const User_roles = require('../models/User_roles');
const bcrypt = require('bcrypt');
const { googleVerify } = require('../helpers/googleVerify');
const { generateJwt } = require('../helpers/generateJwt');

const login = async (req, res) => {
    // login comun por ahora
    const { email, password } = req.body;
    try {
        // validar email
        const existEmail = await User.findOne({ email })
            .populate('user_role', 'name')
        if (!existEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'The email is not registered'
            });
        };
        // validar password
        const validPassword = await bcrypt.compareSync(password, existEmail.password);// develve true o false
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'The password is wrong'
            });
        };
        // generar jwt
        const token = await generateJwt(existEmail.id);
        // respuesta
        res.json({
            ok: true,
            usuario: existEmail,
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

const googleSignIn = async (req, res) => {
    const googleToken = req.body.tokenId;
    const { givenName, familyName } = req.body;
    try {
        const { name, email, img } = await googleVerify(googleToken);
        const usuarioDb = await User.findOne({ email });// busca si existe el email
        // user_role seteo user por default
        const user_role = await User_roles.findOne({ name: 'user' });
        let usuario;
        // create user
        if (!usuarioDb) {// si no existe el email crea una cuenta nueva
            usuario = new User({
                username: name,
                firstName: givenName,
                lastName: familyName,
                email,
                image: img,
                password: ':)',
                user_role: user_role._id
            });
        }
        else{
            usuario = usuarioDb;// si existe el email continua con la cuenta existente 
        }
        await usuario.save();// debe ir dentro del if?
        const token = await generateJwt(usuario.id);
        res.json({
            ok: true,
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

const renewToken = async (req, res) => {
    const uid = req.uid;
    const token = await generateJwt(uid);
    const usuario = await User.findById(uid).populate('user_role', 'name');
    res.json({
        ok: true,
        usuario,
        token
    });
};


module.exports = { login, googleSignIn, renewToken };