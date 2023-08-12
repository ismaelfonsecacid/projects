const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt')

async function register(req, res) {    // register a new user with the given credentials and password
    const {
        firstname,
        lastname,
        email,
        password
    } = req.body;

    if (!email) return res.status(400).send({
        msg: "El email es obligatorio"
    });
    if (!password) return res.status(400).send({
        msg: "La password es obligatoria"
    });

    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt); // password is encrypted

        const user = new User({  
            firstname,
            lastname,
            email: email.toLowerCase(),
            role: "user",
            active: false,
            password: hashPassword
        });

        const userStorage = await user.save(); // save the user into the storage object for later use in this function to avoid overwriting
        res.status(200).send(userStorage);
    } catch (error) {
        res.status(400).send({
            msg: "Error al crear el usuario"
        });
    }
}

async function login(req, res) {  // login with username and password
    const {
        email,
        password
    } = req.body;

    if (!email) return res.status(400).send({
        msg: "El email es obligatorio"
    });
    if (!password) return res.status(400).send({
        msg: "La password es obligatoria"
    });

    const emailLowercase = email.toLowerCase();

    try {
        const userStore = await User.findOne({
            email: emailLowercase
        }).exec();

        if (!userStore) {
            return res.status(404).send({
                msg: "Usuario no encontrado"
            });
        }

        bcrypt.compare(password, userStore.password, (bcryptError, check) => { // check password against user store and return true if it matches password crypt vs normal password
            if (bcryptError) {
                res.status(500).send({
                    msg: "Error en el server"
                })
            } else if (!check) {
                res.status(400).send({
                    msg: "Contraseña error"
                })
            } else if (!userStore.active) {
                res.status(401).send({
                    msg: "Usuario no autorizado o no activo"
                })
            } else {
                res.status(200).send({
                    access: jwt.createAccessToken(userStore),
                    refresh: jwt.createRefreshToken(userStore),
                })
            }

        })


    } catch (error) {
        res.status(500).send({
            msg: "Error del servidor"
        });
    }
}

async function refreshAccessToken(req, res) {
    const { token } = req.body;

    if (!token) {
        res.status(400).send({ msg: "Token is required" });
        return;
    }

    try {
        const { user_id } = jwt.decoded(token);

        const userStorage = await User.findOne({ _id: user_id }).exec();

        if (!userStorage) {
            res.status(404).send({ msg: "User not found" });
            return;
        }

        const newAccessToken = jwt.createAccessToken(userStorage);
        res.status(200).send({ accessToken: newAccessToken });
    } catch (error) {
        console.error("Error al decodificar el token:", error);
        res.status(400).send({ msg: "Invalid token" });
    }
}



module.exports = {
    register,
    login,
    refreshAccessToken
};