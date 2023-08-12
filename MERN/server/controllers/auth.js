const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt')

async function register(req, res) {
    const { firstname, lastname, email, password } = req.body;

    if (!email) return res.status(400).send({ msg: "El email es obligatorio" });
    if (!password) return res.status(400).send({ msg: "La password es obligatoria" });

    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = new User({
            firstname,
            lastname,
            email: email.toLowerCase(),
            role: "user",
            active: false,
            password: hashPassword
        });

        const userStorage = await user.save();
        res.status(200).send(userStorage);
    } catch (error) {
        res.status(400).send({ msg: "Error al crear el usuario" });
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    if (!email) return res.status(400).send({ msg: "El email es obligatorio" });
    if (!password) return res.status(400).send({ msg: "La password es obligatoria" });

    const emailLowercase = email.toLowerCase();

    try {
        const userStore = await User.findOne({ email: emailLowercase }).exec();

        if (!userStore) {
            return res.status(404).send({ msg: "Usuario no encontrado" });
        }

       bcrypt.compare(password, userStore.password, (bcryptError,check) => {
        if(bcryptError) {
            res.status(500).send({ msg: "Error en el server"})
        } else if (!check) {
            res.status(400).send({ msg: "Contraseña error"})
        }else if (!userStore.active){
            res.status(401).send({ msg: "Usuario no autorizado o no activo"})
        } else{
            res.status(200).send({
                access : jwt.createAccessToken(userStore),
                refresh: jwt.createRefreshToken(userStore),
            })
        }

       })

        // Aquí puedes continuar con la lógica de autenticación y manejo de contraseñas

    } catch (error) {
        res.status(500).send({ msg: "Error del servidor" });
    }
}

module.exports = {
    register,login
};
