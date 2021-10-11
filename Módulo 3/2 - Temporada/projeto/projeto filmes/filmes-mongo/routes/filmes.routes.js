//Importar express
const express = require('express');

const FilmesController = require('./../controllers/filmes.controller');

//Inicializando minha rota;

const router = express.Router();
const filmesController = new FilmesController();

//GET = Retorna a lista de filmes:
router.get('/', filmesController.getFilmes);

//GET by ID = Filmes por ID:
router.get('/:id', filmesController.getFilmesById);

//POST = Criar um novo filmes por
router.post('/add', filmesController.createFilme);

// Delete  = Atualizando o filmes por
router.delete('/:id', filmesController.deleteFilme);

// //PUT = Atualizar filmes;
router.put('/:id', filmesController.putFilme);

module.exports = router;