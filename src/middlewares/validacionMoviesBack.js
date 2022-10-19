const { body } = require("express-validator");

module.exports = [
    body('title').notEmpty().withMessage('El título no debe estar vacío').bail(),
    body('rating').notEmpty().withMessage('La Calificación debe existir').bail(),
]