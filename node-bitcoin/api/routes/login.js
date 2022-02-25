const connection = require('../connection/connection');

module.exports = {
    async validLogin(username, password) {       

        const dataLogin = await connection.query(`select * from usuarios u 
		where u.username = $1
		 and u.pass_word = $2`, [username, password]);

         
        return dataLogin.rows;
    },
    
}