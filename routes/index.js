//usando express
const express = require('express');

const alumnosRouter = require('./alumno.route')
const docenteRouter = require('./docente.route')
const administradorRouter = require('./administrador.route')
// function rutas(app,ROL)
function rutas(app) {
    const routes = express.Router()
    app.use('/colegio', routes)
    routes.use('/alumno', alumnosRouter)
    routes.use('/docente', docenteRouter)
    routes.use('/admin', administradorRouter)
}

module.exports = rutas
