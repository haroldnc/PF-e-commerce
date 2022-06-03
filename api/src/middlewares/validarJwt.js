const jwt = require("jsonwebtoken");

const validarJwt = (req, res, next) => {
    // leer headers
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No token'
        });
    };
    // verificar token
    try {
        // cada ves q pase seteo en req el usuario decodificado del token
        // y el token mismo para poder usarlo en el resto de las rutas
        // que necesite el usuario autenticado 
        // y no tenga que volver a pasarlo por headers en cada ruta 
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.uid = user.id;
        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid Token'
        });
    };
};

module.exports = { validarJwt };