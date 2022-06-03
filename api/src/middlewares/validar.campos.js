const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    try {
        validationResult(req).throw();
        next();
    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error.mapped()
        });
    };
};
    
module.exports = { validarCampos };