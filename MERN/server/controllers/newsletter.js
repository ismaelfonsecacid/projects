const Newsletter = require('../models/newsletter')


async function subscribeEmail(req, res) {
    const {
        email
    } = req.body
    if (!email) return res.status(400).send({
        msg: 'Email obligatorio'
    })
    const newsletter = new Newsletter({
        email: email.toLowerCase(),
    });
    try {
        const newsletterStored = await newsletter.save();
        res.status(200).send({
            msg: 'Email saved successfully'
        });
    } catch (error) {
        res.status(400).send({
            msg: 'El email ya esta registrado'
        });
    }
}

async function getEmails(req, res) {
    try {
        const {
            page = 1, limit = 10
        } = req.query

        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
        };

        const newsletter = await Newsletter.paginate({}, options);

        res.status(200).send(newsletter);
    } catch (error) {
        res.status(400).send({
            msg: 'Error al obtener los emails'
        });
    }
}

async function deleteEmail(req, res) {
    const {
        id
    } = req.params
    try {
        await Newsletter.findByIdAndDelete(id)
        res.status(200).send({
            msg: 'Email deleted'
        });
    } catch (error) {
        res.status(200).send({
            msg: 'Error al eliminar el email'
        });
    }
}





module.exports = {
    subscribeEmail,
    getEmails,
    deleteEmail

}