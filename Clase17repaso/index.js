var express = require('express');
var router = express.Router();
var database = require('./BD/bd');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/1',function(req,res,next){
  var nombreUsuario = req.body.nombreUsuario;
  var password = req.body.password;
  var confirmado = req.body.confirmado;
  var estado = req.body.estado;
  //console.log(nombreUsuario);
  var query="insert into usuarios (usuario,password,confirmado,estado) values ('"+nombreUsuario+"','"+password+ "','"+confirmado+"','"+estado+"')";
  
  database.query(query,function(error,resultado){
    if (error){
      console.log(error)
    } else{
      console.log(resultado);
      res.redirect('/');
    }
     
  })



});

module.exports = router;
