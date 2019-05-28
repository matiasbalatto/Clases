var express = require('express');
var router = express.Router();
var bd = require('./BD/bd');

//voy a mostrar todos los usuarios
//select en sql
//get localhost:3000/panel

router.get ('/',(req,res,next)=>{
    //console.log(req.session.usuario);
    if (req.session.usuario)
        {
        bd.query("select * from usuarios",(err,rows)=>
            {    
            if (err) {console.log(err)}
            else {
                console.log(rows);
                res.render('panel',{dato:rows});
            }
        })
        
        }
        else {
                res.redirect('/login');
        }

    
})





module.exports=router;
