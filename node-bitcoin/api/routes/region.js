const connection = require('../connection/connection');

module.exports = {
    async getRegion() {
        const dataRegion = await connection.query('select * from regiones');
        return dataRegion.rows;
    }
}