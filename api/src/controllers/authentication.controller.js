const User = require("../models/User");

const login = async (req, res) => {
    // login comun por ahora
    const { email, password } = req.body;
    try {
        // validar email
        const existUser = await User.findOne({ email })
            .populate('user_role', 'name')
        if (!existUser) {
            return res.status(400).json({
                ok: false,
                msg: 'The email is not registered'
            });
        };
        // validar password
        if (password !== existUser.password) {
            return res.status(400).json({
                ok: false,
                msg: 'The password is wrong'
            });
        };
        // respuesta
        res.json({
            ok: true,
            usuario: existUser,
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