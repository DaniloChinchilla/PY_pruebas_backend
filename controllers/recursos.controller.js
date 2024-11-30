const recursosModelo = require('../models/recursos.model');

async function obtenerRecursos(req,res){
    
    try {

        const result = await recursosModelo.obtenerRecursos();
        res.json(result);
    
    } catch (err) {
        res.status(500).json({ success: false, error: "Unknown error."});
    }
}

async function agregarRecurso(req,res){
    try {
        const result = await recursosModelo.agregarRecurso(req.body);
          res.json(result);
    
    } catch (err) {
        res.status(500).json({ success: false, error: "Unknown error."});
    }
};

async function eliminarRecurso(req,res){
    try {
        const result = await recursosModelo.eliminarRecurso(req.body);
          res.json(result);
    
    } catch (err) {
        res.status(500).json({ success: false, error: "Unknown error."});
    }
}

module.exports = {
    obtenerRecursos,
    agregarRecurso,
    eliminarRecurso
};