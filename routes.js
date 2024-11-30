// Importaciones
const express = require('express');
const router = express.Router();
const usuarioController = require('./controllers/usuario.controller');
const rolesController = require('./controllers/roles.controller');
const recursosController = require('./controllers/recursos.controller');
const proyectosController = require('./controllers/proyectos.controller');

router.post('/login', usuarioController.login);
router.get('/obtenerUsuarios', usuarioController.obtenerUsuarios);
router.get('/obtenerRoles', rolesController.obtenerRoles);
router.get('/obtenerRecursos', recursosController.obtenerRecursos);
router.post('/agregarRecurso', recursosController.agregarRecurso);
router.post('/eliminarRecurso', recursosController.eliminarRecurso);
router.get('/obtenerProyectos', proyectosController.obtenerProyectos);

module.exports = router;