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

const userControllers = require(path.resolve(__dirname, '../controllers/userControllers'));

router.get('/login', userControllers.login);
router.post('/login', validacionLoginBack, userControllers.ingresar); 
router.get('/registro', userControllers.registro);
router.post('/registro', validacionRegistroBack, userControllers.crearUsuario);
router.get('/logout', userControllers.logout);
module.exports = router;