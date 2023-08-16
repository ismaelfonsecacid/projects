const Menu = require('../models/menu')

async function createMenu(req, res) {
    const menu = new Menu(req.body);

    try {
        const menuStored = await menu.save();
        res.status(200).send(menuStored);
    } catch (error) {
        res.status(400).send({
            msg: 'Error al crear el menu'
        });
    }
}











module.exports = {
    createMenu
}