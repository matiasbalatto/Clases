var express = require('express');
var router = express.Router();
var bd = require('./BD/bd');
var md5=require('md5');

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Bienvenido' });
  });

router.get('/logout',(req,res,next)=>{
  //destruir las sesiones del usuario
  req.session.destroy();
  //destruir todas las sesiones
  req.session.destroy();
  res.redirect('/login');
  //multer /para subir archivos
  
})

router.post('/inicio', (req,res)=>{
var datos = {
  usuario :req.body.usuario,
  password :req.body.password
}

bd.query("select * from usuarios where usuario='"+datos.usuario+"'and password='"+datos.password+"'",(err,rows)=>{
  if (err){
    console.log(err);
  }else {
    console.log(rows);
    if (rows.length>0){
      req.session.usuario=rows[0].id_usuario;

      res.redirect('/panel');
      


      req.session.usuario
    } else {
      //usuario o contraseña incorrecto
      res.render('login',{mensaje:"usuario o contraseña incorrecto"});
    }
  }


})

// router.post('/',(req,res,next)=>{
//   var usuario=req.body.usuario;
//   var password=req.body.password;

//   bd.query("select * from usuarios where usuario='"+usuario+"' and password = '"+password+"'",(err,row)=>{
//     //console.log(usuario);
//     if (err)
//     res.render('login',{mensaje:'datos incorrectos'});
        
//     else 
//         res.render('login',{mensaje:'datos correctos'});
// })


  
})

module.exports = router;