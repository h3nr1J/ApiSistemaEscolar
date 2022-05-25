const faker = require("faker")
class DocenteServices {
  constructor() {
    this.docentes = []
    this.generarDatos()
  }
  generarDatos() {
    const limite = 10;
    for (let i = 0; i < limite; i++) {
      this.docentes.push({
        codigoD: faker.datatype.uuid(),
        usuario: faker.internet.userName(),
        contrasenia: faker.internet.password(),
        nombre: faker.name.firstName(),
        especialidad: Math.floor(Math.random() * (6 - 1)) + 1,
        apellidoP: faker.name.lastName(),
        apellidoM: faker.name.lastName(),
        celular: faker.phone.phoneNumber,
        correo: faker.internet.email
      });
    }
  }
  create(docente) {
    docente.codigoD = faker.datatype.uuid();
    this.docentes.push(docente)
  }
  update(id, docente) {
    const DocenteActualizar = this.findBy(id);
    if (DocenteActualizar != undefined) {
      DocenteActualizar.usuario  = docente.usuario;
      DocenteActualizar.contrasenia = docente.contrasenia;
      DocenteActualizar.nombre = docente.nombre;
      DocenteActualizar.especialidad = docente.especialidad;
      DocenteActualizar.apellidoP = docente.apellidoP;
      DocenteActualizar.apellidoM = docente.apellidoM;
      DocenteActualizar.celular = docente.celular;
      DocenteActualizar.correo = docente.correo;

    }
  }

  delete(id) {
    this.docentes.splice(this.docentes.indexOf(this.findBy(id)), 1)
  }

  findAll() {
    return this.docentes
  }

  findBy(id) {
    return this.docentes.find(element => element.codigoD === id)
  }
}

module.exports = DocenteServices
