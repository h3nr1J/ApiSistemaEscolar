const express = require("express");

const alumnoService = require('../services/alumno.service')
const notasService = require('../services/notas.service')
const asistenciaService = require('../services/asistencia.service')
const docenteService = require('../services/docente.service')

const servicioAlumno = new alumnoService()
const servicioNotas = new notasService()
const servicioAsistencias = new asistenciaService()
const servicioDocente = new docenteService()

const router = express.Router()

// Metodos GET
router.get('/',(req,res) =>{ ///aula/:idAula/alumnos
  const alumnos = servicioDocente.findAll()
  res.status(200).json(alumnos)
})

router.get('/datos/:id',(req,res) => {
  const {id} = req.params
  const docente = servicioDocente.findBy(id)
  res.status(200).json(docente)
})

router.get('/alumnos',(req,res) =>{ ///aula/:idAula/alumnos
  const alumnos = servicioAlumno.findAll()
  res.status(200).json(alumnos)
})

router.get('/alumnos/:id',(req,res) => {
  const {id} = req.params
  const alumno = servicioAlumno.findBy(id)
  res.status(200).json(alumno)
})

router.get('/asistencias',(req,res)=>{
    const asistencias = servicioAsistencias.findAll()
    res.status(200).json(asistencias)
})

router.get('/asistencias/:id',(req,res)=>{
  const {id} = req.params
  const asistencia = servicioAsistencias.findBy(id);
  res.status(200).json(asistencia);
})

router.get('/notas',(req,res)=>{
  const notas = servicioNotas.findAll();
  res.status(200).json(notas);
})

router.get('/notas/:id',(req,res)=>{
  const {id} = req.params
  const nota = servicioNotas.findBy(id)
  res.status(200).json(nota)
})

// Metodos POST
router.post('/crear/asistencias',(req,res) =>{
  const body = req.body;
  servicioAsistencias.create(body);
  res.status(200).json({
    mensaje: 'registro de asistencia exitoso',
    datos: body
  })
})

// Metodos PATCH - actualizacion parcial
router.patch('/editar/notas/:idAlumno',(req,res) =>{
  const {idAlumno} = req.params
  const body = req.body
  servicioNotas.update(idAlumno,body)
  res.status(200).json({
    mensaje: 'Nota modificada',
    datos: servicioNotas.findBy(idAlumno)
  })
})

router.patch('/editar/asistencia/:idAsistencia',(req,res) =>{
  const {idAsistencia} = req.params
  const body = req.body
  servicioAsistencias.update(idAsistencia,body)
  res.status(200).json({
    mensaje: 'Asistencia modificada',
    datos: servicioAsistencias.findBy(idAsistencia)
  })
})

router.patch('/editar/docente/:idDocente',(req,res) =>{
  const {idDocente} = req.params
  const body = req.body
  servicioDocente.update(idDocente,body)
  res.status(200).json({
    mensaje: 'Contraseña modificada',
    datos: servicioDocente.findBy(idDocente)
  })
})

module.exports = router;
