const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
}))

module.exports = router;
