var express=require('express');
var router= express.Router();

router.get('/',function(req,res,next){
    //req - request
    //res - respuesta
    res.render('registro');

})

module.exports = router; 