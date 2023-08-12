const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../constants')

function createAccessToken(user) {
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 3);   //3h to refresh token

    const payload = {
        token_type: 'access_token',
        user_id: user._id,
        iat:Date.now(),    //date of access token
        exp : expToken.getTime(), //exp token 
    }
    
    return jwt.sign(payload,JWT_SECRET_KEY);
}

function createRefreshToken(user) {
    const expToken = new Date();
    expToken.getMonth(expToken.getMonth() + 1)  

    const payload = {
        token_type: 'access_token',
        user_id: user._id,
        iat:Date.now(),    //date of access token
        exp : expToken.getTime(), //exp token 
    }
    
    return jwt.sign(payload,JWT_SECRET_KEY);
    
}

function decoded(token) {
    return jwt.decode(token,JWT_SECRET_KEY,true);
}

module.exports = {
    createAccessToken,createRefreshToken,decoded
}