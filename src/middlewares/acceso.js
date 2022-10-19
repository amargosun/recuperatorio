const fs = require('fs');
const path = require('path');

        
module.exports = (req,res,next) =>{
    res.locals.usuario = false;
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        return next();
    }else{
        return next();
    }
}
