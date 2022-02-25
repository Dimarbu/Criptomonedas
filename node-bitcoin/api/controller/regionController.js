const express = require('express');
const router = express.Router();

const regionRoutes = require('./../routes/region');

router.get('/listRegion', (req, res, next) => {
    regionRoutes
        .getRegion()
        .then(region => {        
            res.send({
                region: region,
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send("Error obteniendo la lista de regiones");
        });
});

module.exports = router;