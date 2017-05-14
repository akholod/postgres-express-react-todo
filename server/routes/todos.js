const express = require('express');

const router = express.Router();
const todosController = require('../controllers').todos;

router.post('/api/todos', todosController.create)
.get('/api/todos/:todoId', todosController.retrieve)
.put('/api/todos/:todoId', todosController.update)
.get('/api/todos', todosController.list)
.delete('/api/todos/:todoId', todosController.destroy)

module.exports = router;
