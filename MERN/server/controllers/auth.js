const User = require('../models/user');
const bcrypt = require('bcryptjs');

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

module.exports = {
    register,
};
