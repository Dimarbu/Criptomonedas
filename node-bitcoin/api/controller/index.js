const express = require('express');
const criptoRouter = require('./criptoController');
const regionRouter = require('./regionController');
const loginRouter = require('./loginController');
const app = express();

const cors = require('cors');
app.use(cors());

app.use('/cripto', criptoRouter);
app.use('/region', regionRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
    res.send('Inicio');
});

module.exports = app;