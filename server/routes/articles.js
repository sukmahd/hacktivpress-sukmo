'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/articleController')

router.get('/', controller.getAllArticles)
router.get('/:id', controller.getOneArticle)
router.post('/', controller.postArticle)
router.delete('/:id', controller.deleteArticle)
router.put('/:id', controller.editArticle)
router.get('/category/:category', controller.getByCategory)
router.get('/author/:author', controller.getByAuthor)

module.exports = router;
