const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const router = require('./server/routes/index');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);
app.get('*', (req, res) => res.status(200).send({
    message: 'test message',
}));


app.listen(port, () => {
    global.console.log(`App listen on port ${port}`);
});

module.exports = app;
