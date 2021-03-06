const express = require("express");

const administradorService = require('../services/administrador.service')
const alumnoService = require('../services/alumno.service')
const docenteService = require('../services/docente.service')
const cursoService = require('../services/curso.service')
const aulaService = require('../services/aula.service')

const servicioAdministrador = new administradorService()
const servicioAlumno = new alumnoService()
const servicioDocente = new docenteService()
const servicioCurso = new cursoService()
const servicioAula = new aulaService()

const router = express.Router()

// Metodos GET
router.get('/',(req,res) => {
    const administrador = servicioAdministrador.findAll()
    res.status(200).json(administrador)
})
router.get('/:id',(req,res) => {
    const {id} = req.params
    const administrador = servicioAdministrador.findBy(id)
    res.status(200).json(administrador)
})

router.get('/datos/docentes',(req,res) =>{
    const docentes = servicioDocente.findAll()
    res.status(200).json(docentes)
})

router.get('/datos/docentes/:id',(req,res)=>{
    const {id} = req.params
    const docente = servicioDocente.findBy(id)
    res.status(200).json(docente)
})

router.get('/datos/alumnos',(req,res) => {
    const alumnos = servicioAlumno.findAll()
    res.status(200).json(alumnos)
})

router.get('/datos/alumnos/:id', (req, res) => {
    const {id} = req.params
    const alumnos = servicioAlumno.findBy(id)
    res.status(200).json(alumnos)
})

router.get('/datos/aulas',(req,res) => {
    const aulas = servicioAula.findAll()
    res.status(200).json(aulas)
})

router.get('/datos/aulas/:id',(req,res) => {
    const {id} = req.params
    const aulas = servicioAula.findBy(id)
    res.status(200).json(aulas)
})

router.get('/datos/cursos',(req,res) => {
  const cursos = servicioCurso.findAll()
  res.status(200).json(cursos)
})

router.get('/datos/cursos/:id',(req,res) => {
  const {id} = req.params
  const curso = servicioCurso.findBy(id)
  res.status(200).json(curso)
})

// Metodos POST
router.post('/crear/', (req, res) => {
    const body = req.body
    servicioAdministrador.create(body)
    res.status(200).json({
        mensaje: 'Registro de administrador exitoso',
        datos: body
    })
})

router.post('/crear/alumno', (req, res) => {
    const body = req.body
    servicioAlumno.create(body)
    res.status(200).json({
        mensaje: 'Registro de alumno existoso',
        datos: body
    })
})

router.post('/crear/docente', (req, res) => {
    const body = req.body
    servicioDocente.create(body)
    res.status(200).json({
        mensaje: 'Registro de docente existoso',
        datos: body
    })
})

router.post('/crear/curso', (req, res) => {
    const body = req.body
    servicioCurso.create(body)
    res.status(200).json({
        mensaje: 'Registro de curso existoso',
        datos: body
    })
})

router.post('/crear/aula', (req, res) => {
    const body = req.body
    servicioAula.create(body)
    res.status(200).json({
        mensaje: 'Registro de aula existoso',
        datos: body
    })
})

// Metodos PUT
router.put('/editar/alumno/:id', (req, res) => {
    const { id } = req.params
    const body = req.body
    servicioAlumno.update(id, body)
    res.status(200).json({
        mensaje: 'Alumno modificado',
        datos: servicioAlumno.findBy(id)
    })
})

router.put('/editar/docente/:id', (req, res) => {
    const { id } = req.params
    const body = req.body
    servicioDocente.update(id, body)
    res.status(200).json({
        mensaje: 'Docente modificado',
        datos: servicioDocente.findBy(id)
    })
})

router.put('/editar/aula/:id', (req, res) => {
    const { id } = req.params
    const body = req.body
    servicioAula.update(id, body)
    res.status(200).json({
        mensaje: 'Aula modificado',
        datos: servicioAula.findBy(id)
    })
})

router.put('/editar/curso/:id', (req, res) => {
    const { id } = req.params
    const body = req.body
    servicioCurso.update(id, body)
    res.status(200).json({
        mensaje: 'Curso modificado',
        datos: servicioCurso.findBy(id)
    })
})

// Metodos DELETE
router.delete('/eliminar/:id',(req,res) => {
    const { id } = req.params
    const datoEliminado = servicioAdministrador.findBy(id)
    servicioAdministrador.delete(id)
    res.status(200).json({
        mensaje: "Registro eliminado",
        dato: datoEliminado
    })
})
router.delete('/eliminar/alumnos/:id', (req,res) => {
    const {id} = req.params
    const datoEliminado = servicioAlumno.findBy(id)
    servicioAlumno.delete(id)
    res.status(200).json({
        mensaje: "Registro eliminado",
        dato: datoEliminado
    })
})

router.delete('/eliminar/docente/:id', (req,res) => {
    const {id} = req.params
    const datoEliminado = servicioDocente.findBy(id)
    servicioDocente.delete(id)
    res.status(200).json({
        mensaje: "Registro eliminado",
        dato: datoEliminado
    })
})

router.delete('/eliminar/aula/:id', (req,res) => {
  const {id} = req.params
  const datoEliminado = servicioAula.findBy(id)
  servicioAula.delete(id)
  res.status(200).json({
      mensaje: "Registro eliminado",
      dato: datoEliminado
  })
})

router.delete('/eliminar/curso/:id', (req,res) => {
    const {id} = req.params
    const datoEliminado = servicioCurso.findBy(id)
    servicioCurso.delete(id)
    res.status(200).json({
        mensaje: "Registro eliminado",
        dato: datoEliminado
    })
})


module.exports = router;
