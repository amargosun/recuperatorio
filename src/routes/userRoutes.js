const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');
const { body } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const validacionLoginBack = require("../middlewares/validacionLoginBack.js")
const validacionRegistroBack = require("../middlewares/validacionRegistroBack.js")

//const fs = require('fs');

const userControllers = require(path.resolve(__dirname, '../controllers/userControllers'));

//const validacionesRegistro = [

    //     body('first_name').isLength({min: 1}).withMessage('El campo nombre no puede estar vacío'),
    //     body('last_name').isLength({min: 1}).withMessage('El campo apellido no puede estar vacío'),
    //     body('email').isEmail().withMessage('Agregar un email válido'),
    //     body('email').custom( (value  ) =>{
    //     for (let i = 0; i < archivoUsuarios.length; i++) {
    //         if (archivoUsuarios[i].email == value) {
    //             return false    
    //         }
    //     }
    //     return true
    // }).withMessage('Usuario ya Registrado...'),
    
//     //Aquí valido el Password   
//    body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
//     //Aquí valido la confimación del password dispuesto por el usuario
//    body('confirm_password').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),

//     //Aquí valido si las contraseñas son iguales o no
//     //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
//     //El valor { req } corresponde a lo que viene desde el formulario

//     body('confirm_password').custom((value, {req}) =>{
//         if(req.body.password == value ){
//             return true    // Si yo retorno un true  no se muestra el error     
//         }else{
//             return false   // Si retorno un false si se muestra el error
//         }    
//     }).withMessage('Las contraseñas deben ser iguales'),
// ]

router.get('/login', userControllers.login);
router.post('/login', validacionLoginBack, userControllers.ingresar); 
router.get('/registro', userControllers.registro);
router.post('/registro', validacionRegistroBack, userControllers.crearUsuario);
router.get('/logout', userControllers.logout);
module.exports = router;