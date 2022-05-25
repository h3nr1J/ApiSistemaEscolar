const faker = require("faker")
class AlumnoServices {
  constructor() {
    this.alumnos = []
    this.generarDatos()
  }
  generarDatos() {
    const limite = 10;
    const arr = ["M", "F"]
    for (let i = 0; i < limite; i++) {
      var aleatorio = Math.floor(Math.random() * arr.length)
      this.alumnos.push({
        codA: faker.datatype.uuid(),
        usuarioA: faker.internet.userName(),
        contraseniaA: faker.internet.password(),
        DniA: Math.floor(Math.random() * (99999999 - 40000000)) + 40000000,
        nombreA: faker.name.firstName(),
        apellidoPA: faker.name.lastName(),
        apellidoMA: faker.name.lastName(),
        fechaNaciA: faker.datatype.datetime(),
        sexoA: arr[aleatorio],
        direccionA: faker.address.streetSuffix(),
        gradoA: Math.floor(Math.random() * (6 - 1)) + 1
      });
    }
  }
  create(alumno) {
    alumno.codA = faker.datatype.uuid();
    this.alumnos.push(alumno)
  }
  update(id, alumno) {
    const AlumnoActualizar = this.findBy(id);
    if (AlumnoActualizar != undefined) {
      AlumnoActualizar.usuarioA = alumno.usuarioA;
      AlumnoActualizar.contraseniaA = alumno.contraseniaA;
      AlumnoActualizar.DniA = alumno.DniA;
      AlumnoActualizar.nombreA = alumno.nombreA;
      AlumnoActualizar.apellidoPA = alumno.apellidoPA;
      AlumnoActualizar.apellidoMA = alumno.apellidoMA;
      AlumnoActualizar.fechaNaciA = alumno.fechaNaciA;
      AlumnoActualizar.sexoA = alumno.sexoA;
      AlumnoActualizar.direccionA = alumno.direccionA;
      AlumnoActualizar.gradoA = alumno.gradoA;
    }
  }

  delete(id) {
    this.alumnos.splice(this.alumnos.indexOf(this.findBy(id)), 1)
  }

  findAll() {
    return this.alumnos
  }

  findBy(id) {
    return this.alumnos.find(element => element.codA == id)
  }
}

module.exports = AlumnoServices
