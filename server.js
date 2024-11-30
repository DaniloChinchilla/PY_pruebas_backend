// Importaciones
const express = require('express');
const app = express();
const cors = require('cors'); 
const routes = require('./routes');
const db = require('./controllers/db.controller');
require('dotenv').config();

// habilitar CORS
app.use(cors());

// Utilizacion de JSON
app.use(express.json());

// Definicion del archivo de rutas
app.use('/', routes);

// Prueba de conexion a la bd al inciar el servidor
(async () => {
    try {
        await db.testConnection(); 
        console.log('Coneccion a la base de datos lista.');
    } catch (err) {
        console.error('Error en coneccion a la base de datos:', err.message);
        process.exit(1);
    }
})();

// Puerto de escuvha del servidor
PORT = process.env.PORT;

// Puesta en marcha del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});