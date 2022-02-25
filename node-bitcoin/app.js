const express = require('express');
const router = require('./api/controller');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./configs/config');
const app = express();

app.use(express.json());
const PORT = 3000;

const cors = require('cors');
const { process_params } = require('express/lib/router');
app.use(cors());

app.set('llave', 'miclaveultrasecreta123*'); //config.llave
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/auth', (req, res) => {
    if (req.body.user === "jptrujillo" && req.body.pass === "6789") {
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, app.get('llave'), {
            expiresIn: 1440
        });
        res.json({
            mensaje: 'Autenticación correcta',
            token: token,
            /* idUser: 1 */
        });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos" });
    }
});

const protectedRoutes = express.Router();
protectedRoutes.use((req, res, next) => {
    const token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, app.get('llave'), (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({ mensaje: 'Token no proveída. ' });
    }
});

app.use('/api', router);
app.get('/api/home', protectedRoutes, (req, res) => {
    /* res.redirect('/api') */
    const datos = [
        { id: 1, nombre: "Asfo"},
        { id: 2, nombre: "Denisse"},
        { id: 3, nombre: "Carlos"}
    ];

    res.json(datos);

});
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("server listening on PORT ", PORT);
});

module.exports = app;