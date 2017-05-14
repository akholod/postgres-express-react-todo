const express = require('express');

const router = express.Router();
const todoItemsController = require('../controllers').todoItems;

router.post('/api/todos/:todoId/items', todoItemsController.create)
router.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
router.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

module.exports = router;
