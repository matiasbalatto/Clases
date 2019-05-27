var express = require('express');
var router = express.Router();
var bd = require('./BD/bd');

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Bienvenido' });
  });

router.post('/',(req,res,next)=>{
  var usuario=req.body.usuario;
  var password=req.body.password;

  bd.query("select * from usuarios where usuario='"+usuario+"' and password = '"+password+"'",(err,row)=>{
    //console.log(usuario);
    if (err)
    res.render('login',{mensaje:'datos incorrectos'});
        
    else 
        res.render('login',{mensaje:'datos correctos'});
})
 
})

module.exports = router;