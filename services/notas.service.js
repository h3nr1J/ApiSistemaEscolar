const faker = require("faker")
class NotaServices {
    constructor() {
        this.notas = []
        this.generarDatos()
    }
    generarDatos() {
        const limite = 10;
        for (let i = 0; i < limite; i++) {
            this.cursos.push({
              codN: faker.datatype.uuid(),
              unidadUno: Math.floor(Math.random() * (20 - 1)) + 1,
              unidadDos: Math.floor(Math.random() * (20 - 1)) + 1,
              unidadTres: Math.floor(Math.random() * (20 - 1)) + 1,
              PromedioF:(unidadUno+unidadDos+unidadTres)/3,
              alumno: faker.name.firstName(),
              docente: faker.name.firstName()
            });
        }
    }
    create(nota) {
        nota.codN= faker.datatype.uuid();
        this.notas.push(nota)
    }
    update(id, nota) {
        const notasUpdate = this.findBy(id)
        if (notasUpdate != undefined) {
          notasUpdate.unidadUno =  nota.unidadUno
          notasUpdate.unidadDos = nota.unidadDos
          notasUpdate.unidadTres = nota.unidadTres
          notasUpdate.PromedioF = nota.PromedioF
          notasUpdate.alumno = nota.alumno
          notasUpdate.docente = nota.docente
        }
    }

    delete(id) {
        this.notas.splice(this.notas.indexOf(this.findBy(id)), 1)
    }

    findAll() {
        return this.notas
    }

    findBy(id) {
        return this.notas.find(element => element.codN == id) //pepito
    }
}

module.exports = NotaServices
