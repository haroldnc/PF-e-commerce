const User = require("../models/User");
const bcrypt = require('bcrypt');


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
        console.log(validPassword, 'validPassword');
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'The password is wrong'
            });
        };
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


module.exports = { login };