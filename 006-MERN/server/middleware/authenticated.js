const jwt = require('../utils/jwt');

function asureAuth(req, res, next) { //next go to the next function

    if (!req.headers.authorization) {
        return res.status(403).send({
            msg: 'La peticion no tiene la cabecera de autenticacion'
        })
    }

    const token = req.headers.authorization.replace("Bearer ", "");

    try {
        const payload = jwt.decoded(token);
        const {exp}= payload;
        const currentData = new Date().getTime();

        if(exp<=currentData){
            return res.status(400).send({msg:'Token ha expirado'})
        }
        req.user = payload;
        next();


    } catch (error) {
        return res.status(404).send({
            msg: 'Token invalid'
        })
    };






}

module.exports = {
    asureAuth
}