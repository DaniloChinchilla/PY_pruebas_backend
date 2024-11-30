const db = require('../controllers/db.controller');

async function obtenerRecursos(req, res){
    
    try {
        const sql = `CALL obtenerRecursos();`;
        const response = await db.query(sql);
        return response[0];
    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
    }
};

async function agregarRecurso(data){
    try {
        const sql = `CALL agregarRecurso(?,?,?,?);`;
        const response = await db.query(sql,[data.id_role,data.nombre_usuario,data.email,data.id_usuario]);
        return 'ok';
    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
    }
}

async function eliminarRecurso(data){
    console.log(data)
    try {
        const sql = `CALL eliminarRecurso(?);`;
        const response = await db.query(sql,[data.id_recurso]);
        return 'ok';
    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
    }
}

module.exports = {
    obtenerRecursos,
    agregarRecurso,
    eliminarRecurso
};