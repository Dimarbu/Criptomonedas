const express = require('express');
const router = express.Router();

const criptoRoutes = require('./../routes/cripto');

router.get('/listCoin', (req, res, next) => {
    criptoRoutes
        .getCripto()
        .then(coins => {
            res.send({
                coins: coins,
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send("Error obteniendo la lista de monedas");
        });
});

router.get('/coinsById/:id', (req, res, next) => {
    criptoRoutes
        .getCoinsById(req.params.id)
        .then(coinAvailables => {
            res.send({
                coinAvailable: coinAvailables,
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send("Error obteniendo la lista de monedas disponibles");
        });
})

router.get('/coinsByIdUser/:id', (req, res, next) => {
    criptoRoutes
        .getCoinsByIdUser(req.params.id)
        .then(coinAvailables => {
            res.send({
                coinAvailable: coinAvailables,
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send("Error obteniendo la lista de monedas disponibles del usuario");
        });
})

router.post('/saveCoin/', (req, res, next) => {
    const idUser = req.body.idUser;
    const idCripto = req.body.idCripto;

    if (!idUser || !idCripto) {
        return res.status(500).send("No hay suficientes datos");
    }
    criptoRoutes
        .saveCoinOfModal(idUser, idCripto)
        .then((msg) => {
            res.send({
                msg: 'Dato Guardado'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send("Error guardando los datos del usuario y la criptomoneda");
        });
});

router.get('/deleteCoin/:id&:idUser', (req, res, next) => {
    criptoRoutes
        .deleteCoin(req.params.id, req.params.idUser)
        .then(coinAvailables => {
            res.send({
                coinAvailable: coinAvailables,
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send("Error eliminando la moneda del usuario");
        });
})

module.exports = router;