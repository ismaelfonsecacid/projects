const User = require('../models/user')
const bcrypt = require('bcryptjs');
const image =  require('../utils/image');



async function getMe(req,res) {
    console.log(req.user)

    const {user_id} = req.user;
    const response = await User.findById(user_id);

    if(!response) {
        res.status(400).send({msg:'No se ha encontrado usuario'})
    } else {
        res.status(200).send(response)
    }
}


async function getUsers(req,res) {

    const {active} = req.query

    let response = null

    if(active===undefined) {
        response = await User.find();
    }else {
        response = await User.find({active});
    }

   res.status(200).send(response);
}


async function createUser(req, res) {
    const { password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = new User({ ...req.body, active: false, password: hashedPassword });

    if (req.files.avatar) {

        const imagePath = image.getFileName(req.files.avatar);
        
        user.avatar = imagePath;
    }

    try {
        const userStored = await user.save();
        res.status(201).send(userStored);
    } catch (error) {
        res.status(400).send({ msg: 'Error al crear el usuario' });
    }
}

module.exports = {
    getMe,
    getUsers,
    createUser,
}