const User = require('../models/User');
const User_type = require('../models/User_type');

const validarADMIN_ROLE = async (req, res, next) => {

    const uid = req.uid;
    try {
        const userDB = await User.findById(uid);
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'User does not exist'
            });
        };
        const user_roleDB = await User_roles.findById(userDB.user_role);
        // console.log(user_roleDB);
        if(user_roleDB.name === 'admin'){
            next();
        } else {
            return res.status(401).json({
                ok: false,
                msg: 'You do not have permissions to perform this action'
            });
        };
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'unauthorized'
        })
    };
};

module.exports = { validarADMIN_ROLE };