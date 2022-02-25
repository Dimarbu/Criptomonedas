const express = require('express');
const router = express.Router();

const loginRoutes = require('./../routes/login');

router.post('/validLogin/', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(500).send("No hay suficientes datos");
    }
    loginRoutes
        .validLogin(username, password)
        .then((user) => {
            res.send({
                user: user
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send("Error obteniendo datos del usuario");
        });
});

module.exports = router;