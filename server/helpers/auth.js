'use strict'

const crypto = require('crypto')
const jwt = require('jsonwebtoken')


function randomKey(){
    var chars =  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var length = 8;
    var result = '';

    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];

    return result;
}

function hash(data, key){
  const hash = crypto.createHmac('sha256', key)
                     .update(data)
                     .digest('hex');
  return hash;
}


function auth(req,res,next){
  const token = req.headers.token
  if(token){
    jwt.verify(token, 'AssFF9', function(err, decode){
      console.log(decode);
      console.log(req.params.id);
      if(req.params.id == decode.id){
        next();
      }else {
        res.send('u dont have access to this account')
      }
    })
  }else {
    res.send('anda belum login')
  }
}


module.exports = {
  randomKey,
  hash,
  auth
};
