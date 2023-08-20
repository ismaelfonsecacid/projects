const express = require('express');
const NewsletterController = require('../controllers/newsletter')
const md_auth = require('../middleware/authenticated')

const api = express.Router();

//ENDPOINTS
api.post('/newsletter', NewsletterController.subscribeEmail)
api.get('/newsletter', md_auth.asureAuth, NewsletterController.getEmails)
api.delete('/newsletter/:id', md_auth.asureAuth, NewsletterController.deleteEmail)


module.exports = api;