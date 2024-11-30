const rolesModelo = require('../models/roles.model');

async function obtenerRoles(req,res){
    
    try {

        const result = await rolesModelo.obtenerRoles();
        res.json(result);
    
    } catch (err) {
        res.status(500).json({ success: false, error: "Unknown error."});
    }
}

module.exports = {
    obtenerRoles
};