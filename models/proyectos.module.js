const db = require('../controllers/db.controller');

async function obtenerProyectos(req, res){
    
    try {
        const sql = `CALL obtenerProyectos();`;
        const response = await db.query(sql);
        return response[0];
    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
    }
};

module.exports = {
    obtenerProyectos
};