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

async function getPosts(req, res) {
    try {
        const {
            page = 1, limit = 10
        } = req.query

        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
            sort: {
                created_at: "asc"
            }
        };

        const posts = await Post.paginate({}, options);

        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send({
            msg: 'Error al obtener los posts'
        });
    }
}

async function updatePost(req, res) {
    const {
        id
    } = req.params;
    const postData = req.body;
    if (req.files.miniature) {
        const imagePath = image.getFileName(req.files.miniature);
        postData.miniature = imagePath;
    }
    try {
        await Post.findByIdAndUpdate(id, postData);
        res.status(200).send({
            msg: 'Actualizacion correcta'
        })
    } catch (err) {
        res.status(400).send({
            msg: 'Error al actualizar el post'
        })
    }
}

async function deletePost(req, res) {
    const {
        id
    } = req.params;

    try {
        await Post.findByIdAndDelete(id);
        res.status(200).send({
            msg: 'Post deleted'
        });
    } catch (error) {
        res.status(404).send({
            msg: 'Error al eliminar el post'
        });
    }
}

async function getPost(req, res) {
    try {
        const {
            path
        } = req.params;
        console.log(path);
        const postStored = await Post.findOne({
            path
        });

        if (!postStored) {
            res.status(400).send({
                msg: 'No hay ningun post'
            });
        } else {
            res.status(200).send(postStored);
        }
    } catch (error) {
        res.status(500).send({
            msg: 'Error del server'
        });
    }
}


module.exports = {
    createPost,
    getPosts,
    updatePost,
    deletePost,
    getPost


};