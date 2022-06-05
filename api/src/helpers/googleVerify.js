const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_ID); 

const googleVerify = async token => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        requiredAudience: process.env.GOOGLE_ID,
    });
    const payload = ticket.getPayload();
    return {
        name: payload.name,
        email: payload.email,
        img: payload.picture,
    };
};

module.exports = { googleVerify };