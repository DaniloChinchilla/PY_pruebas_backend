const proyectoModelo = require('../models/proyectos.module');

async function obtenerProyectos(req,res){
    
    try {

        const result = await proyectoModelo.obtenerProyectos();
        res.json(result);
    
    } catch (err) {
        res.status(500).json({ success: false, error: "Unknown error."});
    }
}

module.exports = {
    obtenerProyectos
};