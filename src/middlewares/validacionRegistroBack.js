const { body } = require("express-validator")

module.exports = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({min: 2}).withMessage("EL nombre debe tener por lo menos 2 caracteres").bail(),
    
    body('email')
        .notEmpty().withMessage('Debe completar su email').bail()
        .isEmail().withMessage('Debes ingresar un email válido').bail(),
    
    body('password')
        .notEmpty().withMessage("La contraseña es obligatoria").bail()
        .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caractéres').bail(),
    
    body('confirm_password')
    .notEmpty().withMessage("Debe repetir la contraseña").bail()
        .custom((value, {req}) => {
            if (value != req.body.password){
                return Promise.reject("Las contraseñas deben ser iguales")
            } else {
                return true
            }
        }).bail(),
]
