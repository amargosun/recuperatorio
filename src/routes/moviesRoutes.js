const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

const validacionMoviesBack = require("../middlewares/validacionMoviesBack.js")

router.get('/', moviesController.list);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/add', moviesController.add);
router.post('/movies/create', validacionMoviesBack, moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/delete/:id', moviesController.destroy);
router.put('/movies/delete/:id', moviesController.destroy);

module.exports = router;