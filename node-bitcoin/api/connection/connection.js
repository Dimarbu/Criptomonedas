const { Pool } = require('pg');



const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bitcoin',
    password: 'postgres',
    port: 5432,
});

module.exports = pool;
    /* await client.connect();

const res = await client.query('select * from criptomonedas');
console.log(res.rows); // Hello world!
await client.end();



connectionData().then((result) => {
console.log(result);
}); */