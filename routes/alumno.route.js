const express = require("express");

const alumnoService = require('../services/alumno.service')
const cursoService = require('../services/curso.service')
const docenteService = require('../services/docente.service')
const aulaService = require('../services/aula.service')

const servicioAlumno = new alumnoService()
const servicioCurso = new cursoService()
const servicioDocente = new docenteService()
const servicioAula = new aulaService()

const router = express.Router();

//METODOS GET
//GET datos alumnos
router.get('/datos/:id',(req,res) => {
  const {id} = req.params
  const alumno = servicioAlumno.findBy(id)
  res.status(200).json(alumno)
})

//GET cursos
router.get('/cursos',(req,res) =>{
  const cursos = servicioCurso.findAll()
  res.status(200).json(cursos)
})

router.get('/cursos/:id',(req,res)=>{
    const {id} = req.params
    const curso = servicioCurso.findBy(id)
    res.status(200).json(curso)
})
//GET aulas
router.get('/aula/:id', (req,res) => {
    const {id} = req.params
    const aula = servicioAula.findBy(id)
    res.status(200).json(aula)
})

/// ----- METODOS PATCH -----
router.patch('/:idAlumno',(req,res)=> {
  const {idAlumno} = req.params
  const contraseniaSinModifcar = servicioAlumno.findBy(idAlumno)
  const contrasenia = req.body
  servicioAlumno.update(idAlumno,contrasenia)
  const contraseniaNueva = servicioAlumno.findBy(idAlumno)
  res.status(200).json({
    mensaje: 'Contraseña actualizada',
    contraseniaAntigua: contraseniaSinModifcar,
    contraseniaNueva: contraseniaNueva
  })
})
module.exports = router;
