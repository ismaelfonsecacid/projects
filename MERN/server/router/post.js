const express = require('express');
const PostController = require('../controller/post')
const multiparty = require('connect-multiparty'); //this is for images

const md_auth = require('../middleware/authenticated');
const md_upload = multiparty({
    uploadDir: "./uploads/blog"
})

const api = express.Router()


module.exports = api