var express = require ('express');//
var router = express.Router();//

var md5=require('md5');
var uuid = require('uuid');




router.get('/',function(req,res,next){
    //req - request
    //res - respuesta
    res.render('login',{title:"bienvenida"});

})

router.post('/usuario',function(req,res,next){
    //toda la info del form, llega aca
    console.log(req);
    var usuario=req.body.usuario;
    var password=req.body.password;
    //req es el objeto request
    //body es un array del objeto
    //usuario y password son las propiedades del objeto
    //usuario y passw son los name de los input del formulario
    if (usuario=='franco' && password=='1234'){
        //renderizamos panel
        //si queremos mostrar informacion usamos res
        //si queremos ver que datos trajo usamos req
        var informacion={
            curso:'pwitn',
            dias: 'lu-mi',
            alumnos:[
                {nombre:'franco',edad:25,foto:'1.png'},
                {nombre:'cali',edad:26,foto:'1.png'},
                {nombre:'gustavo',edad:27,foto:'1.png'},
                {nombre:'matias',edad:31,foto:'1.png'},
            ]
        }
        res.render('panel',informacion);
        // renderizamos panel


    }else{
        //si el usuario no es franco o la contraseña no es 1234
        //res.redirect('/');
        res.render('login',{mensaje:'usuario o contraseña incorrecta'});

    }
})


module.exports = router;//error de middleware
