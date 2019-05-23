var express = require('express');
var router = express.Router();
var bd = require('./BD/bd');

router.get('/', function(req, res, next) {
    res.render('registro', { title: 'Bienvenido a la peluqueria' });
  });
//arrow functions: sintaxtis "nueva" para definir
    router.post('/',(req,res,next)=>{
        var usuario=req.body.usuario;//usuario es el name del input
        var password=req.body.password; //el password despues de body es el name del input
        //query es un metodo de la libreria mysql que recibe dos parametros obligatorios
        //consulta y funcion anonima (error, resultado)
        //error es un bojeto que almacena la referencia del error en la consulta

        var dato={
            usuario:req.body.usuario,
            password:req.body.password,
            confirmado:0,
        }

        bd.query("insert into usuarios set ?",dato,(err,row)=>{
            if (err)
                console.log(err);
                
            else 
                res.render('registro',{mensaje:'registro exitoso'});
        })

        // bd.query("insert into usuarios (usuario, password,confirmado) values ('"+usuario+"','"+password+"',0)",(err,rows)=>{
        //     if (err){
        //         console.log(err);
        //     }else {
        //         res.render('registro',{mensaje:'Registro Exitoso'});
        //     }
        // })
    })
module.exports = router;