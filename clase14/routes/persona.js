var express=require('express');
var router= express.Router();

router.get('/:nombre/:edad/:foto', function(req,res,next){
//req.body.usuario
//console.log(req)-> params contiene informacion de las rutas params: [{}]
//
// var nombre=req.params.nombre;
// var edad = req.params.edad;
// var foto=req.params.foto;

// res.render('persona',{nombre:nombre,edad:edad,foto:foto})

var datos={
    nombre:req.params.nombre,
    edad: req.params.edad,
    foto: req.params.foto
}

res.render('persona',datos);

})
module.exports = router; 
