var express = require('express');
var router = express.Router();
var bd=require('./BD/bd');
router.post('/registro', (req, res, next)=> {
  console.log(req.body.nombre);
  res.status(200).send([{id:1}])
});

module.exports = router;
