'use strict'

const Article = require('../models/Article')


function getAllArticles(req,res){
  Article.find()
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function getOneArticle(req,res){
  Article.findOne(req.params.id)
  .then(response => {
    res.send(response)
  })
  .catch(err =>{
    res.send(err)
  })
}

function postArticle(req,res){
  Article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function editArticle(req,res) {
  Article.where({
    _id:req.params.id
  })
  .update({
    title: req.body.title,
    content: req.body.content,
    category: req,body.category
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function deleteArticle(req,res){
  Article.deleteOne({
    _id: req.params.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAllArticles,
  getOneArticle,
  deleteArticle,
  postArticle,
  editArticle
};
