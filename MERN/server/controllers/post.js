const Post = require('../models/post');
const image = require('../utils/image')

async function createPost(req, res) {
    const post = new Post(req.body)
    post.created_at = new Date();

    const imagePath = image.getFileName(req.files.miniature);
    post.miniature = imagePath;
    try {
        const postStored = await post.save();
        res.status(200).send(postStored);

    } catch (error) {
        res.status(400).send({
            msg: 'Error al crear el post'
        });
    }
}



module.exports = {
    createPost,
};