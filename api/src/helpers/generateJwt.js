const jwt = require('jsonwebtoken');

const generateJwt = (id) => {
    const payload = {
        id
    };
    return new Promise((resolve, reject) => {
        //console.log(payload, 'entro a generar jwt');
        jwt.sign(
            payload, 
            process.env.ACCESS_TOKEN_SECRET, 
            { expiresIn: '12h' },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject('no se pudo generar token');
                } else {
                    resolve(token);
                };
            }
        );
    });
};

module.exports = { generateJwt };