const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;
const express = require('express');
const { body } = require('express-validator');
const { Op } = require("sequelize");

const { validationResult } = require('express-validator');
const { cls } = require('sequelize');

const Users = db.User;

const userControllers = {
    login: function(req,res){
        res.render(path.resolve(__dirname, '../views/login'));
    },

    registro: function(req,res){
        res.render(path.resolve(__dirname, '../views/registro'));
    },
    ingresar: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./login', {titulo: 'login', errors: resultValidation.mapped(), 
            old: req.body});
        }        
        Users.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then(function(resultado){    
            if (resultado == null){
                let error = "No existe el Usuario";
                return res.render('./login', {titulo: 'login', errors: {email: {msg: error}}});
            }
            if (!bcrypt.compareSync(req.body.password, resultado.dataValues.password)){
                let error = "La contraseña no es correcta";
                return res.render('./login', {titulo: 'login', errors: {password: {msg: error}}});
            }
            delete resultado.dataValues.password;
            req.session.usuario = resultado.dataValues;
            return res.redirect('/'); 
        })
    },
    crearUsuario: (req, res) => {
        const resultValidation =  validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./registro', {titulo: 'registro', errors: resultValidation.mapped()
            });
        }        
        Users.findOne({
            where: {
                email: req.body.email,
            }
        })

        .then(function(resultado){
            if (resultado != null){
                let error = 'Ese mail ya está registrado';
                return res.render('./registro', {titulo: "Registro", errors: {email: {msg: error}}});
            }else{
                Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    role: 0
                })
                return res.redirect("/login");
            }
        })    
    },
    logout: (req,res) =>{
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
    }
}
module.exports = userControllers;
