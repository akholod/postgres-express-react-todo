const express = require('express');

const router = express.Router();
const todosController = require('../controllers').todos;

router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
}))
.post('/api/todos', todosController.create)
.get('/api/todos', todosController.list);

module.exports = router;
