const db = require('../controllers/db.controller');

async function obtenerRoles(){
    
    try {
        const sql = `CALL obtenerRoles();`;
        const response = await db.query(sql);
        return response[0];
    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
    }
}

module.exports = {
    obtenerRoles,
};