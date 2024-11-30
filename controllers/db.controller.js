// Importaciones
const mysql = require('mysql2');
require('dotenv').config();

// Clase definada para la conexion a la base de datos
class Database {

    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }

    async testConnection() {
        try {
            const connection = await this.getConnection();
            console.log('Conexión a la base de datos exitosa.');
            connection.release();
        } catch (err) {
            console.error('Error al conectar a la base de datos:', err.message);
            throw err;
        }
    }

    getConnection() {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) {
                    return reject(err);
                }
                resolve(connection);
            });
        });
    }

    query(sql, params) {
        return new Promise((resolve, reject) => {
            this.pool.execute(sql, params, (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
}

module.exports = new Database();