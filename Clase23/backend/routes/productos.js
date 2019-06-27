var express = require('express');
var router = express.Router();
var bd = require('./BD/bd');


router.get('/',(req,res,next)=>{
//renderizar vista ya no
//enviar informacion
//send trae un array de objetos de la table que hacemos la query (select from productos)
bd.query("select * from productos", (err,data)=>{
    if (err){console.log(err);}
    else{
        //devuelve un array
        res.status(200).send(data);    
    }
})

})

module.exports = router;
