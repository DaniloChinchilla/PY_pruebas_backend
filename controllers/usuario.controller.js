const usuarioModelo = require('../models/usuairo.model');

async function login(req, res) {
    
    const { name, password } = req.body;
    
    if (!name || !password) {
        return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
    }

    try {
        const user = await usuarioModelo.validarUsuario(name, password);

        if (!user) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        // Usuario válido
        return res.status(200).json({
            message: 'Usuario autenticado con éxito',
            user: {
                id: user.id_usuario,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email,
                token: user.token
            },
        });
    } catch (err) {
        console.error('Error en login:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

async function obtenerUsuarios(req,res){
    
    try {

        const result = await usuarioModelo.obtenerUsuarios();
          res.json(result);
    
    } catch (err) {
        res.status(500).json({ success: false, error: "Unknown error."});
    }
}

module.exports = {
    login,
    obtenerUsuarios
};