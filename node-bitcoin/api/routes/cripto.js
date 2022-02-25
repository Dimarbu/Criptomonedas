const connection = require('../connection/connection');

module.exports = {
    async getCripto() {
        const dataCripto = await connection.query('select * from criptomonedas');
        return dataCripto.rows;
    },

    async getCoinsById(id) {
        const coinById = await connection.query(`select c.id, c.simbolo, c.nombre, c.tasa from region_cripto rc
        right join criptomonedas c 
        on rc.id_cripto = c.id 
            where rc.id_region = $1`, [id]);
        return coinById.rows;
    },

    async getCoinsByIdUser(id) {
        const coinById = await connection.query(`select c.id, c.simbolo, c.nombre, c.tasa from usuario_cripto uc
        right join criptomonedas c 
        on uc.id_cripto = c.id 
            where uc.id_usuario = $1`, [id]);
        return coinById.rows;
    },

    async saveCoinOfModal(idUser, idCripto) {

        const dataSaveCoin = await connection.query(`insert into usuario_cripto (id_usuario, id_cripto)
        values ($1, $2)`, [idUser, idCripto]);

        return dataSaveCoin.rows;
    },
    async deleteCoin(id, idUser) {
        const coinById = await connection.query(`delete from usuario_cripto uc
        where uc.id_cripto = $1 and uc.id_usuario = $2`, [id, idUser]);
        return coinById.rows;
    },
}