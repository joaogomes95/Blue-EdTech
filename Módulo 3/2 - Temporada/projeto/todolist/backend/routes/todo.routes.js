const express = require('express');

const TodoController = require('./../controllers/todo.controller');

const router = express.Router();
const TodosController = new TodoController();

//Rota GET requests
router.get('/', TodosController.getTodos());

//Rota GET by ID
router.get('/', TodosController.getTodosById);

//Rota POST / Create
router.post('/add', TodosController.createTodo());

//Rota PUT / atualizar
router.put('/', TodosController.putTodo());

//Rota DELETE / delete

router.delete('/', TodosController.deleteTodo());


module.exports = router;