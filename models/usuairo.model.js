const db = require('../controllers/db.controller');

async function validarUsuario(username, password) {
    const sql = `CALL BuscarUsuario(?, ?);`;
    const results = await db.query(sql, [username, password]);
    return results.length > 0 ? results[0] : null;
};

async function obtenerUsuarios(){
    
    try {
        const sql = `CALL obtenerUsuarios();`;
        const response = await db.query(sql);
        return response[0];
    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
    }
}

module.exports = {
    validarUsuario,
    obtenerUsuarios,
};