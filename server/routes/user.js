'use strict'

const express = require('express')
const router = express.Router()

router.get('/', function(req,res){
  res.send('hai user')
})

module.exports = router;
