const express = require('express');
const PostController = require('../controllers/post')
const multiparty = require('connect-multiparty'); //this is for images

const md_auth = require('../middleware/authenticated');
const md_upload = multiparty({
    uploadDir: "./uploads/blog"
})

const api = express.Router()

api.post('/post', [md_auth.asureAuth, md_upload], PostController.createPost)


module.exports = api;