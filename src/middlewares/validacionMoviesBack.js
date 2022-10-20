const { body } = require("express-validator");

module.exports = [
    body('title').notEmpty().withMessage('El título no debe estar vacío').bail(),
    body('rating').notEmpty().withMessage('La Calificación debe existir').bail()
    .isFloat({ min: 0, max: 10}).withMessage('La Calificación debe estar entre 0 y 10').bail(),
]