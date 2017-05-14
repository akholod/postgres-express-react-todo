const express = require('express');

const router = express.Router();
const todoItemsController = require('../controllers').todoItems;

router.post('/api/todos/:todoId/items', todoItemsController.create)
// .get('/api/todos/:todoId/items', todoItemsController.list);

module.exports = router;
