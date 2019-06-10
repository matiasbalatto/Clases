var express = require('express');
var router = express.Router();
var database = require('./BD/bd');

router.get('/', function(req,res,next){
    res.render('usuario')
    })

router.post('/2',function(req,res,next)
{
    var nombre = req.body.buscar;
    console.log(nombre);

    var querySelect = "select * from usuarios where usuario ='"+nombre+"'";

    // database.query(querySelect,function (error,resultado){
    //     if (error){
    //         console.log(error);
    //     }
    //     else {
    //         console.log(resultado);
    //         res.render('usuario',{mensaje:resultado})
    //     }
    // })    
    
    var nombreElminar = resultado[0]
    var queryDelete = "update usuarios set estado = '"+estado+"' where usuario = '"+nombreEliminar+'"';

    
})


module.exports = router;
