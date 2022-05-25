const faker = require("faker")
class AsistenciaServices {
    constructor() {
        this.asistencias = []
        this.generarDatos()
    }
    generarDatos() {
        const limite = 10;
        for (let i = 0; i < limite; i++) {
            this.asistencias.push({
                codRA: faker.datatype.uuid(),
                nroSesionRA: faker.datatype.number(),
                fechaRA: faker.datatype.datetime(),
                horaInicio: faker.datatype.datetime(),
                horaFin: faker.datatype.datetime(),
                docente: faker.name.firstName(),
                Unidad: faker.datatype.number(),

            });
        }
    }
    create(asistencia) {
      asistencia.codRA = faker.datatype.uuid();
      this.asistencias.push(asistencia)
    }
    update(id, asistencia) {
        const AsistenciaActualizar = this.findBy(id);
        if (AsistenciaActualizar != undefined) {
          AsistenciaActualizarUnidad.nroSesionRA = asistencia.nroSesionRA;
          AsistenciaActualizarUnidad.fechaRA = asistencia.fechaRA;
          AsistenciaActualizarUnidad.horaInicio = asistencia.horaInicio;
          AsistenciaActualizarUnidad.horaFin = asistencia.horaFin;
          AsistenciaActualizarUnidad.docente = asistencia.docente;
          AsistenciaActualizarUnidad.Unidad = asistencia.Unidad;

        }
      }

    delete(id) {
      this.alumnos.splice(this.asistencias.indexOf(this.findBy(id)), 1)
    }

    findAll() {
      return this.asistencias
    }

    findBy(id) {
      return this.asistencias.find(element => element.codRA == id)
    }
}

module.exports = AsistenciaServices;
