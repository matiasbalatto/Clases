var express = require('express');
var router = express.Router();
var bd = require('./BD/bd');


router.get ('/',(req,res,next)=>{
    console.log(req.session.usuario);
    if (req.session.usuario)
        {
        bd.query("select * from promocion",(err,rows)=>
            {    
            if (err) {console.log(err)}
            else {
                console.log(rows);
                res.render('promociones',{dato:rows});
            }
        })
        
        }
        else {
                res.redirect('/login');
        }

    
})





module.exports=router;